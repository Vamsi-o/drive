'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const sections = [
  { title: "Governance Overview", text: ["eDrive is structured to support sustainable growth, strategic partnerships, and external investment through transparent and responsible governance practices.", "As the company expands across international markets and develops advanced water mobility products, governance plays a central role in ensuring clarity of decision-making, accountability, and long-term stability.", "Our governance framework is designed to scale alongside the business and evolve toward future public and institutional investment requirements."] },
  { title: "Leadership & Management", text: ["eDrive is led by an experienced management team responsible for strategic direction, operations, manufacturing, and commercial growth."], bullets: ["Clear decision-making responsibilities", "Operational efficiency across departments", "Alignment between strategy, execution, and long-term vision"] },
  { title: "Advisory & Leadership Support", text: ["In addition to its executive management, eDrive collaborates with an advisory layer that supports leadership development, strategic thinking, and organizational growth."], bullets: ["Support leadership decision-making", "Assist with business scaling and organizational development", "Contribute to long-term strategic planning", "Strengthen investment readiness"] },
  { title: "Compliance & Ethical Standards", text: ["eDrive is committed to conducting business in a lawful, ethical, and transparent manner."], bullets: ["Adherence to applicable laws and regulations", "Fair and responsible business practices", "Respect for partners, clients, and stakeholders", "Zero tolerance for corruption or unethical conduct"] },
  { title: "Safety & Certification Commitment", text: ["Safety and certification are core pillars of eDrive's product development and manufacturing philosophy."], bullets: ["Designing products that meet recognized international safety standards", "Pursuing required certifications, including CE compliance, where applicable", "Implementing engineering solutions focused on passenger safety and reliability"] },
  { title: "Investment Readiness", text: ["eDrive operates with an investment-ready structure, designed to support strategic, institutional, and public investment opportunities."], bullets: ["Support transparent cooperation with investors", "Facilitate due diligence processes", "Enable scalable ownership and corporate structures"] },
  { title: "Looking Ahead", text: ["As eDrive continues to grow, its governance and compliance framework will evolve accordingly.", "We are committed to strengthening corporate governance practices in line with future expansion, shareholder structures, and potential public market participation."] },
];

const Governance = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO */}
        <section className="relative h-[60vh] flex flex-col justify-end pb-20 px-8 md:px-16 bg-gradient-to-b from-neutral-900 to-black">
          <motion.div {...fade}><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">{t('company.governance.heroLabel')}</p><h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">{t('company.governance.heroTitle')}</h1></motion.div>
        </section>

        {sections.map((s, i) => (
          <section key={i} className={`py-24 px-8 ${i % 2 === 0 ? 'bg-black' : 'bg-neutral-950'} ${i > 0 ? 'border-t border-white/5' : ''}`}>
            <div className="max-w-4xl mx-auto"><motion.div {...fade}>
              <h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{s.title}</h3>
              {s.text.map((t, j) => <p key={j} className={`text-lg font-light leading-relaxed mb-4 ${j > 0 ? 'text-muted-foreground' : 'text-white/80'}`}>{t}</p>)}
              {s.bullets && <ul className="mt-6 space-y-3">{s.bullets.map((b, j) => <li key={j} className="flex items-center gap-4 text-white/70"><span className="w-1.5 h-1.5 bg-tiffany rounded-full flex-shrink-0" />{b}</li>)}</ul>}
            </motion.div></div>
          </section>
        ))}

        {/* FINAL NOTE */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><p className="text-2xl md:text-4xl font-light italic leading-snug">{t('company.governance.closingStatement')}</p></motion.div></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default Governance;
