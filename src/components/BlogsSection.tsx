'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const news1 = "/assets/news-1.jpg";
const news2 = "/assets/news-2.jpg";
const news3 = "/assets/news-3.jpg";
const heroImg = "/assets/hero-headlight.jpg";
const modelRImg = "/assets/config/modelR.jpg";

const articles = [
  {
    slug: "updated-model-r",
    image: modelRImg,
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

const Title = ({ parts }: { parts: typeof articles[0]['titleParts'] }) => (
  <>
    {parts.map((part, j) => (
      <span key={j} className={part.highlight ? 'text-tiffany' : 'text-black'}>
        {part.text}
      </span>
    ))}
  </>
);

const BlogsSection = () => {
  const { t } = useTranslation();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section id="blogs" data-theme="light" className="bg-white py-16 md:py-20">
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-10 md:mb-12">
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

      {/* Grid: Featured + Side list */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[55%]"
          >
            <Link href={`/blogs/${featured.slug}`} className="block group">
              <div className="overflow-hidden mb-4">
                <img
                  src={featured.image}
                  alt={featured.titleParts.map(p => p.text).join('')}
                  className="w-full aspect-[3/2] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 font-bold">
                  {featured.category}
                </span>
                <span className="text-[10px] text-black/20">|</span>
                <span className="text-[10px] text-black/40 font-body">
                  {featured.date}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 group-hover:opacity-70 transition-opacity" style={{ fontFamily: 'var(--font-heading)' }}>
                <Title parts={featured.titleParts} />
              </h3>
              <p className="text-black/50 font-body text-sm leading-relaxed line-clamp-3">
                {featured.description}
              </p>
            </Link>
          </motion.div>

          {/* Side Articles */}
          <div className="lg:w-[45%] flex flex-col divide-y divide-black/8">
            {rest.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`${i === 0 ? 'pb-5' : 'py-5'} group`}
              >
                <Link href={`/blogs/${article.slug}`} className="flex gap-5">
                  <div className="flex-shrink-0 w-[140px] md:w-[160px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.titleParts.map(p => p.text).join('')}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-black/40 font-bold">
                        {article.category}
                      </span>
                      <span className="text-[9px] text-black/20">|</span>
                      <span className="text-[9px] text-black/40 font-body">
                        {article.date}
                      </span>
                    </div>
                    <h4 className="text-sm md:text-[15px] font-bold leading-snug mb-1.5 group-hover:opacity-60 transition-opacity" style={{ fontFamily: 'var(--font-heading)' }}>
                      <Title parts={article.titleParts} />
                    </h4>
                    <p className="text-black/40 font-body text-xs leading-relaxed line-clamp-2 hidden sm:block">
                      {article.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
