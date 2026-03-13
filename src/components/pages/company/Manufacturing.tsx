'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const heroImg = "/assets/hero-headlight.jpg";
const dealerBg = "/assets/dealer-bg.jpg";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Manufacturing = () => {
  const { t } = useTranslation();

  const blocks = [
    { title: t('company.manufacturing.hullDesign'), text: t('company.manufacturing.hullDesignText'), bg: "black", split: true },
    { title: t('company.manufacturing.materials'), text: t('company.manufacturing.materialsText'), bg: "tiffany" },
    { title: t('company.manufacturing.production'), text: t('company.manufacturing.productionText'), bg: "black" },
    { title: t('company.manufacturing.qualityComponents'), text: t('company.manufacturing.qualityComponentsText'), bg: "black" },
    { title: t('company.manufacturing.qualityControl'), text: t('company.manufacturing.qualityControlText'), bg: "tiffany" },
    { title: t('company.manufacturing.customization'), text: t('company.manufacturing.customizationText'), bg: "black" },
  ];

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO */}
        <section className="relative h-screen flex flex-col justify-end pb-32 px-8 md:px-16 overflow-hidden">
          <img src={heroImg} alt="Manufacturing" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <motion.div {...fade} className="relative z-10"><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">{t('company.manufacturing.heroLabel')}</p><h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-heading-xl">{t('company.manufacturing.heroTitle')}</h1><p className="text-xl text-white/60 mt-4">{t('company.manufacturing.heroSubtitle')}</p></motion.div>
        </section>

        {/* ENGINEERING PHILOSOPHY */}
        <section className="py-40 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade} className="space-y-8 text-xl md:text-2xl font-light leading-relaxed"><p>{t('company.manufacturing.philosophyP1')}</p><p className="text-muted-foreground">{t('company.manufacturing.philosophyP2')}</p></motion.div></div></section>

        {/* Content Blocks */}
        {blocks.map((block, i) => (
          block.split ? (
            <section key={i} className="min-h-[70vh] flex flex-col md:flex-row bg-black">
              <div className="w-full md:w-1/2 flex items-center p-8 md:p-24"><motion.div {...fade} className="max-w-xl"><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{block.title}</h3><p className="text-lg font-light text-white/80 leading-relaxed">{block.text}</p></motion.div></div>
              <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto"><img src={dealerBg} alt={block.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" /></div>
            </section>
          ) : (
            <section key={i} className={`py-32 px-8 ${block.bg === 'tiffany' ? 'bg-tiffany text-black' : 'bg-black'} ${i > 0 && block.bg === 'black' ? 'border-t border-white/5' : ''}`}>
              <div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className={`text-sm tracking-[0.2em] uppercase mb-8 ${block.bg === 'tiffany' ? 'text-black/50 font-bold' : 'text-white/50'}`}>{block.title}</h3><p className={`text-xl md:text-2xl font-light leading-relaxed ${block.bg === 'tiffany' ? '' : 'text-white/80'}`}>{block.text}</p></motion.div></div>
            </section>
          )
        ))}

        {/* CLOSING */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.manufacturing.closingTitle')}</h3><p className="text-2xl md:text-4xl font-light leading-snug">{t('company.manufacturing.closingP1')}</p><p className="text-lg text-muted-foreground mt-8">{t('company.manufacturing.closingP2')}</p></motion.div></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default Manufacturing;
