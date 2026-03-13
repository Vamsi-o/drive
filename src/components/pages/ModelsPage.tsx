'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const modelRImg = "/assets/slide-model-r.png";
const modelFImg = "/assets/slide-model-f.png";
const luminaImg = "/assets/revuelto.jpg";
const cyberImg = "/assets/temerario.jpg";

const allModels = [
  { name: "Model R", slug: "model-r", image: modelRImg, tagline: "Refined Performance" },
  { name: "Model F", slug: "model-f", image: modelFImg, tagline: "Pure Power on Water" },
  { name: "Lumina", slug: "lumina", image: luminaImg, tagline: "Innovation in Motion" },
  { name: "Cybermarine", slug: "cybermarine", image: cyberImg, tagline: "The Future, Reimagined" },
];

const ModelsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-20">
        <div className="px-8 md:px-16 mb-16">
          <h1 className="text-heading-xl text-4xl md:text-6xl text-foreground">{t('models.allModels')}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {allModels.map((model, i) => (
            <motion.div
              key={model.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/models/${model.slug}`} className="group block relative aspect-video overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="section-label mb-2">{model.tagline}</p>
                  <h2 className="text-heading-xl text-3xl md:text-4xl text-foreground">{model.name}</h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default ModelsPage;
