"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BentoCard from "./components/BentoCard";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Article Data
// ─────────────────────────────────────────────────────────────────────────────

const featuredArticle = {
  slug: "architect-of-change",
  title: "Architect of Change, from Global Logistics to Sustainable Futures",
  subtitle: "Greenpac's CEO, Chika Imakita, outlines her leadership strategy for guiding the company into its next chapter.",
  author: "Destiny Goh",
  interviewee: "Chika Imakita",
  date: "November 26, 2025",
  tag: "G Magazine Vol 3",
  readTime: "12 min read",
};

const articles = [
  {
    slug: "human-architecture-organisational-change",
    title: "The Human Architecture of Organisational Change",
    subtitle: "Mastering the Head, Heart, and Hands of transformation leadership.",
    author: "G Magazine",
    date: "November 2025",
    tag: "G Magazine",
  },
  {
    slug: "b2b-sales-transformation",
    title: "From Handshakes to Dashboards: A Leader's Guide to B2B Sales Transformation",
    subtitle: "Junko Kemi, founder of kay me, shares insights on digital sales evolution.",
    author: "G Magazine",
    date: "November 2025",
    tag: "G Magazine",
  },
  {
    slug: "business-transformation-dashboard-2025",
    title: "Business Transformation Dashboard 2025",
    subtitle: "Data-driven insights on Japan and Singapore strategic comparative analysis.",
    author: "G Magazine",
    date: "2025",
    tag: "Infographic",
  },
  {
    slug: "retain-top-talent-asia",
    title: "How Companies in Asia Retain Top Talent: Insider Secrets",
    subtitle: "Employee retention strategies in Singapore's competitive talent landscape.",
    author: "Destiny Goh",
    date: "April 30, 2025",
    tag: "Skills",
  },
  {
    slug: "mindset-starting-point-change",
    title: "Mindset: The Starting Point For Change",
    subtitle: "The difference between a growth and fixed mindset and what it does for you.",
    author: "Destiny Goh",
    date: "April 18, 2023",
    tag: "Blog",
  },
  {
    slug: "bridging-generational-divide",
    title: "Bridging the Generational Divide: 3 Practical Strategies",
    subtitle: "Practical approaches to bridging workplace generational gaps.",
    author: "Destiny Goh",
    date: "January 20, 2025",
    tag: "Blog",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Animated Components
// ─────────────────────────────────────────────────────────────────────────────

function MagazineHeader() {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline();

    // Animate header elements
    tl.fromTo(
      headerRef.current.querySelector(".volume-tag"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(
      headerRef.current.querySelector(".stats-row"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={headerRef} className="text-center mb-20">
      <p className="volume-tag text-xs uppercase tracking-[0.5em] text-amber-300 mb-4">
        Volume 3 • Latest Issue
      </p>
      <h1 
        ref={titleRef}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-50 mb-6 tracking-tight"
      >
        G Magazine
      </h1>
      <p 
        ref={subtitleRef}
        className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
      >
        Your blueprint for mastering the human side of transformation. 
        We move beyond top-down mandates to explore what building genuine, 
        emotional buy-in truly looks like.
      </p>
      <div className="stats-row flex items-center justify-center gap-8 mt-8 text-sm text-slate-500">
        <span className="flex items-center gap-2">
          <span className="text-amber-400 font-semibold">6</span> Articles
        </span>
        <span className="flex items-center gap-2">
          <span className="text-amber-400 font-semibold">43</span> Pages
        </span>
        <span className="flex items-center gap-2">
          <span className="text-amber-400 font-semibold">2</span> Interviews
        </span>
      </div>
    </div>
  );
}

function FeaturedArticleCard() {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Link 
      ref={cardRef}
      href={`/article/${featuredArticle.slug}`}
      className="group relative block"
    >
      <BentoCard size="lg" glow animateOnScroll={false} className="transition-all duration-500 hover:border-amber-500/30">
        {/* Featured Badge */}
        <div className="absolute -top-3 left-8 rounded-full border border-amber-500/60 bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-300 z-10">
          Featured Interview
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-4">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-300">
                {featuredArticle.tag}
              </span>
              <span>{featuredArticle.date}</span>
              <span>•</span>
              <span>{featuredArticle.readTime}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 leading-tight group-hover:text-amber-100 transition-colors duration-300">
              {featuredArticle.title}
            </h2>
            
            <p className="text-slate-400 leading-relaxed">
              {featuredArticle.subtitle}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 font-bold group-hover:scale-110 transition-transform duration-300">
                {featuredArticle.interviewee.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">{featuredArticle.interviewee}</p>
                <p className="text-xs text-slate-500">CEO, Greenpac • Interviewed by {featuredArticle.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium pt-2">
              Read Full Interview
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* 3D Hero Preview */}
          <div className="h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
            <Hero />
          </div>
        </div>
      </BentoCard>
    </Link>
  );
}

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block h-full"
    >
      <BentoCard 
        className="h-full flex flex-col" 
        delay={index * 0.1}
      >
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
          <span className="rounded-full bg-white/10 px-3 py-1 text-slate-300 group-hover:bg-amber-500/20 group-hover:text-amber-300 transition-colors duration-300">
            {article.tag}
          </span>
          <span>{article.date}</span>
        </div>

        <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-amber-100 transition-colors duration-300 leading-tight">
          {article.title}
        </h3>

        <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-grow">
          {article.subtitle}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <p className="text-xs text-slate-500">By {article.author}</p>
          <div className="flex items-center gap-1 text-slate-600 group-hover:text-amber-400 transition-colors duration-300">
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </BentoCard>
    </Link>
  );
}

function CategoryTabs() {
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tabsRef.current) return;

    gsap.fromTo(
      tabsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tabsRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const categories = ["All", "G Magazine", "Skills", "Blog", "Podcasts", "Culture"];
  
  return (
    <div ref={tabsRef} className="flex flex-wrap items-center gap-2 mb-8">
      {categories.map((cat, index) => (
        <button
          key={cat}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            index === 0
              ? "bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105"
              : "bg-white/5 backdrop-blur-sm border border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200 hover:border-white/20"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function QuickStats() {
  const stats = [
    { label: "Articles Published", value: "50+" },
    { label: "Expert Interviews", value: "12" },
    { label: "Industry Insights", value: "25+" },
    { label: "Countries Covered", value: "8" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
      {stats.map((stat, index) => (
        <BentoCard key={stat.label} size="sm" className="text-center" delay={index * 0.1}>
          <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat.value}</p>
          <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
        </BentoCard>
      ))}
    </div>
  );
}

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={headerRef} className="mb-10">
      <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">{title}</h2>
      <p className="text-slate-500 max-w-xl">{subtitle}</p>
    </div>
  );
}

function NewsletterCTA() {
  return (
    <BentoCard size="lg" glow className="text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-4">Stay Updated</p>
      <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
        Get the latest to your inbox
      </h3>
      <p className="text-slate-400 mb-8 max-w-xl mx-auto">
        Stay in the loop with everything you need to know about leadership, 
        transformation, and career insights from Singapore and beyond.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-3.5 text-slate-200 placeholder:text-slate-500 focus:border-amber-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
        />
        <button className="rounded-xl bg-amber-500 px-8 py-3.5 font-medium text-slate-900 transition-all duration-300 hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]">
          Subscribe
        </button>
      </div>
    </BentoCard>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <Navbar />
      <main>
        <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
          {/* Magazine Header */}
          <MagazineHeader />

          {/* Quick Stats */}
          <QuickStats />

          {/* Featured Article */}
          <div className="mb-24">
            <FeaturedArticleCard />
          </div>

          {/* Articles Grid */}
          <SectionHeader 
            label="Latest Stories"
            title="Explore Our Articles"
            subtitle="Insights on leadership, transformation, and career growth from industry experts"
          />
          <CategoryTabs />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>

          {/* Newsletter CTA */}
          <NewsletterCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}
