'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const dealerBg = "/assets/dealer-bg.jpg";

const DealerSection = () => {
  const { t } = useTranslation();
  return (
    <section id="dealerships" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src={dealerBg}
        alt="EDrive JetCar dealership"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <p className="section-label mb-4">{t('dealer.globalNetwork')}</p>
        <h2 className="text-heading-xl text-3xl md:text-5xl text-foreground mb-8">
          {t('dealer.becomeDistributor')}
        </h2>
        <Link href="/become-distributor" className="btn-outline-white">
          {t('common.learnMore')}
        </Link>
      </motion.div>
    </section>
  );
};

export default DealerSection;
