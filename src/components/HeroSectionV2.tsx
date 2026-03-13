'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HeroSectionV2 = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-screen bg-[#0B0B0B] overflow-hidden" style={{ minHeight: '600px' }}>
      
      {/* Background Video */}
      <video
        key="hero-vid"
        src="/2FinalVerse_h264.mp4"
        autoPlay
        loop
        muted={true}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-[25%_center] md:object-[30%_center] lg:object-left"
      />

      {/* Rectangle 345 - Left side blur overlay for text readability */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: 'clamp(300px, 28vw, 539px)',
          height: '100%',
          left: '-70px',
          top: '0px',
          background: 'rgba(16, 16, 16, 0.48)',
          filter: 'blur(160.5px)',
          zIndex: 5
        }}
      />

      {/* Content wrapper — uses % of viewport for responsive positioning */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center pointer-events-none" style={{ paddingLeft: 'clamp(24px, 6.5vw, 125px)', paddingRight: '24px' }}>
        
        {/* Frame 10 - Text block positioned at ~36% from top */}
        <div className="flex flex-col max-w-[808px]" style={{ marginTop: '-5vh' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white uppercase"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 800, 
              fontSize: 'clamp(14px, 1.67vw, 32px)', 
              lineHeight: '1.38',
              marginBottom: 'clamp(10px, 1.1vw, 17px)'
            }}
          >
            {t('hero.topline')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col text-white"
          >
            <span style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 800, 
              fontSize: 'clamp(32px, 3.33vw, 64px)', 
              lineHeight: '1.36'
            }}>
              {t('hero.headline1')}
            </span>
            <span style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 200, 
              fontSize: 'clamp(32px, 3.33vw, 64px)', 
              lineHeight: '1.36'
            }}>
              {t('hero.headline2')}
            </span>
          </motion.div>
        </div>

        {/* Frame 9 - Discover More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="pointer-events-auto"
          style={{ marginTop: 'clamp(24px, 3vw, 45px)' }}
        >
          <Link
            href="/#models"
            className="inline-flex items-center justify-between bg-[#000000] rounded-[10px] group border border-white/10 hover:border-white/30 transition-colors"
            style={{
              width: 'clamp(240px, 16.1vw, 309px)',
              height: 'clamp(56px, 4.06vw, 78px)',
              paddingLeft: 'clamp(20px, 1.72vw, 33px)',
              paddingRight: 'clamp(20px, 1.72vw, 33px)',
            }}
          >
            <span
              className="text-white transition-transform group-hover:translate-x-1"
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontWeight: 300, 
                fontSize: 'clamp(16px, 1.25vw, 24px)', 
                lineHeight: '33px'
              }}
            >
              {t('hero.cta')}
            </span>
            <svg 
              width="33" 
              height="33" 
              viewBox="0 0 33 33" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-2"
              style={{ transform: 'scaleX(-1)' }}
            >
              <path d="M19.25 11L24.75 16.5M24.75 16.5L19.25 22M24.75 16.5H8.25" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionV2;
