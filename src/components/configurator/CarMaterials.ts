'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

// ─── Hull color map (option ID → hex) — from configuratorData hull-color category
const HULL_COLORS: Record<string, string> = {
  'arctic-white': '#F8F9FA',
  'deep-ocean-blue': '#1B4F72',
  'midnight-black': '#1C1C1C',
  'racing-red': '#C0392B',
  'edrive-teal': '#81D8D0',
  'gunmetal-grey': '#5D6D7E',
  'sand-gold': '#D4AC0D',
  'carbon-black': '#2C3E50',
};

// ─── Exterior trim finish map — from configuratorData exterior-trim category
const TRIM_FINISHES: Record<string, { color: string; metalness: number; roughness: number }> = {
  'chrome': { color: '#C0C0C0', metalness: 1, roughness: 0.15 },
  'brushed-titanium': { color: '#8B8682', metalness: 0.95, roughness: 0.3 },
  'carbon-fiber-trim': { color: '#2C2C2C', metalness: 0.3, roughness: 0.5 },
  'gloss-black': { color: '#0a0a0a', metalness: 0.5, roughness: 0.05 },
};

// ─── Upholstery color map — from configuratorData upholstery category
const UPHOLSTERY_COLORS: Record<string, string> = {
  'black-neoprene': '#1A1A1A',
  'white-marine-leather': '#F5F5F0',
  'tan-nautical': '#C19A6B',
  'red-sport': '#8B0000',
  'two-tone-teal': '#81D8D0',
};

// ─── Dashboard trim map — from configuratorData dashboard-trim category
const DASHBOARD_FINISHES: Record<string, { color: string; metalness: number; roughness: number }> = {
  'piano-black': { color: '#0a0a0a', metalness: 0.5, roughness: 0.05 },
  'carbon-fiber-dash': { color: '#1a1a1a', metalness: 0.3, roughness: 0.4 },
  'brushed-aluminum': { color: '#B0B0B0', metalness: 0.95, roughness: 0.35 },
  'teak-wood': { color: '#8B6914', metalness: 0.1, roughness: 0.7 },
};

// ─── Ambient lighting color map — from configuratorData ambient-lighting category
const AMBIENT_COLORS: Record<string, string> = {
  'arctic-white-light': '#ffffff',
  'tiffany-teal-light': '#81D8D0',
  'ocean-blue-light': '#2471A3',
  'sunset-orange-light': '#E67E22',
};

export interface CarMaterialSet {
  body: THREE.MeshPhysicalMaterial;
  glass: THREE.MeshPhysicalMaterial;
  rim: THREE.MeshStandardMaterial;
  leather: THREE.MeshStandardMaterial;
  dashboard: THREE.MeshStandardMaterial;
  ambientColor: string;
  caliperColor: string;
}

export function useCarMaterials(selections: Record<string, string>): CarMaterialSet {
  const hullColorId = selections['hull-color'] || 'arctic-white';
  const trimId = selections['exterior-trim'] || 'chrome';
  const upholsteryId = selections['upholstery'] || 'black-neoprene';
  const dashboardId = selections['dashboard-trim'] || 'piano-black';
  const ambientId = selections['ambient-lighting'] || 'arctic-white-light';

  const body = useMemo(() => {
    const color = HULL_COLORS[hullColorId] || '#F8F9FA';
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color),
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      envMapIntensity: 1.0,
    });
  }, [hullColorId]);

  const glass = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#888899'),
      metalness: 0.1,
      roughness: 0.0,
      transmission: 0.7,
      transparent: true,
      opacity: 0.3,
      envMapIntensity: 0.5,
      side: THREE.DoubleSide,
    });
  }, []);

  const rim = useMemo(() => {
    const finish = TRIM_FINISHES[trimId] || TRIM_FINISHES['chrome'];
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(finish.color),
      metalness: finish.metalness,
      roughness: finish.roughness,
      envMapIntensity: 1.0,
    });
  }, [trimId]);

  const leather = useMemo(() => {
    const color = UPHOLSTERY_COLORS[upholsteryId] || '#1A1A1A';
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness: 0.0,
      roughness: 0.7,
    });
  }, [upholsteryId]);

  const dashboard = useMemo(() => {
    const finish = DASHBOARD_FINISHES[dashboardId] || DASHBOARD_FINISHES['piano-black'];
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(finish.color),
      metalness: finish.metalness,
      roughness: finish.roughness,
    });
  }, [dashboardId]);

  const ambientColor = AMBIENT_COLORS[ambientId] || '#ffffff';
  const caliperColor = '#333333';

  return { body, glass, rim, leather, dashboard, ambientColor, caliperColor };
}
