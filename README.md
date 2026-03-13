# eDrive JetCar

Official website for **eDrive JetCar Manufacturing L.L.C.** — electric jet-powered watercraft built for luxury resorts, private owners, and investors.

**Live:** [drive-virid-eight.vercel.app](https://drive-virid-eight.vercel.app)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Animation:** Framer Motion
- **3D Configurator:** React Three Fiber + Drei
- **i18n:** i18next (EN, AR, DE, ES, FR, EL, FIL, RU, ZH)
- **Smooth Scroll:** Lenis

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── configurator/       # 3D car configurator components
│   ├── pages/              # Page-level components
│   │   ├── company/        # Company sub-pages (profile, history, careers, etc.)
│   │   └── business/       # Business pages (distributor, investors)
│   ├── ui/                 # Reusable UI primitives (shadcn/ui)
│   ├── NavBar.tsx          # Global navigation
│   ├── HeroSectionV2.tsx   # Landing hero with video
│   ├── ModelsSection.tsx   # Model showcase carousel
│   ├── NewsSection.tsx     # News/events section
│   ├── BlogsSection.tsx    # Blog articles section
│   └── FooterSection.tsx   # Site footer
├── data/                   # Configurator data & model specs
├── hooks/                  # Custom React hooks
├── i18n/                   # Translations (9 languages)
└── lib/                    # Utilities
public/
├── assets/                 # Images, media
│   ├── config/             # Configurator model images
│   └── Team/               # Team member photos
└── models/                 # 3D GLB models (git-ignored)
```

## Key Features

- **3D Configurator** — Interactive car builder with color, wheel, and accessory options
- **Multi-language** — 9 languages including RTL Arabic support
- **Smooth Transitions** — Page transitions and scroll animations via Framer Motion + Lenis
- **Gallery** — Filterable image gallery with lightbox
- **Responsive** — Mobile-first design across all pages

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` trigger automatic deployments.

```bash
npm run build   # Production build
npm run start   # Start production server
```

## License

Proprietary. All rights reserved by eDrive JetCar Manufacturing L.L.C.
