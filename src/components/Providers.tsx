'use client';

import React, { useEffect } from 'react';
import i18n, { languages } from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import PageTransition from '@/components/PageTransition';

export default function Providers({ children }: { children: React.ReactNode }) {
  // Restore saved language after hydration completes.
  // i18n always initializes with 'en' so server and client first render match.
  // After mount, we switch to the saved language — React re-renders with the
  // correct translations without a hydration mismatch.
  useEffect(() => {
    try {
      const saved = localStorage.getItem('i18nextLng');
      if (saved && saved !== i18n.language) {
        const validCodes = languages.map((l) => l.code);
        if (validCodes.includes(saved)) {
          i18n.changeLanguage(saved);
          const lang = languages.find((l) => l.code === saved);
          if (lang?.dir === 'rtl') {
            document.documentElement.dir = 'rtl';
          }
        }
      }
    } catch {}
  }, []);

  return (
    <TooltipProvider>
      <PageTransition>
        {children}
      </PageTransition>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
}
