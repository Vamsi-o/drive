'use client';

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const news1 = "/assets/news-1.jpg";
const news2 = "/assets/news-2.jpg";
const news3 = "/assets/news-3.jpg";
const heroImg = "/assets/hero-headlight.jpg";

const articles = [
  {
    slug: "sea-expo-2026-bahrain",
    image: news1,
    tags: ["EVENTS", "EXPO"],
    date: "15 APR 2026",
    title: "eDrive at Sea Expo 2026, Bahrain",
    description: "eDrive took part in Sea Expo 2026 in Bahrain, one of the key marine and watersports industry events in the Gulf region. The exhibition became an important platform for meetings with watersports operators, investors, and strategic partners.",
  },
  {
    slug: "boat-show-2025-abu-dhabi",
    image: news2,
    tags: ["EVENTS"],
    date: "02 MAR 2026",
    title: "eDrive at International Boat Show 2025, Abu Dhabi",
    description: "eDrive participated in the International Boat Show 2025 in Abu Dhabi, presenting its latest JetCar developments and manufacturing capabilities to an international audience.",
  },
  {
    slug: "dubai-boat-show-2025",
    image: news3,
    tags: ["EVENTS", "SHOWCASE"],
    date: "18 FEB 2026",
    title: "eDrive at Dubai International Boat Show 2025",
    description: "eDrive participated in the Dubai International Boat Show 2025, one of the largest and most influential boat shows in the world, engaging with global partners and potential clients.",
  },
  {
    slug: "global-expansion",
    image: heroImg,
    tags: ["CORPORATE"],
    date: "15 NOV 2025",
    title: "What's Next for eDrive",
    description: "eDrive continues to expand internationally, with ongoing discussions and projects across multiple regions. Our focus remains on strategic partnerships, manufacturing scalability, and new premium destinations.",
  },
];

const NewsSection = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = articles.length - 1; // first article is featured

  const remainingArticles = articles.slice(1);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.scrollWidth / remainingArticles.length;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIndex(idx);
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [remainingArticles.length]);

  const featured = articles[0];

  return (
    <section id="news" className="bg-white py-20">
      {/* Header */}
      <div className="px-8 md:px-16 flex items-end justify-between mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl md:text-5xl text-black font-bold tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('news.title')}
          </h2>
        </motion.div>
        <Link
          href="/news"
          className="hidden md:inline-flex items-center gap-3 text-black hover:opacity-60 text-xs tracking-[0.15em] uppercase font-bold transition-opacity"
        >
          {t('news.readMore')}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      {/* Divider */}
      <div className="px-8 md:px-16 mb-10">
        <div className="w-full h-px bg-black/10" />
      </div>

      {/* Featured Article - Large Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-8 md:px-16 mb-14"
      >
        <Link href={`/news/${featured.slug}`} className="block group">
          <div className="relative w-full aspect-[16/8] md:aspect-[16/7] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </Link>
      </motion.div>

      {/* Scrollable Cards Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-8 md:px-16 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
        {remainingArticles.map((article, i) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] group cursor-pointer snap-start"
          >
            <Link href={`/news/${article.slug}`}>
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Tags */}
              <div className="flex items-center gap-2 mb-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.15em] uppercase font-bold text-black border border-black/20 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Date */}
              <p className="text-[11px] text-black/40 uppercase tracking-wide mb-2 font-body">
                {article.date}
              </p>
              {/* Title */}
              <h3 className="text-sm md:text-base text-black font-bold uppercase leading-snug group-hover:opacity-60 transition-opacity tracking-wide">
                {article.title}
              </h3>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              const cardWidth = el.scrollWidth / remainingArticles.length;
              el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
            }}
            className={`h-[2px] transition-all duration-300 ${
              i === activeIndex ? 'w-10 bg-black' : 'w-8 bg-black/20'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
