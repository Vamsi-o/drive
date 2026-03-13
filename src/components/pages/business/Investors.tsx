'use client';

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const heroImg = "/assets/hero-headlight.jpg";
const dealerBg = "/assets/dealer-bg.jpg";
const revueltoImg = "/assets/config/modelR.jpg";
const carInterior = "/assets/car-interior.jpg";

const Investors = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    country: "", city: "",
    profile: "", experience: "", approach: "",
    contactTime: "", contactMethod: "", message: "", consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">

        {/* BLOCK 1 — HERO */}
        <section className="relative h-screen flex flex-col justify-end overflow-hidden pb-32 px-8 md:px-16">
          <img
            src={heroImg}
            alt="eDrive Investment Opportunity"
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
              {t('investors.title')}
            </h1>
            <h2 className="text-xl md:text-2xl font-light tracking-wide text-white/80">
              {t('investors.subtitle')}
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
            <p>{t('investors.heroDescription')}</p>
          </motion.div>
        </section>

        {/* BLOCK 3, 4, 5 — SPLIT SECTIONS */}
        <section className="py-10 md:py-16 px-4 md:px-10 lg:px-16 bg-black space-y-5 md:space-y-6">

          {/* HOW IT WORKS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/8 rounded-md overflow-hidden flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 flex items-center p-6 md:p-8 lg:p-10 order-2 md:order-1">
              <div className="max-w-md">
                <h3 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-4">{t('investors.howItWorks')}</h3>
                <p className="text-[14px] font-light leading-relaxed text-white/70 mb-5">{t('investors.howItWorksText')}</p>
                <h3 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-4 mt-6">{t('investors.partnerLocations')}</h3>
                <p className="text-[14px] font-light leading-relaxed text-white/70">{t('investors.partnerLocationsText')}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[220px] md:h-auto md:min-h-[320px] order-1 md:order-2">
              <img src={revueltoImg} alt="Investment Detail" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
            </div>
          </motion.div>

          {/* ASSET & REVENUE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="border border-tiffany/20 rounded-md overflow-hidden flex flex-col md:flex-row bg-tiffany text-black"
          >
            <div className="w-full md:w-1/2 flex items-center p-6 md:p-8 lg:p-10">
              <div className="max-w-md">
                <h3 className="text-[11px] tracking-[0.2em] text-black/50 uppercase mb-4 font-bold">{t('investors.assetBased')}</h3>
                <p className="text-[14px] font-light leading-relaxed mb-6">{t('investors.assetBasedText')}</p>
                <h3 className="text-[11px] tracking-[0.2em] text-black/50 uppercase mb-4 font-bold">{t('investors.revenueStructure')}</h3>
                <p className="text-[14px] font-light leading-relaxed">{t('investors.revenueStructureText')}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[220px] md:h-auto md:min-h-[320px] overflow-hidden">
              <img src={dealerBg} alt="eDrive Manufacturing" className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105" />
            </div>
          </motion.div>

          {/* ROLE & COOPERATION */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/8 rounded-md overflow-hidden flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 relative h-[220px] md:h-auto md:min-h-[320px]">
              <img src={carInterior} alt="eDrive Interior" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            </div>
            <div className="w-full md:w-1/2 flex items-center p-6 md:p-8 lg:p-10">
              <div className="max-w-md">
                <h3 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-4">{t('investors.roleOfEdrive')}</h3>
                <p className="text-[14px] font-light leading-relaxed text-white/70 mb-6">{t('investors.roleOfEdriveText')}</p>
                <h3 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-4">{t('investors.longTermCooperation')}</h3>
                <p className="text-[14px] font-light leading-relaxed text-white/70">{t('investors.longTermCooperationText')}</p>
              </div>
            </div>
          </motion.div>

        </section>

        {/* BLOCK 6 — WHY INVEST (numbered list) */}
        <section className="py-32 px-8 bg-tiffany text-black">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-16 tracking-tight">{t('investors.transparency')}</h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl font-light leading-relaxed mb-16"
            >
              {t('investors.transparencyText')}
            </motion.p>

            <h3 className="text-3xl font-bold mb-12 tracking-tight">{t('investors.nextSteps')}</h3>
            <p className="text-lg font-light leading-relaxed mb-12">{t('investors.nextStepsText')}</p>
            <button
              onClick={() => document.getElementById('invest-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-12 py-4 text-sm font-bold tracking-widest uppercase hover:bg-black/80 transition-colors"
            >
              {t('investors.becomeInvestor')}
            </button>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section id="invest-form" className="py-32 px-8 bg-neutral-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-heading-xl mb-4 text-center">{t('investors.becomeInvestor')}</h2>
            <p className="text-muted-foreground text-center mb-16">
              {t('investors.formSubtitle')}
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key="success"
                  className="bg-tiffany/10 border border-tiffany p-12 text-center rounded-sm"
                >
                  <h3 className="text-2xl font-bold text-tiffany mb-4">{t('investors.successTitle')}</h3>
                  <p className="text-foreground">{t('investors.successMessage')}</p>
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
                  {/* Contact Details */}
                  <div className="space-y-6">
                    <h3 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">{t('form.contactDetails')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder={t('form.firstName')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                      <input type="text" placeholder={t('form.lastName')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                      <input type="email" placeholder={t('form.email')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                      <input type="tel" placeholder={t('form.phone')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-6">
                    <h3 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">{t('form.location')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder={t('form.country')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                      <input type="text" placeholder={t('form.city')} required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="space-y-6">
                    <h3 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">{t('investors.investorProfile')}</h3>

                    <div className="space-y-4">
                      <label className="text-sm block">{t('investors.whatDescribesYou')}</label>
                      <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled>{t('form.selectOption')}</option>
                        <option>{t('investors.privateInvestor')}</option>
                        <option>{t('investors.businessOwner')}</option>
                        <option>{t('investors.entrepreneur')}</option>
                        <option>{t('investors.familyOffice')}</option>
                        <option>{t('investors.investmentFund')}</option>
                        <option>{t('form.other')}</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm block">{t('investors.priorExperience')}</label>
                      <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled>{t('form.selectOption')}</option>
                        <option>{t('form.yes')}</option>
                        <option>{t('form.no')}</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm block">{t('investors.preferredApproach')}</label>
                      <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled>{t('form.selectOption')}</option>
                        <option>{t('investors.assetBasedInvestment')}</option>
                        <option>{t('investors.revenueParticipation')}</option>
                        <option>{t('investors.longTermPartnership')}</option>
                        <option>{t('investors.exploringOptions')}</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm block">{t('investors.bestTimeContact')}</label>
                      <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled>{t('form.selectOption')}</option>
                        <option>{t('investors.morning')}</option>
                        <option>{t('investors.afternoon')}</option>
                        <option>{t('investors.evening')}</option>
                        <option>{t('investors.flexible')}</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm block">{t('investors.preferredContactMethod')}</label>
                      <select required defaultValue="" className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled>{t('form.selectOption')}</option>
                        <option>{t('investors.phoneCall')}</option>
                        <option>{t('investors.whatsApp')}</option>
                        <option>{t('form.emailOption')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-6">
                    <h3 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">{t('form.message')}</h3>
                    <textarea
                      placeholder={t('investors.messagePlaceholder')}
                      rows={4}
                      className="w-full bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" required className="mt-1 sr-only" onChange={(e) => setFormState({...formState, consent: e.target.checked})} />
                    <div className={`w-5 h-5 flex-shrink-0 border flex items-center justify-center transition-colors ${formState.consent ? 'bg-tiffany border-tiffany' : 'border-white/30 group-hover:border-white/60'}`}>
                      {formState.consent && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-sm text-muted-foreground select-none">
                      {t('investors.consentText')}
                    </span>
                  </label>

                  <button type="submit" className="w-full btn-filled-white py-4">
                    {t('form.submit')}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default Investors;
