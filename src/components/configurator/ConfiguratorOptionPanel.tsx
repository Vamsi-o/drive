'use client';

import { ArrowLeft, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ConfigCategory } from '@/data/configuratorData';

interface Props {
  category: ConfigCategory;
  selectedOptionId: string;
  onSelect: (optionId: string) => void;
  onBack: () => void;
}

const ConfiguratorOptionPanel = ({ category, selectedOptionId, onSelect, onBack }: Props) => {
  const { t } = useTranslation();
  const hasColorSwatches = ['hull-color', 'ambient-lighting', 'upholstery'].includes(category.id);
  const selectedOption = category.options.find((o) => o.id === selectedOptionId);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="px-5 pt-3 pb-2 shrink-0">
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-[#aaa] hover:text-[#333] transition-colors mb-3 group"
          whileTap={{ scale: 0.97 }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="font-configurator text-[12px] font-medium">{t('config.back')}</span>
        </motion.button>

        <h3 className="font-configurator font-extrabold text-[18px] text-[#1a1a1a]">
          {category.title}
        </h3>

        <AnimatePresence mode="wait">
          {selectedOption ? (
            <motion.div
              key={selectedOption.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2 mt-1.5"
            >
              <div className="w-4 h-4 rounded-full bg-[#81D8D0] flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </div>
              <span className="font-configurator text-[12px] text-[#0fa89e] font-medium">
                {selectedOption.name}
              </span>
              {selectedOption.price && selectedOption.price !== 'Included' && (
                <span className="font-configurator text-[11px] text-[#e6a817] font-semibold ml-auto">
                  {selectedOption.price}
                </span>
              )}
            </motion.div>
          ) : (
            <motion.p
              key="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-configurator text-[12px] text-[#ccc] mt-1.5"
            >
              {t('config.chooseOption')}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-black/[0.05] my-2" />

      {/* Options */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 hide-scrollbar">
        {/* Color Swatches */}
        {hasColorSwatches && (
          <div className="grid grid-cols-4 gap-2.5 mb-4 px-1">
            {category.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              return (
                <motion.button
                  key={option.id}
                  onClick={() => onSelect(option.id)}
                  className={`relative aspect-square rounded-[10px] transition-all duration-200 ${
                    isSelected
                      ? 'ring-2 ring-[#81D8D0] ring-offset-2 ring-offset-white scale-105'
                      : 'hover:scale-105'
                  }`}
                  whileTap={{ scale: 0.92 }}
                  title={option.name}
                >
                  <div
                    className="absolute inset-0 rounded-[9px] border border-black/10"
                    style={{
                      background: option.gradient || option.color || '#ddd',
                    }}
                  />
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/15 rounded-[9px]"
                      >
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Check className="w-3 h-3 text-[#333]" strokeWidth={3} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Option Cards */}
        <div className="space-y-2">
          {category.options.map((option, i) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onSelect(option.id)}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-3 rounded-[10px] transition-all duration-200 border relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#f0faf9] border-[#81D8D0]/40 shadow-sm'
                    : 'bg-white border-[#eee] hover:border-[#ddd] hover:shadow-sm'
                }`}
              >
                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {hasColorSwatches && option.color && (
                        <div
                          className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10"
                          style={{ background: option.gradient || option.color }}
                        />
                      )}
                      <span className={`font-configurator font-bold text-[13px] ${
                        isSelected ? 'text-[#0fa89e]' : 'text-[#1a1a1a]'
                      }`}>
                        {option.name}
                      </span>
                    </div>
                    <p className="font-configurator text-[11px] text-[#aaa] mt-0.5 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    {option.price && (
                      <span className={`font-configurator text-[11px] font-semibold whitespace-nowrap ${
                        option.price === 'Included'
                          ? 'text-[#81D8D0]'
                          : isSelected ? 'text-[#e6a817]' : 'text-[#bbb]'
                      }`}>
                        {option.price}
                      </span>
                    )}

                    <motion.div
                      className={`w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all ${
                        isSelected ? 'bg-[#81D8D0]' : 'border-[1.5px] border-[#ddd]'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                        >
                          <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ConfiguratorOptionPanel;
