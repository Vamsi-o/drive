'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n";

const menuLinks = [
  { key: "models", href: "/#configurator" },
  { key: "investors", href: "/investors" },
  { key: "dealerships", href: "/become-distributor" },
  { key: "gallery", href: "/gallery" },
  { key: "team", href: "/team" },
  { key: "company", href: "/company" },
  { key: "news", href: "/#news" },
];

const secondaryLinks = [
  { key: "design", href: "/company/profile" },
  { key: "history", href: "/company/history" },
];

const NavBar = ({ transparentOnHero = false }: { transparentOnHero?: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const textScaleRef = useRef(100);
  const [textScale, setTextScale] = useState(100);

  // Restore text scale from localStorage on mount (DOM-only, no state update during effect)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('edrive-text-scale');
      if (saved) {
        const scale = parseInt(saved, 10);
        if (scale >= 80 && scale <= 150) {
          textScaleRef.current = scale;
          document.documentElement.style.fontSize = `${scale}%`;
          // Defer state update to avoid cascading render warning
          queueMicrotask(() => setTextScale(scale));
        }
      }
    } catch {}
  }, []);

  const changeTextScale = (delta: number) => {
    const next = Math.min(150, Math.max(80, textScaleRef.current + delta));
    textScaleRef.current = next;
    setTextScale(next);
    document.documentElement.style.fontSize = `${next}%`;
    try { localStorage.setItem('edrive-text-scale', String(next)); } catch {}
  };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!transparentOnHero) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparentOnHero]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    // Persist language choice
    try { localStorage.setItem('i18nextLng', code); } catch {}
    // Set document direction for RTL languages
    requestAnimationFrame(() => {
      document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300 pointer-events-none ${transparentOnHero && !scrolled ? 'bg-transparent' : 'bg-black/60 backdrop-blur-md'}`}>
        {/* Left: Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-3 text-foreground pointer-events-auto"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-xs tracking-[0.25em] uppercase font-body hidden md:inline">
            {menuOpen ? t('nav.close') : t('nav.menu')}
          </span>
        </button>

        {/* Center: Logo */}
        {/* <Link href="/" className="absolute left-1/2 -translate-x-1/2 pointer-events-auto flex items-center gap-0 transition-transform duration-500 hover:scale-105">
          <span className="text-white font-light text-xl md:text-2xl tracking-tight" style={{ fontFamily: 'var(--font-body)' }}>e</span>
          <span className="text-white font-bold text-xl md:text-2xl tracking-wide uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Drive</span>
          <span className="w-1.5 h-1.5 rounded-full bg-tiffany ml-0.5 mb-auto mt-1.5" />
        </Link> */}
  <Link href="/" className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <img 
            src="/emotion-drive-logo.png" 
            alt="EDrive" 
            className="h-7 md:h-8 lg:h-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform duration-500 hover:scale-105" 
          />
        </Link>
        {/* Right: Icons */}
        <div className="flex items-center gap-5 pointer-events-auto">
          <a href="https://wa.me/971553949955" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-60 transition-opacity">
            <MessageCircle size={18} />
          </a>
          <button className="text-foreground hover:opacity-60 transition-opacity">
            <Search size={18} />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] overflow-y-auto flex flex-col"
          >
            {/* Main content */}
            <div className="flex-1 flex flex-col px-6 md:px-10 justify-center pt-[120px] pb-12 gap-10">
              
              <div className="w-full max-w-[1500px] mx-auto flex flex-col mt-auto gap-8">
                {/* Main Menu Links — 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0 w-full">
                  {menuLinks.map((link, i) => (
                    <motion.div 
                      key={link.key} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between py-6 border-b border-white/[0.15] group hover:border-white/50 transition-colors duration-300"
                      >
                        <span className="text-white text-sm lg:text-base font-black tracking-[0.15em] uppercase transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                          {t(`nav.${link.key}`)}
                        </span>
                        <svg width="8" height="12" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all">
                          <path d="M1 1l6 6-6 6" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Tiffany Divider */}
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-[2px] bg-tiffany my-2 origin-left" 
                />

                {/* Secondary Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0 w-full">
                  {secondaryLinks.map((link, i) => (
                    <motion.div 
                      key={link.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between py-5 border-b border-white/[0.1] group hover:border-white/40 transition-colors duration-300"
                      >
                        <span className="text-white/80 text-xs lg:text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                          {t(`nav.${link.key}`)}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Area — Languages inline + Text Size */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto pt-16 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-[1500px] mx-auto w-full"
              >
                {/* Language Selector — Collapsible */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setLanguagesOpen(!languagesOpen)}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">
                      {t('nav.languages')}
                    </span>
                    <svg
                      width="8"
                      height="5"
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-300 ${languagesOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 1L5 5L9 1" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {languagesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-center flex-wrap gap-x-1 gap-y-2 pt-1">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => changeLanguage(lang.code)}
                              className={`px-3 py-1.5 text-xs tracking-wide transition-all duration-200 ${
                                i18n.language === lang.code
                                  ? 'bg-tiffany text-black font-bold rounded-sm'
                                  : 'text-white/60 hover:text-white'
                              }`}
                            >
                              {lang.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Text Size controls */}
                <div className="flex items-center gap-5 text-white">
                  <button
                    onClick={() => changeTextScale(-10)}
                    disabled={textScale <= 80}
                    className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-none hover:border-white transition-colors hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Decrease text size"
                  >
                    <svg width="12" height="2" viewBox="0 0 12 2" fill="currentColor"><path d="M0 0H12V2H0V0Z"/></svg>
                  </button>
                  <button
                    onClick={() => changeTextScale(10)}
                    disabled={textScale >= 150}
                    className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-none hover:border-white transition-colors hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Increase text size"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M5 0H7V12H5V0ZM0 5H12V7H0V5Z"/></svg>
                  </button>
                  <span className="text-[10px] font-bold tracking-[0.2em] ml-2 uppercase text-white/80">{t('nav.textSize')} ({textScale}%)</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
