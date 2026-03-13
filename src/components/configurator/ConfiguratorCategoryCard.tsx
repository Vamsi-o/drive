'use client';

import { ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
  selectedOptionName?: string;
  isTouched: boolean;
  onClick: () => void;
  index: number;
}

const ConfiguratorCategoryCard = ({ title, subtitle, selectedOptionName, isTouched, onClick, index }: Props) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-[10px] transition-all duration-200 group border ${
        isTouched
          ? 'bg-[#f0faf9] border-[#81D8D0]/25 hover:border-[#81D8D0]/50 hover:shadow-sm'
          : 'bg-white border-[#eee] hover:border-[#ddd] hover:shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3 text-left min-w-0">
        {isTouched && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="w-5 h-5 rounded-full bg-[#81D8D0] flex items-center justify-center shrink-0"
          >
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </motion.div>
        )}

        <div className="min-w-0">
          <div className="font-configurator font-extrabold text-[14px] lg:text-[15px] text-[#1a1a1a] leading-tight">
            {title}
          </div>
          <div className="font-configurator font-medium text-[11px] lg:text-[12px] mt-0.5 truncate">
            {selectedOptionName ? (
              <span className="text-[#0fa89e]">{selectedOptionName}</span>
            ) : (
              <span className="text-[#bbb]">{subtitle}</span>
            )}
          </div>
        </div>
      </div>

      <ChevronRight
        className="w-4 h-4 text-[#ddd] group-hover:text-[#999] group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
        strokeWidth={2.5}
      />
    </motion.button>
  );
};

export default ConfiguratorCategoryCard;
