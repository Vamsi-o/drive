import ConfiguratorFullPage from '@/components/pages/ConfiguratorFullPage';

export default async function Page({ params }: { params: Promise<{ modelSlug: string }> }) {
  const { modelSlug } = await params;
  return <ConfiguratorFullPage modelSlug={modelSlug} />;
}
