'use client';

import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import SmoothScroll from "@/components/SmoothScroll";

const teamMembers = [
  {
    name: "Irina Kamenski",
    role: "Commercial Director",
    image: "/assets/Team/1.jpg",
    description:
      "Leads eDrive's commercial strategy, driving partnerships and market expansion across the Middle East and beyond.",
  },
  {
    name: "Amina Barska",
    role: "Strategic Case Manager",
    image: "/assets/Team/2.jpg",
    description:
      "Orchestrates key client relationships and strategic initiatives, ensuring seamless project delivery.",
  },
  {
    name: "Alexander Stig",
    role: "Senior Sales Manager",
    image: "/assets/Team/3.jpg",
    description:
      "Spearheads global sales operations with deep expertise in luxury marine and automotive markets.",
  },
  {
    name: "Herasymenko Yevhen",
    role: "Sales Manager",
    image: "/assets/Team/4.jpg",
    description:
      "Drives client acquisition and sales growth, connecting eDrive's vision with customers worldwide.",
  },
  {
    name: "Vasilii Riazanov",
    role: "Factory Operations Manager",
    image: "/assets/Team/5.jpg",
    description:
      "Oversees production and quality control at eDrive's manufacturing facility, ensuring CE-certified excellence.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const TeamPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SmoothScroll />
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* Hero */}
        <section className="pt-32 pb-16 px-8 md:px-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] tracking-[0.3em] uppercase text-tiffany mb-3 font-bold"
          >
            {t('team.subtitle')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl text-foreground font-bold tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t('team.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-white/50 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            {t('team.description')}
          </motion.p>
        </section>

        {/* Team Grid */}
        <section className="px-8 md:px-16 pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                variants={cardVariants}
                className="group relative overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-tiffany font-bold mb-1">
                      {member.role}
                    </p>
                    <h3
                      className="text-xl md:text-2xl font-bold text-white tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-16 pb-24">
          <div className="border-t border-white/[0.06] pt-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t('team.joinTitle')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/40 text-base md:text-lg max-w-lg mx-auto mb-8 font-light"
            >
              {t('team.joinDescription')}
            </motion.p>
            <motion.a
              href="/company/careers"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-tiffany text-black text-sm font-semibold tracking-[0.1em] uppercase hover:bg-tiffany/80 transition-colors"
            >
              {t('team.viewCareers')}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default TeamPage;
