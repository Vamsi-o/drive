'use client';

import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfiguratorState } from '@/hooks/useConfiguratorState';
import ConfiguratorLanding from '@/components/configurator/ConfiguratorLanding';
import ConfiguratorHeader from '@/components/configurator/ConfiguratorHeader';
import ConfiguratorSidebar from '@/components/configurator/ConfiguratorSidebar';
import ConfiguratorDownloadModal from '@/components/configurator/ConfiguratorDownloadModal';

const ConfiguratorCanvas = dynamic(
  () => import('@/components/configurator/ConfiguratorCanvas'),
  { ssr: false }
);

const ConfiguratorFullPage = ({ modelSlug }: { modelSlug?: string }) => {
  const { state, dispatch, model } = useConfiguratorState(modelSlug);
  const isLanding = state.phase === 'landing';

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-[#f0f0f0]">
      <AnimatePresence mode="wait">
        {isLanding ? (
          <motion.div
            key="landing"
            className="flex-1 flex flex-col min-h-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ConfiguratorLanding
              model={model}
              selectedModelIndex={state.selectedModelIndex}
              selections={state.selections}
              dispatch={dispatch}
            />
          </motion.div>
        ) : (
          <motion.div
            key="canvas"
            className="flex-1 relative flex flex-col min-h-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ConfiguratorHeader
              model={model}
              sidebarOpen={state.sidebarOpen}
              onToggleSidebar={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
              onBackToLanding={() => dispatch({ type: 'BACK_TO_LANDING' })}
              onShowDownload={() => dispatch({ type: 'SHOW_DOWNLOAD' })}
            />

            <div className="flex-1 relative overflow-hidden">
              <ConfiguratorCanvas
                model={model}
                sidebarOpen={state.sidebarOpen}
                selections={state.selections}
              />

              <AnimatePresence>
                {state.sidebarOpen && (
                  <ConfiguratorSidebar
                    model={model}
                    activeTab={state.activeTab}
                    activeCategory={state.activeCategory}
                    selections={state.selections}
                    touched={state.touched}
                    dispatch={dispatch}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Modal */}
      <AnimatePresence>
        {state.showDownloadModal && (
          <ConfiguratorDownloadModal
            model={model}
            selections={state.selections}
            onClose={() => dispatch({ type: 'HIDE_DOWNLOAD' })}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConfiguratorFullPage;
