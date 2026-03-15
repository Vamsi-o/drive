import ConfiguratorFullPage from '@/components/pages/ConfiguratorFullPage';
import ConfiguratorErrorBoundary from '@/components/configurator/ConfiguratorErrorBoundary';

export default function Page() {
  return (
    <ConfiguratorErrorBoundary>
      <ConfiguratorFullPage />
    </ConfiguratorErrorBoundary>
  );
}
