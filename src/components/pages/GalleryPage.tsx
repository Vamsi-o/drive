'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import SmoothScroll from "@/components/SmoothScroll";

const modelRShowroom = "/assets/config/modelR.webp";
const modelFShowroom = "/assets/config/modelF.webp";
const modelRImg = "/assets/slide-model-r.png";
const modelFImg = "/assets/slide-model-f.png";
const heroImg = "/assets/hero-headlight.jpg";
const news1 = "/assets/news-1.jpg";
const news2 = "/assets/news-2.jpg";
const news3 = "/assets/news-3.jpg";
const dealerBg = "/assets/dealer-bg.jpg";
const carReveal = "/assets/car-reveal.jpg";
const carInterior = "/assets/car-interior.jpg";
const heroBg = "/assets/hero-bg-new.jpg";
const heroC1 = "/assets/hero-c1.jpg";
const configBg = "/assets/configurator-bg.jpg";

const galleryItems = [
  { id: 1, src: modelRShowroom, title: "Model R — Showroom Edition", category: "Models" },
  { id: 2, src: modelFShowroom, title: "Model F — Showroom Edition", category: "Models" },
  { id: 3, src: modelRImg, title: "Model R — Side Profile", category: "Models" },
  { id: 4, src: modelFImg, title: "Model F — Racing Edition", category: "Models" },
  { id: 5, src: heroImg, title: "Precision Engineering", category: "Design" },
  { id: 6, src: news1, title: "Sea Expo 2026 Bahrain", category: "Events" },
  { id: 7, src: news2, title: "International Boat Show Abu Dhabi", category: "Events" },
  { id: 8, src: news3, title: "Cockpit & Interior Detail", category: "Design" },
  { id: 9, src: dealerBg, title: "Mountain Performance Test", category: "Testing" },
  { id: 10, src: carReveal, title: "Model Reveal Event", category: "Events" },
  { id: 11, src: carInterior, title: "Interior Craftsmanship", category: "Design" },
  { id: 12, src: heroBg, title: "eDrive Factory Floor", category: "Manufacturing" },
  { id: 13, src: heroC1, title: "Heritage Collection", category: "Design" },
  { id: 14, src: configBg, title: "Configurator Studio", category: "Design" },
];

const categories = ["All", ...Array.from(new Set(galleryItems.map((i) => i.category)))];

const GalleryPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);
  const lightboxItem = galleryItems.find((i) => i.id === lightbox);

  const goPrev = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((i) => i.id === lightbox);
    const prev = idx > 0 ? filtered[idx - 1] : filtered[filtered.length - 1];
    setLightbox(prev.id);
  };

  const goNext = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((i) => i.id === lightbox);
    const next = idx < filtered.length - 1 ? filtered[idx + 1] : filtered[0];
    setLightbox(next.id);
  };

  return (
    <>
      <SmoothScroll />
      <NavBar />
      <main className="pt-24 pb-20 min-h-screen">
        {/* Hero */}
        <div className="px-8 md:px-16 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] tracking-[0.3em] uppercase text-tiffany mb-3 font-bold"
          >
            {t('gallery.subtitle')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl text-foreground font-bold tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t('gallery.title')}
          </motion.h1>
        </div>

        {/* Filter bar */}
        <div className="px-8 md:px-16 mb-12 flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-[11px] tracking-[0.15em] uppercase font-medium border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-tiffany text-black border-tiffany"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="px-8 md:px-16">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-tiffany font-bold mb-1">
                      {item.category}
                    </p>
                    <p className="text-sm text-white font-medium">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl z-10 transition-colors"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl z-10 transition-colors"
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={lightboxItem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={lightboxItem.src}
              alt={lightboxItem.title}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl z-10 transition-colors"
            >
              ›
            </button>

            {/* Caption */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[9px] tracking-[0.2em] uppercase text-tiffany font-bold mb-1">
                {lightboxItem.category}
              </p>
              <p className="text-sm text-white/80 font-medium">{lightboxItem.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </>
  );
};

export default GalleryPage;
