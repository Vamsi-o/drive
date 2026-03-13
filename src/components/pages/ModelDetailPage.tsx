'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const modelRImg = "/assets/config/modelR.jpg";
const modelFImg = "/assets/config/modelF.jpg";
const urusImg = "/assets/car-model-2.jpg";
const huracanImg = "/assets/car-model-1.jpg";
const interiorImg = "/assets/car-interior.jpg";

const modelData: Record<string, {
  name: string;
  tagline: string;
  image: string;
  specs: { label: string; value: string }[];
}> = {
  "model-r": {
    name: "Model R",
    tagline: "Refined Performance",
    image: modelRImg,
    specs: [
      { label: "Max Power", value: "920 CV" },
      { label: "Max Speed", value: ">340 km/h" },
      { label: "0-100 km/h", value: "<2.7 s" },
      { label: "Engine", value: "V8 Hybrid" },
    ],
  },
  "model-f": {
    name: "Model F",
    tagline: "Pure Power on Water",
    image: modelFImg,
    specs: [
      { label: "Max Power", value: "1015 CV" },
      { label: "Max Speed", value: ">350 km/h" },
      { label: "0-100 km/h", value: "2.5 s" },
      { label: "Engine", value: "V12 Hybrid" },
    ],
  },
  lumina: {
    name: "Lumina",
    tagline: "Innovation in Motion",
    image: urusImg,
    specs: [
      { label: "Max Power", value: "666 CV" },
      { label: "Max Speed", value: "306 km/h" },
      { label: "0-100 km/h", value: "3.3 s" },
      { label: "Engine", value: "V8 Twin Turbo" },
    ],
  },
  cybermarine: {
    name: "Cybermarine",
    tagline: "The Future, Reimagined",
    image: huracanImg,
    specs: [
      { label: "Max Power", value: "640 CV" },
      { label: "Max Speed", value: "325 km/h" },
      { label: "0-100 km/h", value: "3.2 s" },
      { label: "Engine", value: "V10" },
    ],
  },
};

const ModelDetailPage = ({ slug }: { slug: string }) => {
  const { t } = useTranslation();
  const model = modelData[slug || ""];

  if (!model) {
    return (
      <>
        <NavBar />
        <div className="pt-32 px-16 text-center">
          <h1 className="text-heading-xl text-4xl text-foreground">{t('models.notFound')}</h1>
          <Link href="/models" className="nav-link mt-8 inline-block">{t('models.backToModels')}</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-end overflow-hidden">
          <img src={model.image} alt={model.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-label mb-4"
            >
              {model.tagline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-heading-xl text-5xl md:text-7xl lg:text-8xl text-foreground"
            >
              {model.name}
            </motion.h1>
          </div>
        </section>

        {/* Specs */}
        <section className="px-8 md:px-16 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {model.specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-t border-border pt-6"
              >
                <p className="text-heading-xl text-3xl md:text-4xl text-foreground">{spec.value}</p>
                <p className="section-label mt-2">{spec.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interior */}
        <section className="relative aspect-[16/7] overflow-hidden">
          <img src={interiorImg} alt="Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/30" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16">
            <h2 className="text-heading-xl text-3xl md:text-5xl text-foreground mb-4">{t('models.interior')}</h2>
            <p className="text-sm text-foreground/80 font-body max-w-lg">
              {t('models.interiorDesc')}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-16 py-20 text-center">
          <h2 className="text-heading-xl text-3xl md:text-4xl text-foreground mb-8">
            {t('models.configureYour')} {model.name}
          </h2>
          <Link href="/configurator" className="btn-filled-white">
            {t('models.startConfiguration')}
          </Link>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default ModelDetailPage;
