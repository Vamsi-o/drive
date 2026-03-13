'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const heroImg = "/assets/hero-headlight.jpg";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO */}
        <section className="relative h-screen flex flex-col justify-end pb-32 px-8 md:px-16 overflow-hidden">
          <img src={heroImg} alt="Certifications" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <motion.div {...fade} className="relative z-10"><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">{t('company.certifications.heroLabel')}</p><h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">{t('company.certifications.heroTitle')}</h1><p className="text-xl text-white/60 mt-4">{t('company.certifications.heroSubtitle')}</p></motion.div>
        </section>

        {/* OVERVIEW */}
        <section className="py-40 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade} className="space-y-8 text-xl md:text-2xl font-light leading-relaxed"><p>{t('company.certifications.overviewP1')}</p><p className="text-muted-foreground">{t('company.certifications.overviewP2')}</p></motion.div></div></section>

        {/* CE CERTIFICATION */}
        <section className="py-32 px-8 bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.certifications.ceTitle')}</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">{t('company.certifications.ceP1')}</p><p className="text-lg text-muted-foreground mt-6">{t('company.certifications.ceP2')}</p><div className="mt-12 inline-block px-6 py-3 border border-tiffany text-tiffany text-sm tracking-widest uppercase">{t('company.certifications.ceBadge')}</div></motion.div></div></section>

        {/* CERTIFICATE OF ORIGIN */}
        <section className="py-32 px-8 bg-tiffany text-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-black/50 uppercase mb-8 font-bold">{t('company.certifications.originTitle')}</h3><p className="text-xl md:text-2xl font-light leading-relaxed">{t('company.certifications.originP1')}</p><p className="text-lg mt-6">{t('company.certifications.originP2')}</p></motion.div></div></section>

        {/* REGIONAL DEPLOYMENT */}
        <section className="py-32 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.certifications.regionalTitle')}</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">{t('company.certifications.regionalP1')}</p><p className="text-lg text-muted-foreground mt-6">{t('company.certifications.regionalP2')}</p></motion.div></div></section>

        {/* CLOSING */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><p className="text-2xl md:text-4xl font-light italic leading-snug">{t('company.certifications.closingStatement')}</p></motion.div></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default Certifications;
