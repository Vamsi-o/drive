'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const news1 = "/assets/news-1.jpg";
const news2 = "/assets/news-2.jpg";
const news3 = "/assets/news-3.jpg";
const heroImg = "/assets/hero-headlight.jpg";

const articles = [
  {
    slug: "updated-model-r",
    image: heroImg,
    category: "Product",
    date: "05 JAN 2026",
    titleParts: [
      { text: "Introducing the Updated " },
      { text: "Model R", highlight: true },
    ],
    description: "eDrive proudly presents the updated Model R, featuring next-generation performance improvements in build quality, refined detailing, and optimized performance characteristics.",
  },
  {
    slug: "updated-model-f",
    image: news1,
    category: "Product",
    date: "20 DEC 2025",
    titleParts: [
      { text: "Introducing the Updated " },
      { text: "Model F", highlight: true },
    ],
    description: "The Model F has received a comprehensive update focused on luxury, comfort, and guest experience with upgraded finishes, improved ergonomics, and refined visual elements.",
  },
  {
    slug: "continuous-evolution",
    image: news2,
    category: "Engineering",
    date: "10 DEC 2025",
    titleParts: [
      { text: "Continuous " },
      { text: "Product Evolution", highlight: true },
    ],
    description: "At eDrive, product development is a continuous process. We regularly introduce product upgrades based on real operational feedback, environmental conditions, and client experience.",
  },
  {
    slug: "resort-investors",
    image: news3,
    category: "Business",
    date: "01 DEC 2025",
    titleParts: [
      { text: "Designed for " },
      { text: "Resorts", highlight: true },
      { text: " and " },
      { text: "Investors", highlight: true },
    ],
    description: "eDrive JetCars are engineered not only as leisure vehicles, but as revenue-generating assets. Our models are developed with resort operations, rental efficiency, and long-term durability in mind.",
  },
];

const BlogsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="blogs" data-theme="light" className="bg-white py-20 md:py-28">
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-2 font-bold">{t('blogs.subtitle')}</p>
            <h2 className="text-3xl md:text-5xl text-black font-bold tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('blogs.title')}
            </h2>
          </div>
          <Link href="/blogs" className="hidden md:inline-flex items-center gap-2 text-black/50 hover:text-black text-xs tracking-[0.15em] uppercase font-bold transition-colors">
            {t('blogs.readMore')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Alternating Rows */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 space-y-16 md:space-y-24">
        {articles.map((article, i) => {
          const isReversed = i % 2 !== 0;
          return (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 lg:gap-16 items-center`}>
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <Link href={`/blogs/${article.slug}`} className="block overflow-hidden group">
                    <img
                      src={article.image}
                      alt={article.titleParts.map(p => p.text).join('')}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </Link>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 font-bold">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-black/30">•</span>
                    <span className="text-[10px] text-black/40 font-body">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {article.titleParts.map((part, j) => (
                      <span key={j} className={part.highlight ? 'text-tiffany' : 'text-black'}>
                        {part.text}
                      </span>
                    ))}
                  </h3>

                  <p className="text-black/60 font-body text-sm md:text-base leading-relaxed mb-6">
                    {article.description}
                  </p>

                  <Link
                    href={`/blogs/${article.slug}`}
                    className="inline-flex items-center gap-2 bg-tiffany text-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-tiffany/80 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default BlogsSection;
