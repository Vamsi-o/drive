# Changes & Improvements

All changes implemented during the codebase audit and feature enhancement session.

---

## Configurator Page Fixes

### Mobile Layout Overlap Fix
- **Files**: `src/components/configurator/ConfiguratorLanding.tsx`
- Replaced scattered absolute positioning with a proper two-column flex layout (text left, car image right on desktop; stacked on mobile)
- MODEL letter, description, and selector dots now flow naturally without overlapping the car image
- Description text uses `max-w-[360px]` instead of the cramped `max-w-[280px]`
- Bottom bar (color swatches + START CONFIGURATION button) stacks vertically on small screens

### Hydration Mismatch Fix (Configurator State)
- **Files**: `src/hooks/useConfiguratorState.ts`
- Removed `localStorage` reads from the `useReducer` initializer — this caused server/client state divergence
- Added `RESTORE_PERSISTED` action and a post-mount `useEffect` to restore saved state safely after hydration
- Server and client now always start with the same default state

### Error Boundary
- **Files**: `src/app/configurator/page.tsx`, `src/app/configurator/[modelSlug]/page.tsx`
- Wrapped `ConfiguratorFullPage` with `ConfiguratorErrorBoundary` on both routes
- Runtime errors now show a recovery UI instead of crashing the page

### Model Logos in Configurator
- **Files**: `src/data/configuratorData.ts`, `src/components/configurator/ConfiguratorLanding.tsx`
- Added `logoImage` field to `ConfiguratorModel` interface
- Model R and Model F now display their logo images (same as the landing page Models section) instead of plain letters

### 3D Canvas — Mobile & Missing GLB Handling
- **Files**: `src/components/configurator/ConfiguratorCanvas.tsx`, `src/components/configurator/CarModel.tsx`
- On mobile devices: skips 3D entirely, shows the static car image instead (better performance, no WebGL overhead)
- Added a `HEAD` request check for `/models/car.glb` before loading the 3D model — if the file is missing (e.g. not deployed), gracefully falls back to the image view instead of crashing
- Removed `useGLTF.preload()` which eagerly fetched the GLB at module import time before any checks could run
- `CarModel` is now dynamically imported only after confirming the GLB file exists

---

## NavBar Enhancements

### Transparent NavBar on Hero Section
- **Files**: `src/components/NavBar.tsx`, `src/components/pages/Index.tsx`
- Added `transparentOnHero` prop to NavBar (defaults to `false`)
- On the home page, the navbar is fully transparent over the hero section and fades to `bg-black/60 backdrop-blur-md` once the user scrolls past 15% of viewport height
- All other pages retain the dark background at all times

### Collapsible Language Selector
- **Files**: `src/components/NavBar.tsx`
- The "LANGUAGES" label with dropdown arrow is now a functional toggle button
- Languages are hidden by default; clicking expands/collapses them with a smooth height + opacity animation
- Arrow rotates 180 degrees to indicate open/close state

### Text Size Controls
- **Files**: `src/components/NavBar.tsx`
- The `-` and `+` buttons now adjust the document's root font size in 10% increments (range: 80%–150%)
- Current scale shown as a percentage label next to "TEXT SIZE"
- Preference persisted to `localStorage` and restored on page load
- Buttons show a disabled state at min/max limits

### WhatsApp URL Consistency
- **Files**: `src/components/NavBar.tsx`
- Changed NavBar's WhatsApp link from `wa.me/971553949955` to `wa.me/message/3DYTH4POQLBFD1` to match WhatsAppButton and SocialSidebar

---

## i18n / Hydration Fixes

### Eliminated Hydration Mismatch for All Languages
- **Files**: `src/i18n/index.ts`, `src/components/Providers.tsx`
- Removed `i18next-browser-languagedetector` — it read `localStorage` during SSR init, causing server (English) vs client (saved language) mismatches
- i18n always initializes with `lng: 'en'` so server and client first render match
- Added a safety reset: if the i18n singleton retains a non-English language from a previous render cycle (HMR, module caching), it's forced back to `'en'` before hydration
- `Providers.tsx` restores the saved language from `localStorage` in `useEffect` after hydration completes
- Language preference saved under `i18nextLng` key in localStorage

### Missing Blog Translations
- **Files**: `src/i18n/locales/{ar,de,el,es,fil,fr,ru,zh}.json`
- Added the `"blogs"` translation section (title, subtitle, readMore, articleNotFound, backToBlogs) to all 8 non-English locale files
- Blog pages now display properly translated text in all languages

---

## RTL (Arabic) Support

### Social Sidebar RTL
- **Files**: `src/components/SocialSidebar.tsx`
- Uses a `MutationObserver` on `document.documentElement` to watch the `dir` attribute
- When Arabic (`dir="rtl"`) is active, the sidebar moves from `right-6` to `left-6`

### WhatsApp Button RTL
- **Files**: `src/components/WhatsAppButton.tsx`
- Same `MutationObserver` pattern as SocialSidebar
- Button flips from `right-6` to `left-6` in RTL mode

---

## ModelsSection Fixes

### Arrow Buttons Not Working
- **Files**: `src/components/ModelsSection.tsx`
- **Root cause**: The entire `<section>` had `onPointerDown` with `setPointerCapture()`, which stole pointer events from all child interactive elements (arrows, dots, links). The `click` event on buttons never fired.
- Moved pointer/swipe handlers to the car carousel `div` only — buttons, dots, and links are no longer intercepted
- Removed `setPointerCapture()` entirely — drag detection works fine without it

### Removed Auto-Scroll
- **Files**: `src/components/ModelsSection.tsx`
- Removed the `setInterval` auto-play timer and all related `pauseAutoPlay` logic
- Models only change on user interaction (arrows, dots, swipe, or clicking adjacent cars)

### Stale Closure Fix
- **Files**: `src/components/ModelsSection.tsx`
- Wrapped `goPrev` and `goNext` in `useCallback` with `[count]` dependency
- Fixed missing dependencies in `handlePointerMove`, `onArrowPrev`, `onArrowNext` callbacks

### Excessive Gap Fix
- **Files**: `src/components/ModelsSection.tsx`
- Changed `gap-80` (320px) to responsive `gap-10 md:gap-20 lg:gap-40`

### Hexagonal Arrow Button Fix
- Moved `clipPath` from the `<button>` element to child `div` elements
- Button retains its full rectangular click area while children render the hexagonal visual

---

## Social Sidebar Visibility Fix

### News Section Detection
- **Files**: `src/components/NewsSection.tsx`
- Added `data-theme="light"` to the News section's `<section>` tag
- The SocialSidebar detects light sections via `querySelectorAll('[data-theme="light"]')` and switches icons from white to dark — without this attribute, white icons were invisible on the white News background

---

## Font System Fix

### Tailwind Font Family Mismatch
- **Files**: `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/globals.css`
- `font-heading`, `font-body`, and `font-configurator` Tailwind classes all pointed to Playfair Display
- Fixed: `font-heading` → `var(--font-heading)` (Roboto Condensed), `font-body` → `var(--font-body)` (Inter)
- Added `Roboto_Condensed` and `Inter` Google Font imports in `layout.tsx` with CSS variable bindings
- Updated `globals.css` to reference the Next.js font CSS variables

---

## Bug Fixes (Codebase Audit)

### use-toast.ts — Infinite Listener Registration
- **Files**: `src/hooks/use-toast.ts`
- Changed `useEffect` dependency from `[state]` to `[]` — every state change was re-registering the listener, causing duplicates

### Unused Variable
- **Files**: `src/components/BlogsSection.tsx`
- Removed unused `heroImg` variable (was causing a build warning)

### Form Submission TODOs
- **Files**: `src/components/pages/business/BecomeDistributor.tsx`, `src/components/pages/business/Investors.tsx`
- Added `console.warn` and TODO comments to make the missing form submission explicit

---

## SEO & Loading Improvements

### Page Metadata
- **Files**: `src/app/{blogs,models,news,team,gallery}/page.tsx`
- Added `metadata` exports with title and description to 5 pages
- Pages now render as "Blog | eDrive JetCar", "Models | eDrive JetCar", etc.

### Loading States for Dynamic Routes
- **Files**: `src/app/{blogs/[slug],models/[slug],news/[slug],configurator/[modelSlug]}/loading.tsx`
- Added `loading.tsx` with a spinner for all 4 dynamic routes
- Users see a loading indicator instead of a blank screen while the page loads

---

## Files Changed Summary

| Category | Files Modified | Files Created |
|----------|---------------|---------------|
| Configurator | 5 | 0 |
| NavBar | 1 | 0 |
| i18n | 10 | 0 |
| Components | 7 | 0 |
| Config/Styles | 3 | 0 |
| SEO/Loading | 5 | 4 |
| **Total** | **31** | **4** |
