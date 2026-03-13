'use client';

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

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
    // Simulate email submission to FMC.emotiondrive@gmail.com
    setSubmitted(true);
  };

  const sections = [
    {
      title: t('investors.howItWorks'),
      text: t('investors.howItWorksText')
    },
    {
      title: t('investors.partnerLocations'),
      text: t('investors.partnerLocationsText')
    },
    {
      title: t('investors.assetBased'),
      text: t('investors.assetBasedText')
    },
    {
      title: t('investors.revenueStructure'),
      text: t('investors.revenueStructureText')
    },
    {
      title: t('investors.roleOfEdrive'),
      text: t('investors.roleOfEdriveText')
    },
    {
      title: t('investors.longTermCooperation'),
      text: t('investors.longTermCooperationText')
    },
    {
      title: t('investors.transparency'),
      text: t('investors.transparencyText')
    }
  ];

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen">
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 px-8 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl text-heading-xl mb-6"
          >
            {t('investors.title')}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-3xl font-body font-light mb-8"
          >
            {t('investors.subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto"
          >
            {t('investors.heroDescription')}
          </motion.p>
        </section>

        {/* DETAILS GRID */}
        <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-white/10 pt-6"
              >
                <h3 className="text-xl font-bold font-body mb-4">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-body mb-6">{t('investors.nextSteps')}</h3>
            <p className="text-muted-foreground mb-8">
              {t('investors.nextStepsText')}
            </p>
            <button
              onClick={() => document.getElementById('invest-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-filled-white px-12 py-4 text-sm"
            >
              {t('investors.becomeInvestor')}
            </button>
          </motion.div>
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
