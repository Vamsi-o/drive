'use client';

import React from 'react';
import '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import PageTransition from '@/components/PageTransition';

export default function Providers({ children }: { children: React.ReactNode }) {
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
