import type { Metadata } from 'next';
import GalleryPage from '@/components/pages/GalleryPage';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse the eDrive JetCar photo and video gallery.',
};

export default function Page() {
  return <GalleryPage />;
}
