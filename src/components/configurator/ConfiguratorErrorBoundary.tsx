'use client';

import { Component, type ReactNode } from 'react';
import { RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackImage?: string;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class ConfiguratorErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error?.message || 'Unknown error' };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ConfiguratorErrorBoundary] Render error:', error);
    console.error('[ConfiguratorErrorBoundary] Component stack:', info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111]">
          {this.props.fallbackImage && (
            <img
              src={this.props.fallbackImage}
              alt="JetCar preview"
              className="w-[60%] max-w-[600px] object-contain opacity-50 mb-8"
            />
          )}
          <p className="font-configurator text-white/60 text-sm mb-4">
            Something went wrong
          </p>
          <p className="font-configurator text-white/30 text-xs mb-4 max-w-md text-center px-4">
            {this.state.errorMessage}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, errorMessage: '' });
              window.location.reload();
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--dts-accent)] rounded-lg font-configurator font-bold text-sm text-[#111]"
          >
            <RotateCcw className="w-4 h-4" />
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ConfiguratorErrorBoundary;
