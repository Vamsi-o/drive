'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { CONFIGURATOR_MODELS } from '@/data/configuratorData';
import type { ConfiguratorModel } from '@/data/configuratorData';
import type { ConfiguratorAction } from '@/hooks/useConfiguratorState';

interface Props {
  model: ConfiguratorModel;
  selectedModelIndex: number;
  selections: Record<string, string>;
  dispatch: React.Dispatch<ConfiguratorAction>;
}

const ConfiguratorLanding = ({ model, selectedModelIndex, selections, dispatch }: Props) => {
  const { t } = useTranslation();
  const [direction, setDirection] = useState(0);

  // Derive hull-color swatches from the model's exterior tab
  const hullColorOptions = useMemo(() => {
    const exteriorTab = model.tabs.find((t) => t.id === 'exterior');
    const hullCat = exteriorTab?.categories.find((c) => c.id === 'hull-color');
    return hullCat?.options ?? [];
  }, [model]);

  const selectedHullColorId = selections['hull-color'] || 'arctic-white';
  const selectedHullOption = hullColorOptions.find((o) => o.id === selectedHullColorId);

  const goToModel = (index: number) => {
    setDirection(index > selectedModelIndex ? 1 : -1);
    dispatch({ type: 'SELECT_MODEL', index });
  };

  const prevModel = () => {
    const newIndex = (selectedModelIndex - 1 + CONFIGURATOR_MODELS.length) % CONFIGURATOR_MODELS.length;
    goToModel(newIndex);
  };

  const nextModel = () => {
    const newIndex = (selectedModelIndex + 1) % CONFIGURATOR_MODELS.length;
    goToModel(newIndex);
  };

  const handleColorSelect = useCallback((optionId: string) => {
    dispatch({ type: 'SELECT_OPTION', categoryId: 'hull-color', optionId });
  }, [dispatch]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevModel();
      else if (e.key === 'ArrowRight') nextModel();
      else if (e.key === 'Enter' && !model.comingSoon) dispatch({ type: 'START_CONFIGURATION' });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModelIndex, model.comingSoon]);

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-[#111]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-30 w-full h-[60px] sm:h-[70px] lg:h-[80px] flex items-center justify-between px-6 lg:px-10 shrink-0"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white/60 hover:text-white transition-all group"
        >
          <Home className="w-4 h-4" />
          <span className="font-configurator font-black text-[16px] lg:text-[18px] tracking-tight text-white/90 group-hover:text-white transition-colors">
            eDrive
          </span>
        </Link>

        <span className="absolute left-1/2 -translate-x-1/2 font-configurator font-light text-[11px] tracking-[0.4em] text-white/30 uppercase">
          JetCar Configurator
        </span>

        <span className="font-configurator text-[12px] text-white/30 font-medium">
          {String(selectedModelIndex + 1).padStart(2, '0')} / {String(CONFIGURATOR_MODELS.length).padStart(2, '0')}
        </span>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 relative flex flex-col justify-between overflow-hidden">

        {/* MODEL Letter */}
        <div className="absolute left-6 lg:left-[8%] top-4 lg:top-[6%] z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={model.id}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-configurator text-[11px] sm:text-[13px] lg:text-[15px] tracking-[0.35em] font-light text-white/40 block">
                MODEL
              </span>
              <span
                className="font-serif italic font-bold text-[70px] sm:text-[100px] lg:text-[150px] leading-[0.78] tracking-[-0.02em] block"
                style={{ color: model.activeColor }}
              >
                {model.letter}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Model selector dots */}
        <div className="absolute left-4 lg:left-[4%] top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2.5">
          {CONFIGURATOR_MODELS.map((m, i) => (
            <button
              key={m.id}
              onClick={() => goToModel(i)}
              className={`rounded-full transition-all duration-300 ${
                selectedModelIndex === i
                  ? 'w-2.5 h-2.5 scale-100'
                  : 'w-2 h-2 opacity-40 hover:opacity-70'
              }`}
              style={{
                backgroundColor: selectedModelIndex === i ? m.activeColor : '#fff',
              }}
              title={m.name}
              aria-label={`Select ${m.name}`}
            />
          ))}
        </div>

        {/* Model description */}
        <div className="absolute left-6 lg:left-[8%] top-[38%] lg:top-[40%] z-20 max-w-[280px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={model.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="font-configurator font-light text-[13px] lg:text-[15px] leading-relaxed text-white/35"
            >
              {model.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Coming Soon badge */}
        {model.comingSoon && (
          <div className="absolute right-6 lg:right-[8%] top-4 lg:top-[6%] z-20">
            <div className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
              <span className="font-configurator text-[10px] font-bold tracking-[0.3em] uppercase text-white/60">
                Coming Soon
              </span>
            </div>
          </div>
        )}

        {/* Car Image area */}
        <div className="flex-1 flex items-center justify-center relative px-4">
          <div className="absolute w-[55%] h-[25%] bottom-[18%] bg-[#050505] blur-[50px] rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.92, x: direction * 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: direction * -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[70%] sm:w-[55%] lg:w-[45%] max-w-[864px] aspect-video"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={prevModel}
            className="absolute left-[8%] lg:left-[15%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous model"
          >
            <ChevronLeft className="w-5 h-5 text-white/60" />
          </motion.button>
          <motion.button
            onClick={nextModel}
            className="absolute right-[8%] lg:right-[15%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next model"
          >
            <ChevronRight className="w-5 h-5 text-white/60" />
          </motion.button>
        </div>

        {/* Bottom: Hull Color Swatches + START CONFIGURATION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-20 flex items-center justify-center gap-4 lg:gap-6 px-4 lg:px-[8%] pb-5 lg:pb-7"
        >
          <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.05] rounded-[10px] border border-white/[0.08] backdrop-blur-sm overflow-x-auto hide-scrollbar">
            {hullColorOptions.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => handleColorSelect(option.id)}
                className={`w-[40px] h-[30px] lg:w-[50px] lg:h-[38px] rounded-[6px] transition-all duration-200 shrink-0 ${
                  selectedHullColorId === option.id
                    ? 'border-2 border-white shadow-lg'
                    : 'border border-white/15 hover:border-white/40'
                }`}
                style={{
                  background: option.gradient || option.color || '#ddd',
                  boxShadow: selectedHullColorId === option.id ? '0 4px 15px rgba(0,0,0,0.4)' : '0 4px 4px 2px rgba(0,0,0,0.25)',
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title={option.name}
                aria-label={`Select ${option.name}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedHullOption && (
              <motion.span
                key={selectedHullOption.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="hidden lg:block font-configurator text-[13px] text-white/35 font-light whitespace-nowrap"
              >
                {selectedHullOption.name}
              </motion.span>
            )}
          </AnimatePresence>

          <div className="flex-1" />

          <motion.button
            onClick={() => !model.comingSoon && dispatch({ type: 'START_CONFIGURATION' })}
            className={`h-[48px] lg:h-[54px] px-6 lg:px-8 rounded-[10px] transition-all flex items-center gap-3 group shrink-0 shadow-lg ${
              model.comingSoon
                ? 'bg-white/10 cursor-not-allowed'
                : 'bg-[var(--dts-accent)] hover:bg-[var(--dts-accent-hover)]'
            }`}
            style={!model.comingSoon ? { boxShadow: '0 8px 30px var(--dts-accent-glow)' } : undefined}
            whileHover={!model.comingSoon ? { scale: 1.03 } : undefined}
            whileTap={!model.comingSoon ? { scale: 0.97 } : undefined}
          >
            <span className={`font-configurator font-bold text-[13px] lg:text-[14px] tracking-wide ${
              model.comingSoon ? 'text-white/40' : 'text-[#111]'
            }`}>
              {model.comingSoon ? t('models.comingSoon').toUpperCase() : t('configurator.startConfig').toUpperCase()}
            </span>
            {!model.comingSoon && (
              <ChevronRight className="w-4 h-4 text-[#111] group-hover:translate-x-0.5 transition-transform" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfiguratorLanding;
