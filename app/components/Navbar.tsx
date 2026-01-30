"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Magazine", href: "/magazine" },
  { label: "Jobs", href: "/jobs" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locale, setLocale] = useState<"EN" | "JP">("EN");

  const handleLanguageToggle = () => {
    const newLocale = locale === "EN" ? "JP" : "EN";
    setLocale(newLocale);
    console.log(`Switched to ${newLocale}`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-4 md:px-6 md:py-4">
          {/* Logo - Links to Home */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <svg
              className="h-8 w-8 md:h-10 md:w-10"
              viewBox="0 0 64 64"
              role="img"
              aria-label="G Good Job Creations logo placeholder"
            >
              <circle cx="32" cy="32" r="30" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
              <path
                d="M40 32H32V22h14v8c0 9.2-6.8 14-14 14-7.7 0-14-5.8-14-14s6.3-14 14-14c4 0 7.7 1.6 10.2 4.3l-4.2 4.2c-1.5-1.6-3.5-2.5-6-2.5-4.4 0-8 3.6-8 8s3.6 8 8 8c4.1 0 7.2-2.3 8-6z"
                fill="#f8fafc"
              />
            </svg>
            <span className="text-xs uppercase tracking-[0.25em] text-slate-200 md:text-sm md:tracking-[0.3em]">
              G Magazine
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-amber-300"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={handleLanguageToggle}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 transition hover:border-amber-400 hover:text-amber-300"
            >
              {locale}
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 text-slate-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay - outside header to escape stacking context */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-in - outside header to escape stacking context */}
      <div
        className={`fixed inset-y-0 right-0 z-[110] w-72 transform border-l border-slate-700 bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="mb-8 self-end text-slate-400 hover:text-slate-200"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 transition hover:text-amber-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={handleLanguageToggle}
            className="mt-auto rounded-full border border-slate-700 px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-200 transition hover:border-amber-400 hover:text-amber-300"
          >
            {locale === "EN" ? "Switch to JP" : "Switch to EN"}
          </button>
        </div>
      </div>
    </>
  );
}
