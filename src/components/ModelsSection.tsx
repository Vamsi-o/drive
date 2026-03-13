'use client';

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
const urusImg = "/assets/car-model-2.jpg";
const huracanImg = "/assets/car-model-1.jpg";
const modelFImg = "/assets/slide-model-f.png";
const modelRImg = "/assets/slide-model-r.png";
const models = [
  {
    name: "Model R",
    label: "MODEL",
    letterLogo: "R",
    letterColor: "#D4AF37",
    logoImage: "/logo-r.png",
    tagline: "Refined Performance",
    slug: "model-r",
    image: modelRImg,
  },
  {
    name: "Model F",
    label: "MODEL",
    letterLogo: "F",
    letterColor: "#888888",
    logoImage: "/logo-f.png",
    tagline: "Pure Power on Water",
    slug: "model-f",
    image: modelFImg,
  },
  {
    name: "Lumina",
    label: "",
    letterLogo: "L",
    letterColor: "#81D8D0",
    tagline: "Innovation in Motion",
    slug: "lumina",
    image: urusImg,
  },
  {
    name: "Cybermarine",
    label: "",
    letterLogo: "C",
    letterColor: "#444444",
    tagline: "The Future, Reimagined",
    slug: "cybermarine",
    image: huracanImg,
    comingSoon: true,
  },
];

const ModelsSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const current = models[active];
  const count = models.length;

  const goPrev = () => setActive((prev) => (prev - 1 + count) % count);
  const goNext = () => setActive((prev) => (prev + 1) % count);

  return (
    <section id="models" data-theme="light" className="bg-[#FAFAFA] overflow-hidden scroll-mt-[70px]">
      {/* Top accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="py-6 lg:py-8">
        {/* Header */}
        <div className="px-8 md:px-16 mb-4">
          <div className="flex items-baseline justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-black text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t('models.title')}
            </motion.h2>
            <Link
              href="/models"
              className="hidden md:flex items-center gap-3 text-black/50 text-sm lg:text-base font-medium uppercase hover:text-black transition-colors group tracking-wide"
            >
              {t('models.discoverAll').toUpperCase()}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Model Badge row — Arrows flanking the logo/name */}
        <div className="flex items-center justify-center mb-1 min-h-[60px] lg:min-h-[80px] px-8 md:px-16 gap-10 md:gap-80">
          {/* Left Arrow — Hexagonal outline */}
          <button
            onClick={goPrev}
            className="group flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/25 hover:bg-black/50 transition-all duration-300"
            aria-label="Previous model"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            <div
              className="w-[calc(100%-3px)] h-[calc(100%-3px)] flex items-center justify-center bg-[#FAFAFA]"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black/50 group-hover:text-black transition-colors">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          {/* Badge — fixed height so arrows don't shift */}
          <div className="text-center flex flex-col items-center justify-center h-[60px] md:h-[80px] lg:h-[100px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${current.slug}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex flex-col items-center"
              >
                {current.logoImage ? (
                  <img
                    src={current.logoImage}
                    alt={`${current.name} Logo`}
                    className="h-[60px] md:h-[80px] lg:h-[100px] object-contain"
                    loading="lazy"
                  />
                ) : (
                  <>
                    {current.label && (
                      <span className="text-black/20 text-[10px] md:text-xs tracking-[0.5em] uppercase font-light">
                        {current.label}
                      </span>
                    )}
                    <span
                      className="text-[70px] md:text-[90px] lg:text-[110px] font-black leading-[0.8] italic select-none"
                      style={{ color: current.letterColor, fontFamily: "var(--font-heading)" }}
                    >
                      {current.letterLogo}
                    </span>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow — Hexagonal outline */}
          <button
            onClick={goNext}
            className="group flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/25 hover:bg-black/50 transition-all duration-300"
            aria-label="Next model"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            <div
              className="w-[calc(100%-3px)] h-[calc(100%-3px)] flex items-center justify-center bg-[#FAFAFA]"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black/50 group-hover:text-black transition-colors">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Tagline */}
        <div className="flex justify-center min-h-[36px] mb-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={`tagline-${current.slug}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-center text-[#77633C] text-xl md:text-2xl lg:text-3xl font-medium italic"
            >
              {current.tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Car Carousel with Adjacent Peeks */}
        <div className="relative h-[180px] sm:h-[250px] md:h-[320px] lg:h-[380px] w-full mb-2 overflow-hidden">
          <div className="relative w-full h-full max-w-[1200px] mx-auto flex items-center justify-center">
            {models.map((model, index) => {
              let offset = (index - active) % count;
              if (offset < -count / 2) offset += count;
              if (offset > count / 2) offset -= count;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isHidden = Math.abs(offset) > 1;

              let x = "0%";
              let scale = 1;
              let opacity = 1;
              let zIndex = 20;

              if (isLeft) {
                x = "-80%";
                scale = 0.55;
                opacity = 0.25;
                zIndex = 10;
              } else if (isRight) {
                x = "80%";
                scale = 0.55;
                opacity = 0.25;
                zIndex = 10;
              } else if (isHidden) {
                x = offset < 0 ? "-120%" : "120%";
                scale = 0.4;
                opacity = 0;
                zIndex = 0;
              }

              return (
                <motion.div
                  key={model.slug}
                  animate={{ x, scale, opacity, zIndex }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute w-[65%] md:w-[55%] max-w-[700px] flex items-center justify-center cursor-pointer"
                  onClick={() => !isCenter && setActive(index)}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-auto object-contain [clip-path:polygon(0_0,100%_0,100%_80%,0_80%)] translate-y-[10%]"
                    loading="lazy"
                  />
                  {model.comingSoon && isCenter && (
                    <div className="absolute top-0 right-0 md:top-2 md:right-2 bg-black text-white text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1.5">
                      {t('models.comingSoon')}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Description + Explore link */}
        <div className="flex justify-center min-h-[60px] px-8 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${current.slug}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-xl mx-auto"
            >
              <Link
                href={`/models/${current.slug}`}
                className="inline-flex items-center gap-2 text-black text-sm font-semibold tracking-[0.1em] uppercase hover:opacity-60 transition-opacity group"
              >
                {t('models.explore').toUpperCase()} {current.name.toUpperCase()}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-4">
          {models.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-8 h-2 bg-black"
                  : "w-2 h-2 bg-black/15 hover:bg-black/30"
              }`}
              aria-label={`Go to model ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
