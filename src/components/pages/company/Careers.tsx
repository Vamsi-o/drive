'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const heroImg = "/assets/hero-headlight.jpg";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const lifeAtEdrive = [
  { title: "Building Real Products", text: "At eDrive, you work on real machines, real projects, and real challenges. From early concepts to final production, our teams are involved in every stage of development. This is a hands-on environment where ideas turn into real water vehicles." },
  { title: "A Growing International Team", text: "With a team of more than 50 people and growing, eDrive brings together professionals from different backgrounds and cultures. We value collaboration, open communication, and shared responsibility across departments." },
  { title: "Innovation Meets Craftsmanship", text: "Our work combines innovation with precision manufacturing. Whether in engineering, production, or operations, attention to detail and quality are at the core of everything we do. Progress at eDrive comes from combining creativity with discipline." },
  { title: "Room to Grow", text: "As a fast-growing company, eDrive offers opportunities to grow together with the business. Team members are encouraged to develop new skills, take ownership and responsibility, contribute ideas, and grow into leadership roles." },
];

const job = {
  title: "Sales Manager", company: "eDrive", location: "Dubai, United Arab Emirates",
  department: "Sales & Partnerships", level: "Mid to Senior Level", model: "On-site",
  contract: "Full-time", remote: "Not available", id: "EDR-SALES-DXB-001",
  about: "As a Sales Manager at eDrive, you will play a key role in driving the commercial growth of our premium water vehicles. You will be responsible for developing partnerships, managing client relationships, and supporting sales across regional and international markets.",
  responsibilities: ["Develop and manage sales opportunities for eDrive products", "Build and maintain long-term relationships with clients and partners", "Represent eDrive at meetings, exhibitions, and industry events", "Coordinate closely with internal teams including production and operations", "Prepare commercial proposals and support contract negotiations", "Identify new market opportunities and business channels"],
  requirements: ["Proven experience in sales or business development", "Strong communication and negotiation skills", "Professional English is required (additional languages are a plus)", "Ability to work independently and take ownership", "Interest in premium products, mobility, or marine-related industries", "Willingness to travel when required"],
  offers: ["Opportunity to work with a fast-growing international company", "Direct involvement in innovative and premium water mobility products", "Exposure to global partners and international projects", "Competitive compensation based on experience", "Long-term professional growth and development opportunities"],
};

const Careers = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO */}
        <section className="relative h-screen flex flex-col justify-end pb-32 px-8 md:px-16 overflow-hidden">
          <img src={heroImg} alt="Careers" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <motion.div {...fade} className="relative z-10"><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">{t('company.careers.heroLabel')}</p><h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">{t('company.careers.heroTitle')}</h1><p className="text-xl text-white/60 mt-4">{t('company.careers.heroSubtitle')}</p></motion.div>
        </section>

        {/* INTRO */}
        <section className="py-32 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade} className="space-y-6 text-xl md:text-2xl font-light leading-relaxed"><p>{t('company.careers.introP1')}</p><p className="text-muted-foreground">{t('company.careers.introP2')}</p></motion.div></div></section>

        {/* LIFE AT EDRIVE */}
        {lifeAtEdrive.map((item, i) => (
          <section key={i} className={`py-24 px-8 ${i % 2 === 0 ? 'bg-neutral-950' : 'bg-black'}`}>
            <div className="max-w-4xl mx-auto"><motion.div {...fade}>
              <h3 className="text-sm tracking-[0.2em] text-tiffany uppercase mb-6 font-bold">{String(i + 1).padStart(2, '0')}</h3>
              <h4 className="text-2xl font-bold mb-6">{item.title}</h4>
              <p className="text-lg font-light text-white/80 leading-relaxed">{item.text}</p>
            </motion.div></div>
          </section>
        ))}

        {/* OPEN POSITIONS */}
        <section id="open-positions" className="py-32 px-8 bg-tiffany text-black">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">{t('company.careers.openPositions')}</h2>
              <div className="bg-black text-white p-8 md:p-12 space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-8">
                  <div><h3 className="text-2xl font-bold">{job.title}</h3><p className="text-white/50 mt-1">{job.location} · {job.department}</p></div>
                  <span className="text-tiffany text-sm font-bold tracking-widest uppercase">{job.contract}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  {[[t('company.careers.jobCompany'), job.company], [t('company.careers.jobLevel'), job.level], [t('company.careers.jobWorkingModel'), job.model], [t('company.careers.jobRemote'), job.remote]].map(([l, v]) => (
                    <div key={l}><span className="text-white/40 uppercase text-[10px] tracking-wider">{l}</span><p className="mt-1 text-white/80">{v}</p></div>
                  ))}
                </div>
                <div><h4 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-4">{t('company.careers.aboutRole')}</h4><p className="text-white/80 font-light leading-relaxed">{job.about}</p></div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div><h4 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-4">{t('company.careers.responsibilities')}</h4><ul className="space-y-2">{job.responsibilities.map((r, i) => <li key={i} className="flex items-start gap-3 text-white/70 text-sm"><span className="w-1 h-1 mt-2 bg-tiffany rounded-full flex-shrink-0" />{r}</li>)}</ul></div>
                  <div><h4 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-4">{t('company.careers.requirements')}</h4><ul className="space-y-2">{job.requirements.map((r, i) => <li key={i} className="flex items-start gap-3 text-white/70 text-sm"><span className="w-1 h-1 mt-2 bg-tiffany rounded-full flex-shrink-0" />{r}</li>)}</ul></div>
                  <div><h4 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-4">{t('company.careers.whatWeOffer')}</h4><ul className="space-y-2">{job.offers.map((o, i) => <li key={i} className="flex items-start gap-3 text-white/70 text-sm"><span className="w-1 h-1 mt-2 bg-tiffany rounded-full flex-shrink-0" />{o}</li>)}</ul></div>
                </div>
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <p className="text-white/40 text-xs">Job ID: {job.id} · Contact: FMC.emotiondrive@gmail.com</p>
                  <a href="mailto:FMC.emotiondrive@gmail.com?subject=Application: Sales Manager (EDR-SALES-DXB-001)" className="px-8 py-3 bg-tiffany text-black text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors">{t('company.careers.applyNow')}</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPLORE MORE */}
        <section className="py-24 px-8 bg-black"><div className="max-w-4xl mx-auto text-center"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{t('company.careers.exploreMore')}</h3><Link href="/company/profile" className="text-tiffany text-lg hover:text-white transition-colors underline underline-offset-4">{t('company.careers.companyProfileLink')}</Link></motion.div></div></section>

        {/* CLOSING */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><p className="text-2xl md:text-4xl font-light italic leading-snug">{t('company.careers.closingStatement')}</p></motion.div></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default Careers;
