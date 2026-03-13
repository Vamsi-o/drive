'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const heroImg = "/assets/hero-headlight.jpg";
const dealerBg = "/assets/dealer-bg.jpg";
const revueltoImg = "/assets/revuelto.jpg";

const CompanyOverview = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">

        {/* BLOCK 1 — HERO */}
        <section className="relative h-screen flex flex-col justify-end overflow-hidden pb-32 px-8 md:px-16">
          <img
            src={heroImg}
            alt="EDrive Marine Mobility"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl mb-4">
              {t('company.overview.heroTitle')}
            </h1>
            <h2 className="text-xl md:text-2xl font-light tracking-wide text-white/80">
              {t('company.overview.heroSubtitle')}
            </h2>
          </motion.div>
        </section>

        {/* BLOCK 2 — INTRO STATEMENT */}
        <section className="py-40 px-8 text-center bg-black max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-xl md:text-3xl font-light leading-snug"
          >
            <p>
              {t('company.overview.introP1')}
            </p>
            <p className="text-muted-foreground text-lg md:text-2xl">
              {t('company.overview.introP2')}
            </p>
          </motion.div>
        </section>

        {/* BLOCK 3 — WHAT WE DO */}
        <section className="min-h-screen flex flex-col md:flex-row bg-black">
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 relative order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.overview.whatWeDo')}</h3>
              <div className="space-y-8 text-lg font-light leading-relaxed text-white/80">
                <p>{t('company.overview.whatWeDoP1')}</p>
                <p>{t('company.overview.whatWeDoP2')}</p>
                <p>{t('company.overview.whatWeDoP3')}</p>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto order-1 md:order-2">
            <img src={revueltoImg} alt="Detail" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
          </div>
        </section>

        {/* BLOCK 4 — HOW WE OPERATE */}
        <section className="min-h-screen flex flex-col md:flex-row bg-tiffany text-black">
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h3 className="text-sm tracking-[0.2em] text-black/60 uppercase mb-8 font-bold">{t('company.overview.howWeOperate')}</h3>
              <div className="space-y-8 text-lg font-light leading-relaxed">
                <p>{t('company.overview.howWeOperateP1')}</p>
                <p>{t('company.overview.howWeOperateP2')}</p>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
            <img src={dealerBg} alt="Factory detail" className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105" />
          </div>
        </section>

        {/* BLOCK 5 — WHERE WE OPERATE & BLOCK 6 */}
        <section className="py-40 px-8 text-center bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.overview.whereWeOperate')}</h3>
            <p className="text-xl md:text-3xl font-light leading-snug mb-8">
              {t('company.overview.whereWeOperateP1')}
            </p>
            <p className="text-lg text-muted-foreground font-light mb-32">
              {t('company.overview.whereWeOperateP2')}
            </p>

            {/* BLOCK 6 — POSITIONING */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic">
              {t('company.overview.positioningStatement')}
            </h2>
          </motion.div>
        </section>

        {/* BLOCK 7 — WHY EMOTION DRIVE */}
        <section className="py-32 px-8 bg-tiffany text-black">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-16 tracking-tight">{t('company.overview.whyEdrive')}</h3>
            <ul className="space-y-6 text-xl md:text-2xl font-light">
              {[
                t('company.overview.why1'),
                t('company.overview.why2'),
                t('company.overview.why3'),
                t('company.overview.why4'),
                t('company.overview.why5')
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6 border-b border-black/10 pb-6"
                >
                  <span className="text-black/30 font-bold tracking-widest text-sm mt-1">0{i+1}</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <FooterSection />
    </>
  );
};

export default CompanyOverview;
