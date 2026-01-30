import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G Magazine | Good Job Creations - Recruitment Insights",
  description:
    "G Magazine by Good Job Creations: Editorial insights on IT recruitment, career strategy, and talent acquisition in Singapore and Japan.",
  keywords: [
    "IT recruitment",
    "Singapore jobs",
    "Japan recruitment",
    "career insights",
    "talent acquisition",
  ],
  authors: [{ name: "Good Job Creations" }],
  openGraph: {
    title: "G Magazine | Good Job Creations",
    description:
      "Editorial insights on IT recruitment and career strategy in APAC.",
    type: "website",
    locale: "en_SG",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://goodjobcreations.com.sg/#organization",
      name: "Good Job Creations",
      url: "https://goodjobcreations.com.sg",
      logo: {
        "@type": "ImageObject",
        url: "https://goodjobcreations.com.sg/logo.png",
      },
      description:
        "Specialist IT recruitment agency connecting top talent with leading companies across Singapore and Japan.",
      areaServed: [
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "Japan" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/good-job-creations",
        "https://www.linkedin.com/company/good-job-creations-japan",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "recruitment",
        availableLanguage: ["English", "Japanese"],
      },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://goodjobcreations.com.sg/magazine/#webpage",
      url: "https://goodjobcreations.com.sg/magazine",
      name: "G Magazine - Recruitment Insights",
      description:
        "A curated collection of editorial insights on IT recruitment, career strategy, and industry trends.",
      isPartOf: {
        "@id": "https://goodjobcreations.com.sg/#website",
      },
      about: {
        "@type": "Thing",
        name: "IT Recruitment & Career Strategy",
      },
      publisher: {
        "@id": "https://goodjobcreations.com.sg/#organization",
      },
      inLanguage: ["en", "ja"],
    },
    {
      "@type": "WebSite",
      "@id": "https://goodjobcreations.com.sg/#website",
      url: "https://goodjobcreations.com.sg",
      name: "Good Job Creations",
      publisher: {
        "@id": "https://goodjobcreations.com.sg/#organization",
      },
    },
  ],
};

function GlowBackground() {
  return (
    <div className="glow-background">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="glow-orb glow-orb-4" />
      <div className="glow-pulse" />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-50`}
      >
        <GlowBackground />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
