import type { Metadata } from 'next';
import NewsPage from '@/components/pages/NewsPage';

export const metadata: Metadata = {
  title: 'News',
  description: 'The latest news and updates from eDrive JetCar.',
};

export default function Page() {
  return <NewsPage />;
}
