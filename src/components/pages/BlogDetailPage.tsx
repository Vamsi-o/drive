'use client';

import Link from "next/link";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const news1 = "/assets/news-1.jpg";
const news2 = "/assets/news-2.jpg";
const news3 = "/assets/news-3.jpg";
const heroImg = "/assets/hero-headlight.jpg";

const articlesData: Record<string, { title: string; category: string; date: string; image: string; body: string }> = {
  "updated-model-r": {
    title: "Introducing the Updated Model R",
    category: "Product",
    date: "January 5, 2026",
    image: heroImg,
    body: "eDrive proudly presents the updated Model R, featuring next-generation performance improvements in build quality, refined detailing, and optimized performance characteristics. The latest iteration represents our commitment to continuous excellence in marine craft engineering.",
  },
  "updated-model-f": {
    title: "Introducing the Updated Model F",
    category: "Product",
    date: "December 20, 2025",
    image: news1,
    body: "The Model F has received a comprehensive update focused on luxury, comfort, and guest experience with upgraded finishes, improved ergonomics, and refined visual elements. Every detail has been reconsidered to deliver an unmatched experience on water.",
  },
  "continuous-evolution": {
    title: "Continuous Product Evolution",
    category: "Engineering",
    date: "December 10, 2025",
    image: news2,
    body: "At eDrive, product development is a continuous process. We regularly introduce product upgrades based on real operational feedback, environmental conditions, and client experience. Our engineering team works closely with operators to ensure every improvement delivers tangible value.",
  },
  "resort-investors": {
    title: "Designed for Resorts and Investors",
    category: "Business",
    date: "December 1, 2025",
    image: news3,
    body: "eDrive JetCars are engineered not only as leisure vehicles, but as revenue-generating assets. Our models are developed with resort operations, rental efficiency, and long-term durability in mind. We provide comprehensive business models and support for operators worldwide.",
  },
};

const BlogDetailPage = ({ slug }: { slug: string }) => {
  const { t } = useTranslation();
  const article = articlesData[slug || ""];

  if (!article) {
    return (
      <>
        <NavBar />
        <div className="pt-32 px-16 text-center">
          <h1 className="text-heading-xl text-4xl text-foreground">{t('blogs.articleNotFound')}</h1>
          <Link href="/blogs" className="nav-link mt-8 inline-block">{t('blogs.backToBlogs')}</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main className="pt-24">
        <article className="max-w-3xl mx-auto px-8 py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body">{article.category}</span>
            <span className="text-[10px] text-muted-foreground">•</span>
            <span className="text-[10px] text-muted-foreground font-body">{article.date}</span>
          </div>
          <h1 className="text-heading-xl text-3xl md:text-5xl text-foreground mb-8 leading-tight">{article.title}</h1>
          <div className="aspect-video overflow-hidden mb-8">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-foreground/80 font-body leading-relaxed text-base">{article.body}</p>
          <Link href="/blogs" className="nav-link mt-12 inline-flex items-center gap-2">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
            {t('blogs.backToBlogs')}
          </Link>
        </article>
      </main>
      <FooterSection />
    </>
  );
};

export default BlogDetailPage;
