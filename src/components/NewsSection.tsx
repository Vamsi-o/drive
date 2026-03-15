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
  {
    slug: "jetcar-v2-unveil",
    image: news2,
    tags: ["PRODUCT", "LAUNCH"],
    date: "28 SEP 2025",
    title: "JetCar V2 Officially Unveiled",
    description: "eDrive revealed the second-generation JetCar featuring an upgraded electric powertrain, refined hull geometry, and a completely redesigned cockpit interior built for both performance and comfort.",
  },
  {
    slug: "maldives-resort-partnership",
    image: news3,
    tags: ["PARTNERSHIP"],
    date: "10 AUG 2025",
    title: "eDrive Partners with Luxury Maldives Resort",
    description: "eDrive has signed a strategic partnership with a five-star resort in the Maldives to offer JetCar experiences as part of their premium watersports program, marking the brand's entry into the Indian Ocean market.",
  },
  {
    slug: "sustainability-report-2025",
    image: news1,
    tags: ["CORPORATE", "SUSTAINABILITY"],
    date: "22 JUL 2025",
    title: "2025 Sustainability Report Published",
    description: "eDrive released its annual sustainability report outlining progress on zero-emission marine mobility, responsible manufacturing practices, and plans for carbon-neutral operations by 2028.",
  },
  {
    slug: "monaco-yacht-show",
    image: heroImg,
    tags: ["EVENTS"],
    date: "05 JUN 2025",
    title: "eDrive Showcases at Monaco Yacht Show",
    description: "The eDrive JetCar made its European debut at the prestigious Monaco Yacht Show, drawing attention from superyacht owners, charter operators, and marine technology investors.",
  },
  {
    slug: "factory-expansion-uae",
    image: news2,
    tags: ["CORPORATE", "MANUFACTURING"],
    date: "18 APR 2025",
    title: "New Manufacturing Facility in UAE",
    description: "eDrive announced the expansion of its manufacturing capabilities with a new state-of-the-art facility in the UAE, doubling production capacity to meet growing international demand.",
  },
  {
    slug: "electric-marine-innovation-award",
    image: news3,
    tags: ["AWARDS"],
    date: "02 MAR 2025",
    title: "eDrive Wins Electric Marine Innovation Award",
    description: "eDrive was recognized with the Electric Marine Innovation Award at the Global Marine Technology Conference for its pioneering work in electric jet-propulsion watercraft design.",
  },
];

const NewsSection = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const remainingArticles = articles.slice(1);

  // Calculate how many "pages" based on how many cards overflow
  const getCardMetrics = () => {
    const el = scrollRef.current;
    if (!el) return { cardWidth: 0, totalPages: 1 };
    const firstCard = el.children[0] as HTMLElement | undefined;
    if (!firstCard) return { cardWidth: 0, totalPages: 1 };
    const gap = 32;
    const cardWidth = firstCard.offsetWidth + gap;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const totalPages = maxScroll <= 0 ? 1 : Math.ceil(maxScroll / cardWidth) + 1;
    return { cardWidth, totalPages };
  };

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updatePages = () => {
      setTotalPages(getCardMetrics().totalPages);
    };

    const handleScroll = () => {
      const { cardWidth } = getCardMetrics();
      if (cardWidth === 0) return;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(idx);
    };

    updatePages();
    window.addEventListener("resize", updatePages);
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", updatePages);
      el.removeEventListener("scroll", handleScroll);
    };
  }, [remainingArticles.length]);

  const featured = articles[0];

  return (
    <section id="news" data-theme="light" className="bg-white py-20">
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

      {/* Featured Article - Large Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-8 md:px-16 mb-14"
      >
        <Link href={`/news/${featured.slug}`} className="block group">
          <div className="relative w-full aspect-[16/9] md:aspect-[3/1] overflow-hidden">
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
        className="flex gap-8 overflow-x-auto px-8 md:px-16 pb-4 snap-x snap-mandatory hide-scrollbar"
      >
        {remainingArticles.map((article, i) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[42vw] lg:w-[38vw] group cursor-pointer snap-start"
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
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const { cardWidth } = getCardMetrics();
                el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
              }}
              className={`h-[2px] transition-all duration-300 ${
                i === activeIndex ? 'w-10 bg-black' : 'w-8 bg-black/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewsSection;
