'use client';

import { useEffect } from 'react';

export default function MediaProtection() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tag = target.tagName.toLowerCase();
      if (tag === 'img' || tag === 'video' || target.closest('video')) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null;
}
