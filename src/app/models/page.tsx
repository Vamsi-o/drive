import type { Metadata } from 'next';
import ModelsPage from '@/components/pages/ModelsPage';

export const metadata: Metadata = {
  title: 'Models',
  description: 'Explore the eDrive JetCar model lineup — performance, luxury, and innovation on water.',
};

export default function Page() {
  return <ModelsPage />;
}
