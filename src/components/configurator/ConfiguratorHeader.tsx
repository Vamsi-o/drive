'use client';

import { PanelRight, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ConfiguratorModel } from '@/data/configuratorData';

interface Props {
  model: ConfiguratorModel;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onBackToLanding: () => void;
  onShowDownload: () => void;
}

const ConfiguratorHeader = ({ model, sidebarOpen, onToggleSidebar, onBackToLanding, onShowDownload }: Props) => {
  const { t } = useTranslation();
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-40 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[56px] lg:h-[64px] bg-[#f0f0f0]"
    >
      {/* Left: Back + Logo + Model Name */}
      <div className="flex items-center gap-2">
        <motion.button
          onClick={onBackToLanding}
          className="w-9 h-9 flex items-center justify-center text-[#555] hover:text-[#81D8D0] transition-all rounded-full hover:bg-black/5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Back to model selection"
        >
          <ArrowLeft className="w-[18px] h-[18px]" strokeWidth={2} />
        </motion.button>

        <div className="w-px h-5 bg-black/10 mx-1" />

        <Link
          href="/"
          className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-black/5 transition-all group"
          title="Go to homepage"
        >
          <Home className="w-4 h-4 text-[#888] group-hover:text-[#81D8D0] transition-colors" />
          <span className="font-configurator font-black text-[15px] lg:text-[17px] text-[#333] tracking-tight">
            eDrive
          </span>
        </Link>

        <div className="w-px h-5 bg-black/10 mx-1" />

        <span className="font-configurator font-bold text-[14px] lg:text-[16px] text-[#555] tracking-tight">
          {model.name}
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <motion.button
          onClick={onShowDownload}
          className="h-[34px] lg:h-[36px] px-4 bg-[#81D8D0] rounded-[8px] hover:bg-[#6fc9c1] transition-all shadow-sm hover:shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="font-configurator font-bold text-[11px] lg:text-[12px] text-[#111] tracking-wide">
            {t('config.yourJetcar')}
          </span>
        </motion.button>

        <motion.button
          onClick={onToggleSidebar}
          className={`flex items-center gap-2 h-[34px] px-3 rounded-[8px] transition-all ${
            sidebarOpen
              ? 'bg-[#81D8D0]/20 text-[#333] border border-[#81D8D0]/30'
              : 'text-[#555] hover:bg-black/5 hover:text-[#333] border border-transparent'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <PanelRight className="w-[16px] h-[16px]" strokeWidth={1.8} />
          <span className="hidden sm:inline font-configurator font-semibold text-[11px] tracking-wide">
            {sidebarOpen ? t('config.close') : t('config.configure')}
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default ConfiguratorHeader;
