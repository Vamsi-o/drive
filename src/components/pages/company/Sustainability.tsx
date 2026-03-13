'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const sections = [
  { title: "Our Approach to Sustainability", text: ["At eDrive, sustainability is not a trend — it is a long-term commitment integrated into how we design, build, and scale our products.", "As a company operating at the intersection of innovation, manufacturing, and water mobility, we recognize our responsibility to develop solutions that balance performance, experience, and environmental awareness."] },
  { title: "Electrification & Future Technologies", text: ["eDrive is actively working toward the launch of its first electric-powered model, marking an important milestone in our sustainability roadmap."], bullets: ["Exploration of electric powertrain solutions", "Evaluation of performance-to-efficiency balance", "Integration of new technologies that reduce environmental impact"] },
  { title: "Responsible Design & Materials", text: ["Material selection and design quality play a critical role in sustainability."], bullets: ["High-quality, durable materials designed for long service life", "Responsible sourcing from trusted suppliers", "Manufacturing decisions aimed at reducing unnecessary waste", "Designs that prioritize longevity over short-term replacement"] },
  { title: "Production & Environmental Awareness", text: ["Our manufacturing approach is guided by efficiency, precision, and continuous improvement."], bullets: ["Optimize production processes", "Reduce material waste where possible", "Improve resource efficiency across manufacturing stages", "Work with partners who share similar environmental standards"] },
  { title: "Social Responsibility & Team Values", text: ["Sustainability also means responsibility toward people."], bullets: ["Safe and respectful working conditions", "Professional development and team growth", "Ethical cooperation with partners and suppliers", "Long-term value creation for all stakeholders"] },
  { title: "Governance & Long-Term Commitment", text: ["Sustainability at eDrive is closely linked to governance and strategic decision-making."], bullets: ["Product development planning", "Investment readiness and long-term strategy", "Advisory and leadership discussions"] },
  { title: "Looking Ahead", text: ["Sustainability at eDrive is a journey.", "As our product range expands and new technologies — including electric propulsion — are introduced, our sustainability framework will continue to develop accordingly.", "We remain committed to responsible innovation, transparency, and building water mobility solutions designed for the future."] },
];

const Sustainability = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO */}
        <section className="relative h-[60vh] flex flex-col justify-end pb-20 px-8 md:px-16 bg-gradient-to-b from-emerald-950/40 to-black">
          <motion.div {...fade}><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">{t('company.sustainability.heroLabel')}</p><h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-heading-xl">{t('company.sustainability.heroTitle')}</h1></motion.div>
        </section>

        {sections.map((s, i) => (
          <section key={i} className={`py-24 px-8 ${i % 3 === 1 ? 'bg-tiffany text-black' : i % 3 === 2 ? 'bg-neutral-950' : 'bg-black'}`}>
            <div className="max-w-4xl mx-auto"><motion.div {...fade}>
              <h3 className={`text-sm tracking-[0.2em] uppercase mb-8 ${i % 3 === 1 ? 'text-black/50 font-bold' : 'text-white/50'}`}>{s.title}</h3>
              {s.text.map((t, j) => <p key={j} className={`text-lg font-light leading-relaxed mb-4 ${i % 3 === 1 ? '' : j > 0 ? 'text-muted-foreground' : 'text-white/80'}`}>{t}</p>)}
              {s.bullets && <ul className="mt-6 space-y-3">{s.bullets.map((b, j) => <li key={j} className={`flex items-center gap-4 ${i % 3 === 1 ? 'text-black/80' : 'text-white/70'}`}><span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i % 3 === 1 ? 'bg-black' : 'bg-tiffany'}`} />{b}</li>)}</ul>}
            </motion.div></div>
          </section>
        ))}

        {/* FINAL */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><p className="text-2xl md:text-4xl font-light italic leading-snug">{t('company.sustainability.closingStatement')}</p></motion.div></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default Sustainability;
