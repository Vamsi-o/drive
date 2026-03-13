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
  "motorsport-season-2026": {
    title: "The new season begins: Racing excellence on every circuit",
    category: "Motorsport",
    date: "March 10, 2026",
    image: news1,
    body: "The 2026 motorsport season marks a new chapter in competitive excellence. With an expanded roster of teams and drivers, the racing program continues to push the boundaries of performance and engineering innovation on circuits worldwide.",
  },
  "corporate-sustainability": {
    title: "A commitment to innovation and sustainable luxury",
    category: "Corporate",
    date: "March 5, 2026",
    image: news2,
    body: "Sustainability meets uncompromising performance. The latest corporate initiatives showcase a bold vision for the future, combining cutting-edge hybrid technology with the relentless pursuit of driving perfection.",
  },
  "interior-craftsmanship": {
    title: "The art of interior craftsmanship: Bespoke details",
    category: "After Sales",
    date: "February 28, 2026",
    image: news3,
    body: "Every interior tells a story of meticulous craftsmanship. From hand-stitched leather to carbon fiber accents, the bespoke program offers limitless possibilities for personalization.",
  },
  "driving-academy": {
    title: "Driving Academy 2026: Unleash your potential on track",
    category: "Arena",
    date: "February 20, 2026",
    image: heroImg,
    body: "The Driving Academy returns for 2026 with an enhanced program designed to help enthusiasts and owners unlock the full potential of their vehicles on world-class circuits.",
  },
};

const NewsDetailPage = ({ slug }: { slug: string }) => {
  const { t } = useTranslation();
  const article = articlesData[slug || ""];

  if (!article) {
    return (
      <>
        <NavBar />
        <div className="pt-32 px-16 text-center">
          <h1 className="text-heading-xl text-4xl text-foreground">{t('news.articleNotFound')}</h1>
          <Link href="/news" className="nav-link mt-8 inline-block">{t('news.backToNews')}</Link>
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
          <Link href="/news" className="nav-link mt-12 inline-flex items-center gap-2">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
            {t('news.backToNews')}
          </Link>
        </article>
      </main>
      <FooterSection />
    </>
  );
};

export default NewsDetailPage;
