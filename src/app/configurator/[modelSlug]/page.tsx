import ConfiguratorFullPage from '@/components/pages/ConfiguratorFullPage';
import ConfiguratorErrorBoundary from '@/components/configurator/ConfiguratorErrorBoundary';

export default async function Page({ params }: { params: Promise<{ modelSlug: string }> }) {
  const { modelSlug } = await params;
  return (
    <ConfiguratorErrorBoundary>
      <ConfiguratorFullPage modelSlug={modelSlug} />
    </ConfiguratorErrorBoundary>
  );
}
