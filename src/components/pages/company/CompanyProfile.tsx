'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const heroImg = "/assets/hero-headlight.jpg";
const dealerBg = "/assets/dealer-bg.jpg";
const revueltoImg = "/assets/revuelto.jpg";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CompanyProfile = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO */}
        <section className="relative h-screen flex flex-col justify-end pb-32 px-8 md:px-16 overflow-hidden">
          <img src={heroImg} alt="EDrive" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
          <motion.div {...fade} className="relative z-10"><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">{t('company.profile.heroLabel')}</p><h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">{t('company.profile.heroTitle')}</h1><p className="text-xl text-white/60 mt-4">{t('company.profile.heroCompany')}</p></motion.div>
        </section>

        {/* BLOCK 2 — LEGAL & CORPORATE */}
        <section className="py-40 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade} className="space-y-8 text-xl md:text-2xl font-light leading-relaxed"><p>{t('company.profile.legalP1')}</p><p className="text-muted-foreground">{t('company.profile.legalP2')}</p></motion.div></div></section>

        {/* BLOCK 3 — BUSINESS MODEL */}
        <section className="min-h-[80vh] flex flex-col md:flex-row bg-black">
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-24"><motion.div {...fade} className="max-w-xl"><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.profile.businessModel')}</h3><div className="space-y-6 text-lg font-light text-white/80 leading-relaxed"><p>{t('company.profile.businessModelP1')}</p><p>{t('company.profile.businessModelP2')}</p><p>{t('company.profile.businessModelP3')}</p></div></motion.div></div>
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto"><img src={revueltoImg} alt="Detail" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70" /></div>
        </section>

        {/* BLOCK 4 — MANUFACTURING FOOTPRINT */}
        <section className="min-h-[80vh] flex flex-col md:flex-row bg-tiffany text-black">
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-24"><motion.div {...fade} className="max-w-xl"><h3 className="text-sm tracking-[0.2em] text-black/50 uppercase mb-8 font-bold">{t('company.profile.manufacturingFootprint')}</h3><div className="space-y-6 text-lg font-light leading-relaxed"><p>{t('company.profile.manufacturingP1')}</p><p>{t('company.profile.manufacturingP2')}</p></div></motion.div></div>
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto"><img src={dealerBg} alt="Factory" className="absolute inset-0 w-full h-full object-cover opacity-90" /></div>
        </section>

        {/* BLOCK 5 — CLIENTS & APPLICATIONS */}
        <section className="py-32 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.profile.clientsApplications')}</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">{t('company.profile.clientsText')}</p></motion.div></div></section>

        {/* BLOCK 6 — GLOBAL OPERATIONS */}
        <section className="py-32 px-8 bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.profile.globalOperations')}</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">{t('company.profile.globalOperationsP1')}</p><p className="text-lg text-muted-foreground mt-6">{t('company.profile.globalOperationsP2')}</p></motion.div></div></section>

        {/* BLOCK 7 — PARTNERSHIPS & DISTRIBUTION */}
        <section className="py-32 px-8 bg-tiffany text-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-black/50 uppercase mb-8 font-bold">{t('company.profile.partnershipsDistribution')}</h3><p className="text-xl md:text-2xl font-light leading-relaxed">{t('company.profile.partnershipsP1')}</p><p className="text-lg mt-6">{t('company.profile.partnershipsP2')}</p></motion.div></div></section>

        {/* BLOCK 8 — GOVERNANCE */}
        <section className="py-32 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.profile.governanceCompliance')}</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">{t('company.profile.governanceP1')}</p><p className="text-lg text-muted-foreground mt-6">{t('company.profile.governanceP2')}</p></motion.div></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default CompanyProfile;
