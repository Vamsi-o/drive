'use client';

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const timeline = [
  {
    year: "2022", title: "Founder",
    text: "In 2022, eDrive was founded by Davyd Barskyi with the ambition to redefine luxury mobility on water by translating automotive-level design and engineering into a marine environment. This moment marked the beginning of a new category — where performance-driven form, safety-focused engineering and emotional design converge on water."
  },
  {
    year: "2023", title: "First Models Introduced",
    text: "In 2023, eDrive introduced its first two production models — Model F and Model R. The launch of these models marked the transition from concept development to a defined product lineup and established the foundation of eDrive's design language, engineering approach and manufacturing direction."
  },
  {
    year: "2025", title: "Product Expansion & Engineering Development",
    text: "In 2025, eDrive entered a new phase of product expansion and advanced engineering development. The year marked a significant broadening of the company's product portfolio, design directions and technological ambitions.",
    sub: [
      { title: "Lumina Jet Karting", text: "Development of Lumina Jet Karting progressed significantly in 2025, with the hull released during the same year. The project entered its final stage of refinement and quality optimization, with completion expected in 2026." },
      { title: "Model Refinement", text: "In 2025, eDrive introduced upgraded versions of its existing models — Model R and Model F. These updates reflected continued refinement of design, engineering performance and overall product maturity." },
      { title: "New Model & Technology Development", text: "During 2025, eDrive initiated development of several new projects: Tesla Marine (2026), Model B (2026), Formula W (2026), and the company's first electric JetCar (2026–2027)." },
      { title: "Strategic Equity Partners", text: "In 2025, eDrive formalized a new phase of growth by bringing in strategic equity partners who acquired an ownership stake and were officially registered on the eDrive trade license." },
    ],
  },
  {
    year: "2026", title: "Looking Ahead",
    text: "In 2026, eDrive continues its focus on completing key development projects initiated in the previous phase. The year is dedicated to final validation, refinement and preparation for the next generation of JetCar releases, supporting the company's long-term product and technology roadmap."
  },
];

const History = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO */}
        <section className="relative h-[70vh] flex flex-col justify-end pb-24 px-8 md:px-16 bg-gradient-to-b from-neutral-900 to-black">
          <motion.div {...fade}><p className="text-lg text-white/40 mb-4">{t('company.history.heroLabel')}</p><h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-heading-xl">{t('company.history.heroTitle')}</h1></motion.div>
        </section>

        {/* TIMELINE */}
        <section className="relative py-16 px-8 bg-black">
          <div className="max-w-5xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div key={i} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }} className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-24 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Year dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-tiffany rounded-full transform -translate-x-1/2 mt-2 z-10" />
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-tiffany/20 rounded-full transform -translate-x-1/2 mt-0 animate-pulse" />

                {/* Content */}
                <div className={`md:w-1/2 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-tiffany text-5xl md:text-7xl font-black tracking-tighter">{item.year}</span>
                  <h3 className="text-xl font-bold mt-4 mb-4">{item.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{item.text}</p>

                  {item.sub && (
                    <div className="mt-8 space-y-6">
                      {item.sub.map((s, j) => (
                        <div key={j} className="border-l-2 border-tiffany/30 pl-6">
                          <h4 className="text-sm font-bold text-tiffany uppercase tracking-wide mb-2">{s.title}</h4>
                          <p className="text-white/50 text-sm leading-relaxed">{s.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><p className="text-2xl md:text-4xl font-light italic leading-snug">{t('company.history.closingStatement')}</p></motion.div></div></section>
      </main>
      <FooterSection />
    </>
  );
};

export default History;
