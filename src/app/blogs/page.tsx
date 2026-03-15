import type { Metadata } from 'next';
import BlogsPage from '@/components/pages/BlogsPage';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights and stories from eDrive JetCar.',
};

export default function Page() {
  return <BlogsPage />;
}
