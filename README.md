# Aura & Aisle — Event Planner Website

A premium, cinematic website for luxury event planners and wedding management brands.

## Tech Stack

- **Framework**: React Router v7 (File-based routing)
- **Styling**: TailwindCSS v4
- **Motion**: Framer Motion
- **TypeScript**: Full type safety
- **Deployment**: Vercel (recommended)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── sections/     # Page sections (Hero, Services, Process, etc.)
│   ├── site/         # Layout components (Nav, Footer, WhatsAppPill)
│   └── motion/       # Animation components (FadeUp, RevealClip)
├── routes/           # File-based routing (index.tsx, about.tsx, etc.)
├── lib/              # Utilities and data
└── assets/           # Images and static assets
```

## Key Features

- **Cinematic Motion**: Parallax scrolling, reveal animations, smooth transitions
- **Responsive Design**: Mobile-first approach with stunning mobile experience
- **Custom Components**: Apple-style dropdowns, floating WhatsApp CTA
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Performance**: Optimized images, reduced motion support, smooth scrolling

## Customization

### Brand Colors
- `ivory` — Primary light
- `charcoal` — Primary dark
- `champagne` — Accent

### Typography
- `font-display` — Display headings (Geist/Inter)
- `font-mono` — Small labels and metadata

### Contact Details
Update in these files:
- `src/components/site/Footer.tsx`
- `src/components/site/WhatsAppPill.tsx`
- `src/routes/inquiry.tsx`

## Deployment

```bash
# Deploy to Vercel
vercel

# Or build and deploy manually
npm run build
# Deploy dist/ folder to your hosting provider
```

## Notes

- Images are in `src/assets/` and imported directly
- Form shows submission state but requires backend integration for actual email sending
- All animations respect `prefers-reduced-motion`
- Mobile hamburger menu with overlay navigation
- Instagram integration via image grid strip
