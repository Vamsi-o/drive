'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CarModel from './CarModel';
import { useCarMaterials } from './CarMaterials';
import type { ConfiguratorModel } from '@/data/configuratorData';
import type { ConfiguratorAction } from '@/hooks/useConfiguratorState';

interface Props {
  model: ConfiguratorModel;
  sidebarOpen: boolean;
  selections: Record<string, string>;
  activeAngle: string;
  dispatch: React.Dispatch<ConfiguratorAction>;
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
}

function LoadingSpinner() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <torusGeometry args={[0.3, 0.05, 16, 32]} />
      <meshStandardMaterial color="#81D8D0" emissive="#81D8D0" emissiveIntensity={0.5} />
    </mesh>
  );
}

function SceneContent({ selections }: { selections: Record<string, string> }) {
  const materials = useCarMaterials(selections);

  return (
    <>
      {/* Lighting — premium showroom */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 12, 8]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={30}
        shadow-camera-near={0.1}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-6, 8, -4]} intensity={0.5} color="#c8d8f0" />
      <pointLight position={[-5, 3, 2]} intensity={0.35} color="#6688cc" />
      <pointLight position={[5, 3, -2]} intensity={0.25} color="#ccaa66" />
      <spotLight
        position={[0, 8, 0]}
        intensity={0.4}
        angle={0.6}
        penumbra={1}
        castShadow={false}
        color="#ffffff"
      />

      {/* HDR environment for realistic reflections */}
      <Environment preset="city" />

      {/* Contact shadow on ground */}
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.4}
        scale={14}
        blur={2.5}
        far={5}
      />

      {/* Showroom floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.005, 0]} receiveShadow>
        <circleGeometry args={[25, 64]} />
        <meshStandardMaterial
          color="#e2e2e2"
          metalness={0.1}
          roughness={0.75}
        />
      </mesh>

      {/* Car */}
      <Suspense fallback={<LoadingSpinner />}>
        <CarModel materials={materials} />
      </Suspense>

      {/* Orbit controls */}
      <OrbitControls
        target={[0, 0.5, 0]}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI * 0.85}
        minDistance={0.5}
        maxDistance={10}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.7}
        zoomSpeed={0.8}
      />
    </>
  );
}

function WebGLFallback({ model }: { model: ConfiguratorModel }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111]">
      <img
        src={model.image}
        alt={model.name}
        className="w-[65%] max-w-[750px] object-contain"
      />
      <div className="mt-6 px-5 py-3 bg-white/[0.05] rounded-xl text-center">
        <p className="font-configurator text-[13px] font-semibold text-white/60">
          3D view unavailable
        </p>
        <p className="font-configurator text-[11px] text-white/35 mt-1">
          Enable hardware acceleration in your browser settings for the full 3D experience
        </p>
      </div>
    </div>
  );
}

const ConfiguratorCanvas = ({ model, sidebarOpen, selections }: Props) => {
  const { t } = useTranslation();
  // Since this component is dynamically imported with ssr: false,
  // we can safely check WebGL synchronously in the browser
  const webglAvailable = typeof window !== 'undefined' ? detectWebGL() : false;

  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        paddingRight: sidebarOpen ? '32%' : '0%',
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {webglAvailable ? (
        <>
          <Canvas
            shadows
            camera={{
              position: [3.5, 1.8, 4],
              fov: 40,
              near: 0.1,
              far: 100,
            }}
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.0,
              preserveDrawingBuffer: true,
            }}
            style={{ background: 'linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 40%, #dcdcdc 100%)' }}
          >
            <SceneContent selections={selections} />
          </Canvas>

          {/* Hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none select-none"
          >
            <div className="px-4 py-1.5 bg-black/[0.04] backdrop-blur-sm rounded-full">
              <span className="font-configurator text-[10px] font-medium tracking-[0.15em] uppercase text-black/25">
                {t('config.dragHint')}
              </span>
            </div>
          </motion.div>
        </>
      ) : (
        <WebGLFallback model={model} />
      )}
    </motion.div>
  );
};

export default ConfiguratorCanvas;
