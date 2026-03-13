'use client';

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const heroImg = "/assets/hero-headlight.jpg";
const dealerBg = "/assets/dealer-bg.jpg";

const BecomeDistributor = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO SECTION */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
          <img
            src={heroImg}
            alt="JetCar on ocean"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-4xl px-8 mt-20"
          >
            <h1 className="text-4xl md:text-6xl text-heading-xl mb-6">
              {t('distributor.heroTitle')}
            </h1>
            <h2 className="text-xl md:text-3xl font-body font-light mb-8 max-w-2xl mx-auto">
              {t('distributor.heroSubtitle')}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] mb-12">
              {t('distributor.heroTagline')}
            </p>
            <button
              onClick={() => document.getElementById('dist-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-filled-white text-sm"
            >
              {t('distributor.requestAccess')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <div className="w-[1px] h-12 bg-white/30" />
          </motion.div>
        </section>

        {/* SECTION 2 - Controlled Network */}
        <section className="py-32 px-8 md:px-16 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-4xl text-heading-xl mb-12">
              {t('distributor.selectiveModel')}
            </h3>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed max-w-3xl mx-auto">
              <p>{t('distributor.selectiveModelP1')}</p>
              <p>{t('distributor.selectiveModelP2')}</p>
              <p className="text-foreground pt-6">{t('distributor.notOpenEnrollment')}</p>
              <p className="text-tiffany font-medium">{t('distributor.strategicExpansion')}</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3 - Who Qualifies */}
        <section className="py-32 px-8 md:px-16 bg-neutral-950">
          <div className="max-w-7xl mx-auto">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-heading-xl mb-20 text-center"
            >
              {t('distributor.whoWePartnerWith')}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: t('distributor.partner1Title'), desc: t('distributor.partner1Desc') },
                { title: t('distributor.partner2Title'), desc: t('distributor.partner2Desc') },
                { title: t('distributor.partner3Title'), desc: t('distributor.partner3Desc') },
                { title: t('distributor.partner4Title'), desc: t('distributor.partner4Desc') }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 border border-white/5 bg-black/50 hover:border-tiffany/50 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-4 font-body">{item.title}</h4>
                  <p className="text-muted-foreground font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 - The Advantage */}
        <section className="min-h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen">
            <img
              src={dealerBg}
              alt="Manufacturing Facility"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
          <div className="w-full md:w-1/2 flex items-center bg-black px-8 py-24 md:px-16 xl:px-24">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl text-heading-xl mb-12">
                {t('distributor.whyRepresent')}
              </h3>
              <ul className="space-y-6 text-lg font-light text-muted-foreground mb-16">
                {[
                  t('distributor.advantage1'),
                  t('distributor.advantage2'),
                  t('distributor.advantage3'),
                  t('distributor.advantage4'),
                  t('distributor.advantage5')
                ].map((bullet, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-tiffany rounded-full flex-shrink-0" />
                    <span className="text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 border-l-2 border-tiffany bg-white/5">
                <p className="text-xl md:text-2xl font-light italic">
                  {t('distributor.categoryQuote')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - Application Form */}
        <section id="dist-form" className="py-32 px-8 bg-neutral-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-4xl text-heading-xl mb-4 text-center">
                {t('distributor.requestAccess')}
              </h3>
              <p className="text-muted-foreground font-light mb-16 text-lg text-center">
                {t('distributor.formSubtitle')}
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    key="success"
                    className="bg-tiffany/10 border border-tiffany p-12 text-center"
                  >
                    <h3 className="text-2xl font-bold text-tiffany mb-4">{t('distributor.successTitle')}</h3>
                    <p className="text-foreground mb-2">{t('distributor.successMessage')}</p>
                    <p className="text-muted-foreground text-sm">{t('distributor.successFollowUp')}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-12"
                  >
                    {/* Contact Person */}
                    <div className="space-y-6">
                      <h4 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">{t('form.contactPerson')}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder={t('form.firstName')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="text" placeholder={t('form.lastName')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="email" placeholder={t('form.email')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="tel" placeholder={t('form.phone')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="text" placeholder={t('form.position')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors md:col-span-2" />
                      </div>
                    </div>

                    {/* Company Details */}
                    <div className="space-y-6">
                      <h4 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">{t('form.companyDetails')}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder={t('form.companyName')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors md:col-span-2" />
                        <input type="text" placeholder={t('form.country')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="text" placeholder={t('form.city')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="url" placeholder={t('form.companyWebsite')} className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors md:col-span-2" />
                      </div>
                    </div>

                    {/* Business Profile */}
                    <div className="space-y-6">
                      <h4 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">{t('distributor.businessProfile')}</h4>

                      <div className="space-y-4">
                        <label className="text-sm block">{t('distributor.industrySector')}</label>
                        <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                          <option value="" disabled>{t('distributor.selectIndustry')}</option>
                          <option>{t('distributor.industryMarine')}</option>
                          <option>{t('distributor.industryAuto')}</option>
                          <option>{t('distributor.industryTourism')}</option>
                          <option>{t('distributor.industryLeisure')}</option>
                          <option>{t('distributor.industryRealEstate')}</option>
                          <option>{t('distributor.industryRetail')}</option>
                          <option>{t('form.other')}</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm block">{t('distributor.showroomAccess')}</label>
                        <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                          <option value="" disabled>{t('form.selectOption')}</option>
                          <option>{t('distributor.yesShowroom')}</option>
                          <option>{t('distributor.yesMarina')}</option>
                          <option>{t('distributor.yesBoth')}</option>
                          <option>{t('distributor.noPlanning')}</option>
                          <option>{t('form.no')}</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm block">{t('distributor.territoryInterest')}</label>
                        <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                          <option value="" disabled>{t('distributor.selectRegion')}</option>
                          <option>{t('distributor.regionMiddleEast')}</option>
                          <option>{t('distributor.regionEurope')}</option>
                          <option>{t('distributor.regionNorthAmerica')}</option>
                          <option>{t('distributor.regionAsia')}</option>
                          <option>{t('distributor.regionAfrica')}</option>
                          <option>{t('distributor.regionCaribbean')}</option>
                          <option>{t('distributor.regionSouthAmerica')}</option>
                          <option>{t('form.other')}</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm block">{t('distributor.yearsOfOperation')}</label>
                        <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                          <option value="" disabled>{t('distributor.selectExperience')}</option>
                          <option>{t('distributor.expLess2')}</option>
                          <option>{t('distributor.exp2to5')}</option>
                          <option>{t('distributor.exp5to10')}</option>
                          <option>{t('distributor.exp10plus')}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-6">
                      <h4 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">{t('form.additionalInfo')}</h4>
                      <textarea
                        placeholder={t('distributor.messagePlaceholder')}
                        rows={4}
                        required
                        className="w-full bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Consent */}
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        className="sr-only"
                        onChange={(e) => setConsent(e.target.checked)}
                      />
                      <div className={`w-5 h-5 flex-shrink-0 border flex items-center justify-center transition-colors mt-0.5 ${consent ? 'bg-tiffany border-tiffany' : 'border-white/30 group-hover:border-white/60'}`}>
                        {consent && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <span className="text-sm text-muted-foreground select-none">
                        {t('distributor.consentText')}
                      </span>
                    </label>

                    <button type="submit" className="w-full btn-filled-white py-4 text-sm">
                      {t('distributor.submitProfile')}
                    </button>

                    <p className="text-xs text-muted-foreground tracking-[0.1em] uppercase text-center">
                      {t('distributor.reviewNote')}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* FINAL POWER STATEMENT */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">
              {t('distributor.closingStatement')}
            </h2>
          </motion.div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default BecomeDistributor;
