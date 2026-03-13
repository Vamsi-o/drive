'use client';

import { useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Share2, Camera, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { ConfiguratorModel, ConfigTab } from '@/data/configuratorData';

interface Props {
  model: ConfiguratorModel;
  selections: Record<string, string>;
  onClose: () => void;
}

const ConfiguratorDownloadModal = ({ model, selections, onClose }: Props) => {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);
  const [downloadedImage, setDownloadedImage] = useState(false);
  const [downloadedText, setDownloadedText] = useState(false);

  const getOptionLabel = (tab: ConfigTab, categoryId: string, optionId: string): string => {
    const cat = tab.categories.find((c) => c.id === categoryId);
    if (!cat) return '';
    const opt = cat.options.find((o) => o.id === optionId);
    return opt ? opt.name : '';
  };

  const getOptionDetails = (tab: ConfigTab, categoryId: string, optionId: string) => {
    const cat = tab.categories.find((c) => c.id === categoryId);
    if (!cat) return { price: '', numericPrice: 0 };
    const opt = cat.options.find((o) => o.id === optionId);
    return { price: opt?.price || '', numericPrice: opt?.numericPrice || 0 };
  };

  const configuredItems = model.tabs.flatMap((tab) =>
    tab.categories
      .filter((cat) => selections[cat.id])
      .map((cat) => {
        const details = getOptionDetails(tab, cat.id, selections[cat.id]);
        return {
          tab: tab.label,
          tabId: tab.id,
          category: cat.title,
          categoryId: cat.id,
          selected: getOptionLabel(tab, cat.id, selections[cat.id]),
          price: details.price,
          numericPrice: details.numericPrice,
        };
      })
  );

  const handleDownloadImage = useCallback(() => {

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1200;
    const lineHeight = 30;
    const padding = 60;
    const carImageHeight = 400;
    const headerHeight = 140;
    const itemCount = configuredItems.length;
    const tabCount = new Set(configuredItems.map((i) => i.tab)).size;
    const height = headerHeight + carImageHeight + (itemCount + tabCount * 2 + 6) * lineHeight + padding * 2;

    canvas.width = width;
    canvas.height = height;

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#0f0f0f');
    bgGrad.addColorStop(1, '#1a1a1a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle border
    ctx.strokeStyle = 'rgba(129,216,208,0.15)';
    ctx.lineWidth = 1;
    ctx.strokeRect(padding - 20, padding - 20, width - padding * 2 + 40, height - padding * 2 + 40);

    // Logo "DTS"
    ctx.fillStyle = '#81D8D0';
    ctx.font = 'bold 14px "Playfair Display", sans-serif';
    ctx.fillText('eDrive', padding, padding + 15);

    ctx.fillStyle = '#555';
    ctx.font = '11px "Playfair Display", sans-serif';
    ctx.fillText('JETCAR CONFIGURATOR', padding + 55, padding + 15);

    // Model name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 38px "Playfair Display", sans-serif';
    ctx.fillText(model.name, padding, padding + 65);

    // Subtitle
    ctx.fillStyle = '#81D8D0';
    ctx.font = '16px "Playfair Display", sans-serif';
    ctx.fillText('Configuration Summary', padding, padding + 92);

    // Stats line
    ctx.fillStyle = '#666';
    ctx.font = '13px "Playfair Display", sans-serif';
    const statsText = `${model.stats.engine} · ${model.stats.seating} · ${model.stats.length} × ${model.stats.beam}`;
    ctx.fillText(statsText, padding, padding + 118);

    let y = padding + headerHeight;

    // Load model image and draw it
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      ctx.save();
      ctx.fillStyle = '#1f1f1f';
      ctx.fillRect(padding, y, width - padding * 2, carImageHeight);

      const imgAspect = img.width / img.height;
      const boxWidth = width - padding * 2;
      const drawWidth = Math.min(boxWidth, carImageHeight * imgAspect);
      const drawHeight = drawWidth / imgAspect;
      const imgX = padding + (boxWidth - drawWidth) / 2;
      const imgY = y + (carImageHeight - drawHeight) / 2;
      ctx.drawImage(img, imgX, imgY, drawWidth, drawHeight);
      ctx.restore();

      y += carImageHeight + 30;
      drawConfigItems(ctx, y, width, padding, lineHeight, canvas);
    };
    img.onerror = () => {
      // If image fails to load, skip image area and draw items directly
      y += 20;
      drawConfigItems(ctx, y, width, padding, lineHeight, canvas);
    };
    img.src = model.image;

    function drawConfigItems(
      ctx: CanvasRenderingContext2D,
      startY: number,
      width: number,
      padding: number,
      lineHeight: number,
      canvas: HTMLCanvasElement
    ) {
      let y = startY;

      // Separator
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
      y += 25;

      // Group by tab
      let currentTab = '';
      configuredItems.forEach((item) => {
        if (item.tab !== currentTab) {
          currentTab = item.tab;
          y += 10;
          ctx.fillStyle = '#81D8D0';
          ctx.font = 'bold 15px "Playfair Display", sans-serif';
          ctx.fillText(item.tab, padding, y);
          y += lineHeight;
        }

        // Category
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px "Playfair Display", sans-serif';
        ctx.fillText(item.category, padding + 16, y);

        // Selected option
        ctx.fillStyle = '#999';
        ctx.font = '14px "Playfair Display", sans-serif';
        ctx.fillText(item.selected, padding + 260, y);

        // Price
        if (item.price) {
          ctx.fillStyle = item.price === 'Included' ? '#81D8D0' : '#F6C974';
          ctx.font = '13px "Playfair Display", sans-serif';
          const priceWidth = ctx.measureText(item.price).width;
          ctx.fillText(item.price, width - padding - priceWidth, y);
        }

        y += lineHeight;
      });

      // Footer separator
      y += 20;
      ctx.strokeStyle = '#333';
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();

      y += 22;
      ctx.fillStyle = '#555';
      ctx.font = '12px "Playfair Display", sans-serif';
      ctx.fillText(
        `Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · eDrive JetCar Configurator`,
        padding,
        y
      );

      // Download the canvas
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${model.name.replace(/\s+/g, '_')}_Configuration.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setDownloadedImage(true);
        setTimeout(() => setDownloadedImage(false), 2000);
      }, 'image/png');
    }
  }, [model, configuredItems]);

  const handleDownload = useCallback(() => {
    const summary = `
═══════════════════════════════════════════
    ${model.name} — CONFIGURATION SUMMARY
    eDrive · JetCar Configurator
═══════════════════════════════════════════

Model: ${model.name}
${model.stats.engine} · ${model.stats.seating} · ${model.stats.length} x ${model.stats.beam}

───────────────────────────────────────────
CONFIGURATION DETAILS
───────────────────────────────────────────
${configuredItems
  .map((item) => `[${item.tab}] ${item.category}: ${item.selected}${item.price ? ` (${item.price})` : ''}`)
  .join('\n')}

───────────────────────────────────────────
Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
═══════════════════════════════════════════
`;

    const blob = new Blob([summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${model.name.replace(/\s+/g, '_')}_Configuration.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloadedText(true);
    setTimeout(() => setDownloadedText(false), 2000);
  }, [model, configuredItems]);

  // Group items by tab
  const groupedByTab: Record<string, typeof configuredItems> = {};
  configuredItems.forEach((item) => {
    if (!groupedByTab[item.tab]) groupedByTab[item.tab] = [];
    groupedByTab[item.tab].push(item);
  });

  // Calculate total price using numericPrice
  const totalExtra = configuredItems.reduce((sum, item) => sum + item.numericPrice, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] max-h-[88vh] bg-[#141414] rounded-[20px] border border-white/[0.08] overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-['Playfair_Display',serif] font-black text-[13px] text-[#81D8D0] tracking-tight">eDrive</span>
              <div className="w-px h-4 bg-white/10" />
              <h2 className="font-['Playfair_Display',serif] font-bold text-[22px] text-white">
                {model.name}
              </h2>
            </div>
            <p className="font-['Playfair_Display',serif] text-[13px] text-white/40 mt-1">
              {t('config.configSummary')}
            </p>
          </div>
          <motion.button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Modal Body */}
        <div ref={contentRef} className="flex-1 overflow-y-auto px-7 py-5 space-y-5 hide-scrollbar">
          {/* Car Image Preview */}
          <div className="relative w-full h-[200px] bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] rounded-[14px] overflow-hidden flex items-center justify-center">
            <div
              className="absolute w-[60%] h-[40px] bottom-[12%] rounded-[8px]"
              style={{ background: 'rgba(10,10,10,0.3)', filter: 'blur(15px)' }}
            />
            <img
              src={model.image}
              alt={model.name}
              className="relative z-10 h-[150px] object-contain drop-shadow-lg"
            />
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/30 backdrop-blur-sm rounded-full">
              <span className="font-['Playfair_Display',serif] text-[10px] text-white/70 font-medium">
                {model.stats.engine}
              </span>
            </div>
          </div>

          {/* Configuration Items */}
          {Object.entries(groupedByTab).map(([tabLabel, items]) => (
            <div key={tabLabel}>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-1 h-4 rounded-full bg-[#81D8D0]" />
                <h3 className="font-['Playfair_Display',serif] font-bold text-[13px] text-white/80 uppercase tracking-wider">
                  {tabLabel}
                </h3>
              </div>
              <div className="space-y-1.5">
                {items.map((item) => (
                  <motion.div
                    key={item.categoryId}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between py-2.5 px-4 bg-white/[0.04] hover:bg-white/[0.06] rounded-[10px] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-['Playfair_Display',serif] font-semibold text-[13px] text-white/90">
                        {item.category}
                      </span>
                      <span className="font-['Playfair_Display',serif] text-[12px] text-white/40">
                        {item.selected}
                      </span>
                    </div>
                    <span className={`font-['Playfair_Display',serif] text-[12px] font-semibold ${
                      item.price === 'Included' ? 'text-[#81D8D0]/70' : 'text-[#F6C974]'
                    }`}>
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Total */}
          {totalExtra > 0 && (
            <div className="flex items-center justify-between py-3 px-4 bg-[#81D8D0]/[0.08] rounded-[10px] border border-[#81D8D0]/10">
              <span className="font-['Playfair_Display',serif] font-bold text-[14px] text-white/90">
                {t('config.additionalTotal')}
              </span>
              <span className="font-['Playfair_Display',serif] font-bold text-[15px] text-[#F6C974]">
                + ${totalExtra.toLocaleString()}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center gap-3 px-7 py-4 border-t border-white/[0.06]">
          <motion.button
            onClick={handleDownloadImage}
            className="flex-1 h-[46px] bg-[#81D8D0] rounded-[10px] hover:bg-[#6fc9c1] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#81D8D0]/15"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {downloadedImage ? (
              <Check className="w-4 h-4 text-[#111]" />
            ) : (
              <Camera className="w-4 h-4 text-[#111]" />
            )}
            <span className="font-['Playfair_Display',serif] font-bold text-[13px] text-[#111]">
              {downloadedImage ? t('config.downloaded') : t('config.downloadScreenshot')}
            </span>
          </motion.button>
          <motion.button
            onClick={handleDownload}
            className="h-[46px] px-5 border border-white/20 rounded-[10px] hover:bg-white/5 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {downloadedText ? (
              <Check className="w-4 h-4 text-[#81D8D0]" />
            ) : (
              <Share2 className="w-4 h-4 text-white/70" />
            )}
            <span className="font-['Playfair_Display',serif] font-medium text-[13px] text-white/80">
              {downloadedText ? t('config.saved') : t('config.exportText')}
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfiguratorDownloadModal;
