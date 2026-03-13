'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const news1 = "/assets/news-1.jpg";
const news2 = "/assets/news-2.jpg";
const news3 = "/assets/news-3.jpg";
const heroImg = "/assets/hero-headlight.jpg";

const categories = ["All", "Corporate", "Motorsport", "After Sales", "Arena"];

const articles = [
  { slug: "motorsport-season-2026", image: news1, category: "Motorsport", date: "03.10.2026", title: "The new season begins: Racing excellence on every circuit" },
  { slug: "corporate-sustainability", image: news2, category: "Corporate", date: "03.05.2026", title: "A commitment to innovation and sustainable luxury" },
  { slug: "interior-craftsmanship", image: news3, category: "After Sales", date: "02.28.2026", title: "The art of interior craftsmanship: Bespoke details" },
  { slug: "driving-academy", image: heroImg, category: "Arena", date: "02.20.2026", title: "Driving Academy 2026: Unleash your potential on track" },
];

const NewsPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-20">
        <div className="px-8 md:px-16 mb-12">
          <h1 className="text-heading-xl text-4xl md:text-6xl text-foreground mb-8">{t('news.title')}</h1>
          <div className="flex gap-6 border-b border-border">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-4 text-xs tracking-[0.2em] uppercase font-body border-b-2 transition-all ${
                  cat === activeCategory
                    ? "text-foreground border-foreground"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
          {filtered.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/news/${article.slug}`}>
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body">{article.category}</span>
                  <span className="text-[10px] text-muted-foreground">•</span>
                  <span className="text-[10px] text-muted-foreground font-body">{article.date}</span>
                </div>
                <h3 className="text-sm text-foreground font-body leading-relaxed group-hover:opacity-70 transition-opacity">{article.title}</h3>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default NewsPage;
