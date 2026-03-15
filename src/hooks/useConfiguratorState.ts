import { useReducer, useMemo, useEffect, useRef } from 'react';
import { CONFIGURATOR_MODELS, DEFAULT_SELECTIONS } from '@/data/configuratorData';

export type Phase = 'landing' | 'canvas';
export type TabId = 'exterior' | 'interior' | 'performance';

export interface ConfiguratorState {
  phase: Phase;
  selectedModelIndex: number;
  sidebarOpen: boolean;
  activeTab: TabId;
  activeCategory: string | null;
  activeAngle: string;
  selections: Record<string, string>;
  touched: string[];
  showDownloadModal: boolean;
}

const ALL_CATEGORY_IDS = [
  'hull-color', 'hull-graphics', 'exterior-trim',
  'upholstery', 'dashboard-trim', 'ambient-lighting',
  'engine', 'marine-audio', 'safety-package',
];

const STORAGE_KEY = 'edrive-configurator-state';

interface PersistedState {
  selectedModelIndex: number;
  selections: Record<string, string>;
  touched: string[];
  activeTab: TabId;
}

export type ConfiguratorAction =
  | { type: 'RESTORE_PERSISTED'; persisted: PersistedState }
  | { type: 'SELECT_MODEL'; index: number }
  | { type: 'START_CONFIGURATION' }
  | { type: 'BACK_TO_LANDING' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }
  | { type: 'SET_TAB'; tab: TabId }
  | { type: 'SELECT_CATEGORY'; categoryId: string }
  | { type: 'BACK_TO_CATEGORIES' }
  | { type: 'SELECT_OPTION'; categoryId: string; optionId: string }
  | { type: 'SET_ANGLE'; angle: string }
  | { type: 'RESET_ALL' }
  | { type: 'SHOW_DOWNLOAD' }
  | { type: 'HIDE_DOWNLOAD' };

function loadPersistedState(): PersistedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedState;
    // Validate that selections reference known categories
    const validSelections: Record<string, string> = {};
    for (const [key, value] of Object.entries(parsed.selections)) {
      if (ALL_CATEGORY_IDS.includes(key) && typeof value === 'string') {
        validSelections[key] = value;
      }
    }
    const validTouched = (parsed.touched || []).filter((t: string) => ALL_CATEGORY_IDS.includes(t));
    const validTab = ['exterior', 'interior', 'performance'].includes(parsed.activeTab) ? parsed.activeTab : 'exterior';
    const validModelIndex = typeof parsed.selectedModelIndex === 'number' && parsed.selectedModelIndex >= 0 && parsed.selectedModelIndex < CONFIGURATOR_MODELS.length
      ? parsed.selectedModelIndex : 0;
    return {
      selectedModelIndex: validModelIndex,
      selections: { ...DEFAULT_SELECTIONS, ...validSelections },
      touched: validTouched,
      activeTab: validTab as TabId,
    };
  } catch {
    return null;
  }
}

function persistState(state: ConfiguratorState) {
  try {
    const data: PersistedState = {
      selectedModelIndex: state.selectedModelIndex,
      selections: state.selections,
      touched: state.touched,
      activeTab: state.activeTab,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Private browsing or quota exceeded — silently fail
  }
}

function clearPersistedState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Silently fail
  }
}

function createInitialState(modelIndex: number): ConfiguratorState {
  // Don't read localStorage here — it causes hydration mismatches.
  // Persisted state is restored in useEffect after mount.
  return {
    phase: 'landing',
    selectedModelIndex: modelIndex,
    sidebarOpen: false,
    activeTab: 'exterior',
    activeCategory: null,
    activeAngle: 'side',
    selections: { ...DEFAULT_SELECTIONS },
    touched: [],
    showDownloadModal: false,
  };
}

function reducer(state: ConfiguratorState, action: ConfiguratorAction): ConfiguratorState {
  switch (action.type) {
    case 'RESTORE_PERSISTED':
      return {
        ...state,
        selectedModelIndex: action.persisted.selectedModelIndex,
        selections: action.persisted.selections,
        touched: action.persisted.touched,
        activeTab: action.persisted.activeTab,
      };

    case 'SELECT_MODEL':
      return { ...state, selectedModelIndex: action.index };

    case 'START_CONFIGURATION':
      return { ...state, phase: 'canvas', sidebarOpen: true };

    case 'BACK_TO_LANDING':
      return {
        ...state,
        phase: 'landing',
        sidebarOpen: false,
        activeCategory: null,
        activeTab: 'exterior',
      };

    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
        activeCategory: state.sidebarOpen ? null : state.activeCategory,
      };

    case 'OPEN_SIDEBAR':
      return { ...state, sidebarOpen: true };

    case 'CLOSE_SIDEBAR':
      return { ...state, sidebarOpen: false, activeCategory: null };

    case 'SET_TAB':
      return { ...state, activeTab: action.tab, activeCategory: null };

    case 'SELECT_CATEGORY':
      return { ...state, activeCategory: action.categoryId };

    case 'BACK_TO_CATEGORIES':
      return { ...state, activeCategory: null };

    case 'SELECT_OPTION': {
      const newTouched = state.touched.includes(action.categoryId)
        ? state.touched
        : [...state.touched, action.categoryId];
      return {
        ...state,
        selections: { ...state.selections, [action.categoryId]: action.optionId },
        touched: newTouched,
      };
    }

    case 'SET_ANGLE':
      return { ...state, activeAngle: action.angle };

    case 'RESET_ALL':
      clearPersistedState();
      return {
        ...state,
        selections: { ...DEFAULT_SELECTIONS },
        activeCategory: null,
        activeTab: 'exterior',
        activeAngle: 'side',
        touched: [],
      };

    case 'SHOW_DOWNLOAD':
      return { ...state, showDownloadModal: true };

    case 'HIDE_DOWNLOAD':
      return { ...state, showDownloadModal: false };

    default:
      return state;
  }
}

export const ALL_CATEGORIES = ALL_CATEGORY_IDS;

export function useConfiguratorState(modelSlug?: string) {
  const initialModelIndex = useMemo(() => {
    if (!modelSlug) return 0;
    const idx = CONFIGURATOR_MODELS.findIndex((m) => m.slug === modelSlug);
    return idx >= 0 ? idx : 0;
  }, [modelSlug]);

  const [state, dispatch] = useReducer(reducer, initialModelIndex, createInitialState);
  const model = CONFIGURATOR_MODELS[state.selectedModelIndex];

  // Restore persisted state from localStorage after mount (avoids hydration mismatch)
  const hasRestored = useRef(false);
  useEffect(() => {
    if (hasRestored.current) return;
    hasRestored.current = true;
    const persisted = loadPersistedState();
    if (persisted) {
      dispatch({ type: 'RESTORE_PERSISTED', persisted });
    }
  }, []);

  // Persist state changes (debounced)
  const persistTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    clearTimeout(persistTimer.current);
    persistTimer.current = setTimeout(() => {
      persistState(state);
    }, 300);
    return () => clearTimeout(persistTimer.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally only persist on specific field changes
  }, [state.selections, state.touched, state.selectedModelIndex, state.activeTab]);

  return { state, dispatch, model };
}
