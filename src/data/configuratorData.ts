const modelRImg = "/assets/model-r.webp";
const modelFImg = "/assets/slide-model-f.png";
const luminaImg = "/assets/revuelto.jpg";
const cyberImg = "/assets/temerario.jpg";

// ─── Types ───────────────────────────────────────────────

export interface ConfigOption {
  id: string;
  name: string;
  description: string;
  color?: string;
  gradient?: string;
  price: string;
  numericPrice: number;
}

export interface ConfigCategory {
  id: string;
  title: string;
  subtitle: string;
  options: ConfigOption[];
}

export interface ConfigTab {
  id: 'exterior' | 'interior' | 'performance';
  label: string;
  categories: ConfigCategory[];
}

export interface ModelStats {
  length: string;
  beam: string;
  draft: string;
  seating: string;
  brand: string;
  engine: string;
  cert: string;
}

export interface ConfiguratorModel {
  id: string;
  name: string;
  letter: string;
  slug: string;
  desc: string;
  image: string;
  activeColor: string;
  logoImage?: string;
  stats: ModelStats;
  tabs: ConfigTab[];
  comingSoon?: boolean;
}

// ─── EXTERIOR Categories ─────────────────────────────────

const HULL_COLOR: ConfigCategory = {
  id: 'hull-color',
  title: 'HULL COLOR',
  subtitle: 'Choose the exterior hull color',
  options: [
    { id: 'arctic-white', name: 'Arctic White', description: 'Pure white gelcoat with ceramic-grade UV protection', color: '#F8F9FA', gradient: 'linear-gradient(130.6deg, #E8E8E8 20%, #FFFFFF 50%, #D5D5D5 83%)', price: 'Included', numericPrice: 0 },
    { id: 'deep-ocean-blue', name: 'Deep Ocean Blue', description: 'Rich marine blue with metallic depth', color: '#1B4F72', gradient: 'linear-gradient(130.6deg, #154360 20%, #2471A3 50%, #1A5276 83%)', price: 'Included', numericPrice: 0 },
    { id: 'midnight-black', name: 'Midnight Black', description: 'Deep black with satin marine finish', color: '#1C1C1C', gradient: 'linear-gradient(130.6deg, #0A0A0A 20%, #3D3D3D 50%, #000000 83%)', price: 'Included', numericPrice: 0 },
    { id: 'racing-red', name: 'Racing Red', description: 'Bold racing red with high-gloss marine gelcoat', color: '#C0392B', gradient: 'linear-gradient(130.6deg, #A93226 20%, #E74C3C 50%, #922B21 83%)', price: '+ $800', numericPrice: 800 },
    { id: 'edrive-teal', name: 'eDrive Teal', description: 'Signature eDrive teal — exclusive brand color', color: '#81D8D0', gradient: 'linear-gradient(130.6deg, #6EC2BA 20%, #9DE8E0 50%, #5BB0A8 83%)', price: '+ $1,200', numericPrice: 1200 },
    { id: 'gunmetal-grey', name: 'Gunmetal Grey', description: 'Refined grey with silver metallic effect', color: '#5D6D7E', gradient: 'linear-gradient(130.6deg, #4D5D6E 20%, #7F8C9A 50%, #3D4D5E 83%)', price: 'Included', numericPrice: 0 },
    { id: 'sand-gold', name: 'Sand Gold', description: 'Warm gold with pearl shimmer finish', color: '#D4AC0D', gradient: 'linear-gradient(130.6deg, #B7950B 20%, #F1C40F 50%, #9A7D0A 83%)', price: '+ $1,500', numericPrice: 1500 },
    { id: 'carbon-black', name: 'Carbon Black', description: 'Dark carbon weave effect with matte clearcoat', color: '#2C3E50', gradient: 'linear-gradient(130.6deg, #1C2E40 20%, #34495E 50%, #1A252F 83%)', price: '+ $2,000', numericPrice: 2000 },
  ],
};

const HULL_GRAPHICS: ConfigCategory = {
  id: 'hull-graphics',
  title: 'HULL GRAPHICS',
  subtitle: 'Choose graphic design package',
  options: [
    { id: 'clean', name: 'Clean', description: 'Single-tone hull with no additional graphics', price: 'Included', numericPrice: 0 },
    { id: 'racing-stripe', name: 'Racing Stripe', description: 'Dual racing stripes along the hull centerline', price: '+ $1,800', numericPrice: 1800 },
    { id: 'custom-branding', name: 'Custom Branding', description: 'Your logo and branding applied to hull and interior', price: '+ $3,500', numericPrice: 3500 },
    { id: 'two-tone', name: 'Two-Tone', description: 'Dual-color hull split with contrasting accent line', price: '+ $2,500', numericPrice: 2500 },
  ],
};

const EXTERIOR_TRIM: ConfigCategory = {
  id: 'exterior-trim',
  title: 'EXTERIOR TRIM',
  subtitle: 'Select trim finish details',
  options: [
    { id: 'chrome', name: 'Chrome', description: 'Polished chrome marine-grade trim accents', price: 'Included', numericPrice: 0 },
    { id: 'brushed-titanium', name: 'Brushed Titanium', description: 'Satin-finish titanium-effect trim throughout', price: '+ $1,200', numericPrice: 1200 },
    { id: 'carbon-fiber-trim', name: 'Carbon Fiber', description: 'Exposed twill-weave carbon fiber trim elements', price: '+ $2,800', numericPrice: 2800 },
    { id: 'gloss-black', name: 'Gloss Black', description: 'High-gloss piano black trim finish', price: '+ $800', numericPrice: 800 },
  ],
};

// ─── INTERIOR Categories ─────────────────────────────────

const UPHOLSTERY: ConfigCategory = {
  id: 'upholstery',
  title: 'UPHOLSTERY',
  subtitle: 'Choose seat material and color',
  options: [
    { id: 'black-neoprene', name: 'Black Neoprene', description: 'Marine-grade neoprene, water-resistant and durable', color: '#1A1A1A', price: 'Included', numericPrice: 0 },
    { id: 'white-marine-leather', name: 'White Marine Leather', description: 'Premium UV-resistant marine leather with waterproof coating', color: '#F5F5F0', price: '+ $2,400', numericPrice: 2400 },
    { id: 'tan-nautical', name: 'Tan Nautical', description: 'Classic nautical tan leather with contrast stitching', color: '#C19A6B', price: '+ $2,400', numericPrice: 2400 },
    { id: 'red-sport', name: 'Red Sport', description: 'Bold red marine leather with diamond quilting', color: '#8B0000', price: '+ $2,800', numericPrice: 2800 },
    { id: 'two-tone-teal', name: 'Two-Tone Black/Teal', description: 'Black base with eDrive teal inserts and stitching', color: '#81D8D0', price: '+ $3,200', numericPrice: 3200 },
  ],
};

const DASHBOARD_TRIM: ConfigCategory = {
  id: 'dashboard-trim',
  title: 'DASHBOARD TRIM',
  subtitle: 'Customize the dashboard finish',
  options: [
    { id: 'piano-black', name: 'Piano Black', description: 'High-gloss lacquered black with UV marine coating', price: 'Included', numericPrice: 0 },
    { id: 'carbon-fiber-dash', name: 'Carbon Fiber', description: 'Exposed twill-weave carbon fiber dash panels', price: '+ $3,200', numericPrice: 3200 },
    { id: 'brushed-aluminum', name: 'Brushed Aluminum', description: 'Satin-finished aerospace-grade aluminum trim', price: '+ $2,000', numericPrice: 2000 },
    { id: 'teak-wood', name: 'Teak Wood', description: 'Genuine marine teak with natural grain and satin finish', price: '+ $4,500', numericPrice: 4500 },
  ],
};

const AMBIENT_LIGHTING: ConfigCategory = {
  id: 'ambient-lighting',
  title: 'AMBIENT LIGHTING',
  subtitle: 'Set the mood on water',
  options: [
    { id: 'arctic-white-light', name: 'Arctic White', description: 'Clean white LED ambient lighting throughout', color: '#FFFFFF', price: 'Included', numericPrice: 0 },
    { id: 'tiffany-teal-light', name: 'Tiffany Teal', description: 'eDrive signature teal accent glow', color: '#81D8D0', price: '+ $400', numericPrice: 400 },
    { id: 'ocean-blue-light', name: 'Ocean Blue', description: 'Deep ocean blue ambient lighting', color: '#2471A3', price: '+ $400', numericPrice: 400 },
    { id: 'sunset-orange-light', name: 'Sunset Orange', description: 'Warm sunset orange accent illumination', color: '#E67E22', price: '+ $400', numericPrice: 400 },
  ],
};

// ─── PERFORMANCE Categories ──────────────────────────────

const ENGINE: ConfigCategory = {
  id: 'engine',
  title: 'ENGINE',
  subtitle: 'Select your powertrain',
  options: [
    { id: 'yamaha-1900-200ps', name: 'Yamaha 1.9 — 200 PS', description: 'Proven Yamaha 1900cc marine engine. Reliable, efficient, ideal for leisure and commercial use.', price: 'Included', numericPrice: 0 },
    { id: 'yamaha-1800sc-250ps', name: 'Yamaha 1.8 Supercharger — 250 PS', description: 'Supercharged Yamaha 1800cc delivering 250PS. Maximum acceleration and top-end performance.', price: '+ $8,500', numericPrice: 8500 },
  ],
};

const MARINE_AUDIO: ConfigCategory = {
  id: 'marine-audio',
  title: 'MARINE AUDIO',
  subtitle: 'Premium sound on water',
  options: [
    { id: 'standard-4-speaker', name: 'Standard 4-Speaker', description: 'Marine-grade 4-speaker system with waterproof enclosures', price: 'Included', numericPrice: 0 },
    { id: 'premium-8-speaker', name: 'Premium 8-Speaker', description: '450W amplified system with 8 marine speakers and subwoofer', price: '+ $2,800', numericPrice: 2800 },
    { id: 'jl-audio-10-speaker', name: 'JL Audio M-Series 10-Speaker', description: '1,200W JL Audio marine reference system with 10 speakers', price: '+ $6,400', numericPrice: 6400 },
  ],
};

const SAFETY_PACKAGE: ConfigCategory = {
  id: 'safety-package',
  title: 'SAFETY PACKAGE',
  subtitle: 'Choose your safety tier',
  options: [
    { id: 'standard-safety', name: 'Standard', description: 'CE-compliant safety equipment: life jackets, fire extinguisher, bilge pump', price: 'Included', numericPrice: 0 },
    { id: 'enhanced-safety', name: 'Enhanced', description: 'Standard + first aid kit, GPS tracker, emergency beacon, upgraded bilge system', price: '+ $3,500', numericPrice: 3500 },
    { id: 'professional-safety', name: 'Professional', description: 'Enhanced + marine VHF radio, EPIRB, high-capacity bilge, commercial-grade safety kit', price: '+ $7,500', numericPrice: 7500 },
  ],
};

// ─── Tab Definitions ─────────────────────────────────────

const EXTERIOR_TAB: ConfigTab = {
  id: 'exterior',
  label: 'EXTERIOR',
  categories: [HULL_COLOR, HULL_GRAPHICS, EXTERIOR_TRIM],
};

const INTERIOR_TAB: ConfigTab = {
  id: 'interior',
  label: 'INTERIOR',
  categories: [UPHOLSTERY, DASHBOARD_TRIM, AMBIENT_LIGHTING],
};

const PERFORMANCE_TAB: ConfigTab = {
  id: 'performance',
  label: 'PERFORMANCE',
  categories: [ENGINE, MARINE_AUDIO, SAFETY_PACKAGE],
};

// ─── Models ──────────────────────────────────────────────

export const CONFIGURATOR_MODELS: ConfiguratorModel[] = [
  {
    id: 'MODEL R',
    name: 'THE MODEL R',
    letter: 'R',
    logoImage: '/logo-r.png',
    slug: 'model-r',
    desc: 'Refined performance. Designed for premium leisure and commercial use, compliant with CE standards for global operation.',
    image: modelRImg,
    activeColor: '#F6C974',
    stats: { length: '5.22 m', beam: '2.06 m', draft: '1.82 m', seating: '4–5 persons', brand: 'Yamaha', engine: '1900 cc', cert: 'CE Certified' },
    tabs: [EXTERIOR_TAB, INTERIOR_TAB, PERFORMANCE_TAB],
  },
  {
    id: 'MODEL F',
    name: 'THE MODEL F',
    letter: 'F',
    logoImage: '/logo-f.png',
    slug: 'model-f',
    desc: 'Pure power on water. A high-performance JetCar engineered for speed, control, and CE-compliant commercial use.',
    image: modelFImg,
    activeColor: '#FFFFFF',
    stats: { length: '5.22 m', beam: '2.06 m', draft: '1.83 m', seating: '2 persons', brand: 'Yamaha', engine: '1900 cc', cert: 'CE Certified' },
    tabs: [EXTERIOR_TAB, INTERIOR_TAB, PERFORMANCE_TAB],
  },
  {
    id: 'LUMINA',
    name: 'THE LUMINA',
    letter: 'L',
    slug: 'lumina',
    desc: 'Innovation in motion. The world\'s first Jet Karting — compact, agile, and built for racing on water.',
    image: luminaImg,
    activeColor: '#81D8D0',
    stats: { length: '3.40 m', beam: '2.15 m', draft: 'N/A', seating: '2 persons', brand: 'Tohatsu', engine: 'Outboard', cert: 'CE Certified' },
    tabs: [EXTERIOR_TAB, INTERIOR_TAB, PERFORMANCE_TAB],
    comingSoon: true,
  },
  {
    id: 'CYBERMARINE',
    name: 'THE CYBERMARINE',
    letter: 'C',
    slug: 'cybermarine',
    desc: 'The future, reimagined. eDrive\'s first Speed Boat — 7 meters of commanding presence on water.',
    image: cyberImg,
    activeColor: '#FFFFFF',
    stats: { length: '7.00 m', beam: '2.70 m', draft: '2.40 m', seating: '7 persons', brand: 'Outboard', engine: '200 HP', cert: 'Planned CE' },
    tabs: [EXTERIOR_TAB, INTERIOR_TAB, PERFORMANCE_TAB],
    comingSoon: true,
  },
];

// ─── Default Selections ─────────────────────────────────

export const DEFAULT_SELECTIONS: Record<string, string> = {
  'hull-color': 'arctic-white',
  'hull-graphics': 'clean',
  'exterior-trim': 'chrome',
  'upholstery': 'black-neoprene',
  'dashboard-trim': 'piano-black',
  'ambient-lighting': 'arctic-white-light',
  'engine': 'yamaha-1900-200ps',
  'marine-audio': 'standard-4-speaker',
  'safety-package': 'standard-safety',
};
