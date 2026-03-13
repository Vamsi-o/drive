import NewsDetailPage from '@/components/pages/NewsDetailPage';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <NewsDetailPage slug={slug} />;
}
