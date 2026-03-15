'use client';

/// <reference types="@react-three/fiber" />
import { useEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import type { CarMaterialSet } from './CarMaterials';

interface Props {
  materials: CarMaterialSet;
}

const CarModel = ({ materials }: Props) => {
  const { scene } = useGLTF('/models/car.glb');
  const groupRef = useRef<THREE.Group>(null);

  // Compute bounding box once to place car on ground
  const yOffset = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    return -box.min.y;
  }, [scene]);

  // Apply materials to ALL meshes by traversing the scene
  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const name = child.name.toLowerCase();

      // Body paint
      if (name === 'body') {
        child.material = materials.body;
      }

      // Glass / windows
      if (name === 'glass') {
        child.material = materials.glass;
      }

      // Rims (all four)
      if (name.startsWith('rim_') || name === 'rim') {
        child.material = materials.rim;
      }

      // Trim / dashboard / carbon fibre
      if (
        name === 'trim' ||
        name.includes('carbon') ||
        name.includes('dashboard') ||
        name.includes('trim')
      ) {
        child.material = materials.dashboard;
      }

      // Wheels / tires — dark rubber material
      if (name.startsWith('wheel_') || name === 'wheel' || name.includes('tire') || name.includes('tyre')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#1a1a1a'),
          metalness: 0.0,
          roughness: 0.9,
        });
      }

      // Leather / upholstery / seats
      if (
        name.includes('leather') ||
        name.includes('seat') ||
        name.includes('upholster') ||
        name.includes('interior')
      ) {
        child.material = materials.leather;
      }

      // Steering wheel
      if (name.includes('steering') || name.includes('steer')) {
        child.material = materials.leather;
      }

      // Brake calipers
      if (name.includes('brake') || name.includes('caliper')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(materials.caliperColor),
          metalness: 0.6,
          roughness: 0.3,
        });
      }

      // Interior accent lighting
      if (name.includes('interior_light') || name.includes('ambient') || name.includes('light_strip')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(materials.ambientColor),
          emissive: new THREE.Color(materials.ambientColor),
          emissiveIntensity: 0.8,
          metalness: 0.0,
          roughness: 0.5,
        });
      }

      // Enable shadows on all meshes
      child.castShadow = true;
      child.receiveShadow = true;
    });
  }, [scene, materials]);

  return (
    <group ref={groupRef} position={[0, yOffset, 0]}>
      <primitive object={scene} />
    </group>
  );
};

export default CarModel;
