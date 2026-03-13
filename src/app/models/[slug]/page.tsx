import ModelDetailPage from '@/components/pages/ModelDetailPage';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ModelDetailPage slug={slug} />;
}
