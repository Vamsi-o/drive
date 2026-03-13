'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, X, Home } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import type { ConfiguratorModel, ConfigCategory } from '@/data/configuratorData';
import type { ConfiguratorAction, TabId } from '@/hooks/useConfiguratorState';
import ConfiguratorCategoryCard from './ConfiguratorCategoryCard';
import ConfiguratorOptionPanel from './ConfiguratorOptionPanel';

interface Props {
  model: ConfiguratorModel;
  activeTab: TabId;
  activeCategory: string | null;
  selections: Record<string, string>;
  touched: string[];
  dispatch: React.Dispatch<ConfiguratorAction>;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'exterior', label: 'EXTERIOR' },
  { id: 'interior', label: 'INTERIOR' },
  { id: 'performance', label: 'PERFORMANCE' },
];

const ConfiguratorSidebar = ({ model, activeTab, activeCategory, selections, touched, dispatch }: Props) => {
  const { t } = useTranslation();
  const currentTab = model.tabs.find((t) => t.id === activeTab);
  const currentCategory = activeCategory
    ? currentTab?.categories.find((c) => c.id === activeCategory)
    : null;

  const getSelectedOptionName = (category: ConfigCategory): string | undefined => {
    const selectedId = selections[category.id];
    if (!selectedId) return undefined;
    return category.options.find((o) => o.id === selectedId)?.name;
  };

  const totalCategories = currentTab?.categories.length || 0;
  const touchedInTab = currentTab?.categories.filter((c) => touched.includes(c.id)).length || 0;
  const progressPercent = totalCategories > 0 ? (touchedInTab / totalCategories) * 100 : 0;

  const totalTouched = touched.length;
  const totalAll = model.tabs.reduce((acc, tab) => acc + tab.categories.length, 0);

  return (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 right-0 bottom-0 w-full lg:w-[32%] min-w-[320px] max-w-[420px] bg-white/[0.95] backdrop-blur-2xl z-30 flex flex-col border-l border-black/[0.06] shadow-[-8px_0_40px_rgba(0,0,0,0.06)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">
        <div>
          <h2 className="font-configurator font-bold text-[18px] text-[#1a1a1a]">
            {t('config.configure')}
          </h2>
          <p className="font-configurator text-[11px] text-[#999] mt-0.5">
            {t('config.optionsCustomized', { touched: totalTouched, total: totalAll })}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="w-8 h-8 flex items-center justify-center text-[#aaa] hover:text-[#81D8D0] transition-colors rounded-lg hover:bg-black/[0.04]"
            title="Go to homepage"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>

          <motion.button
            onClick={() => dispatch({ type: 'RESET_ALL' })}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[#999] hover:text-[#81D8D0] transition-colors rounded-lg hover:bg-black/[0.04]"
            whileTap={{ scale: 0.95 }}
            title="Reset all options"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="font-configurator font-semibold text-[10px] tracking-wide">{t('config.reset')}</span>
          </motion.button>

          <button
            onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })}
            className="w-8 h-8 flex items-center justify-center text-[#bbb] hover:text-[#333] transition-colors rounded-lg hover:bg-black/[0.04]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="mx-5 flex items-center bg-[#f2f2f2] rounded-[10px] overflow-hidden shrink-0 p-[3px]">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const tabData = model.tabs.find((t) => t.id === tab.id);
          const tabTouched = tabData?.categories.filter((c) => touched.includes(c.id)).length || 0;
          const tabTotal = tabData?.categories.length || 0;

          return (
            <motion.button
              key={tab.id}
              onClick={() => dispatch({ type: 'SET_TAB', tab: tab.id })}
              className={`flex-1 py-2 font-configurator font-bold text-[11px] lg:text-[12px] text-center transition-all relative ${
                isActive
                  ? 'bg-[#81D8D0] text-[#111] rounded-[8px] shadow-sm'
                  : 'text-[#999] hover:text-[#666]'
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {tab.label}
              {tabTouched > 0 && !isActive && (
                <span className="ml-1 text-[9px] font-bold text-[#81D8D0]">
                  {tabTouched}/{tabTotal}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mx-5 mt-2.5 h-[3px] bg-black/[0.05] rounded-full overflow-hidden shrink-0">
        <motion.div
          className="h-full bg-gradient-to-r from-[#81D8D0] to-[#6fc9c1] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden mt-3">
        <AnimatePresence mode="wait">
          {currentCategory ? (
            <ConfiguratorOptionPanel
              key={`option-${currentCategory.id}`}
              category={currentCategory}
              selectedOptionId={selections[currentCategory.id] || ''}
              onSelect={(optionId) =>
                dispatch({ type: 'SELECT_OPTION', categoryId: currentCategory.id, optionId })
              }
              onBack={() => dispatch({ type: 'BACK_TO_CATEGORIES' })}
            />
          ) : (
            <motion.div
              key={`categories-${activeTab}`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="h-full overflow-y-auto px-5 pb-4 space-y-2 hide-scrollbar"
            >
              <div className="flex items-center justify-between pt-1 mb-2">
                <p className="font-configurator font-medium text-[12px] text-[#bbb]">
                  {t('config.selectCategory')}
                </p>
                <span className="font-configurator text-[11px] text-[#81D8D0] font-bold">
                  {touchedInTab}/{totalCategories}
                </span>
              </div>

              {currentTab?.categories.map((category, i) => (
                <ConfiguratorCategoryCard
                  key={category.id}
                  title={category.title}
                  subtitle={category.subtitle}
                  selectedOptionName={getSelectedOptionName(category)}
                  isTouched={touched.includes(category.id)}
                  onClick={() => dispatch({ type: 'SELECT_CATEGORY', categoryId: category.id })}
                  index={i}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-black/[0.05] shrink-0">
        <motion.button
          onClick={() => dispatch({ type: 'SHOW_DOWNLOAD' })}
          className="w-full h-[44px] bg-[#81D8D0] rounded-[10px] hover:bg-[#6fc9c1] transition-all font-configurator font-bold text-[13px] text-[#111] shadow-sm hover:shadow-md tracking-wide"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {t('config.viewSummary')}
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default ConfiguratorSidebar;
