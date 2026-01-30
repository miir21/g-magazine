import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BentoCard from "./components/BentoCard";

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
// Components
// ─────────────────────────────────────────────────────────────────────────────

function MagazineHeader() {
  return (
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.5em] text-amber-300 mb-4">
        Volume 3 • Latest Issue
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-50 mb-6">
        G Magazine
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
        Your blueprint for mastering the human side of transformation. 
        We move beyond top-down mandates to explore what building genuine, 
        emotional buy-in truly looks like.
      </p>
      <div className="flex items-center justify-center gap-8 mt-8 text-sm text-slate-500">
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
  return (
    <Link 
      href={`/article/${featuredArticle.slug}`}
      className="group relative block"
    >
      <BentoCard size="lg" glow className="transition-all hover:border-amber-500/30">
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
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 leading-tight group-hover:text-amber-100 transition-colors">
              {featuredArticle.title}
            </h2>
            
            <p className="text-slate-400 leading-relaxed">
              {featuredArticle.subtitle}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 font-bold">
                {featuredArticle.interviewee.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">{featuredArticle.interviewee}</p>
                <p className="text-xs text-slate-500">CEO, Greenpac • Interviewed by {featuredArticle.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium pt-2">
              Read Full Interview
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* 3D Hero Preview */}
          <div className="h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <Hero />
          </div>
        </div>
      </BentoCard>
    </Link>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block h-full"
    >
      <BentoCard className="h-full transition-all hover:border-white/20 hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.2)]">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
          <span className="rounded-full bg-white/10 px-3 py-1 text-slate-300">
            {article.tag}
          </span>
          <span>{article.date}</span>
        </div>

        <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-amber-100 transition-colors leading-tight">
          {article.title}
        </h3>

        <p className="text-sm text-slate-400 mb-4 line-clamp-2">
          {article.subtitle}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4">
          <p className="text-xs text-slate-500">By {article.author}</p>
          <svg className="w-5 h-5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </BentoCard>
    </Link>
  );
}

function CategoryTabs() {
  const categories = ["All", "G Magazine", "Skills", "Blog", "Podcasts", "Culture"];
  
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {categories.map((cat, index) => (
        <button
          key={cat}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            index === 0
              ? "bg-amber-500 text-slate-900"
              : "bg-white/5 backdrop-blur-sm border border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {stats.map((stat) => (
        <BentoCard key={stat.label} size="sm" className="text-center">
          <p className="text-3xl font-bold text-amber-400 mb-1">{stat.value}</p>
          <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
        </BentoCard>
      ))}
    </div>
  );
}

function NewsletterCTA() {
  return (
    <BentoCard size="lg" glow className="text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
        Get the latest to your inbox
      </h3>
      <p className="text-slate-400 mb-6 max-w-xl mx-auto">
        Stay in the loop with everything you need to know about leadership, 
        transformation, and career insights from Singapore and beyond.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:border-amber-500/50 focus:outline-none focus:bg-white/10 transition-all"
        />
        <button className="rounded-xl bg-amber-500 px-6 py-3 font-medium text-slate-900 transition-all hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]">
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
        <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-16">
          {/* Magazine Header */}
          <MagazineHeader />

          {/* Quick Stats */}
          <QuickStats />

          {/* Featured Article */}
          <div className="mb-16">
            <FeaturedArticleCard />
          </div>

          {/* Articles Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">Latest Articles</h2>
            <p className="text-slate-500 mb-6">Explore insights on leadership, transformation, and career growth</p>
            <CategoryTabs />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
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
