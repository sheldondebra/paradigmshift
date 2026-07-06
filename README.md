# Paradigm Shift Website

Professional Next.js website for [Paradigm Shift](https://paradigmshiftgh.com) — a Ghana-based non-profit empowering communities through education, mentorship, infrastructure, and health programs.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Inter** (Google Fonts)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, focus areas, impact stats, gallery |
| `/about` | Organization story, vision & mission |
| `/news` | News & impact stories |
| `/get-involved` | Volunteer, donate, partner options |
| `/contact` | Contact form and details |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) for optimal Next.js hosting:

```bash
npx vercel
```

## Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `ps-navy` | `#0a192f` | Primary dark |
| `ps-gold` | `#d4af37` | Accent / CTA |
| `ps-green` | `#2d5a27` | Secondary accent |

## Project Structure

```
src/
├── app/           # Pages and layout
├── components/    # Header, Footer, sections, forms
└── lib/           # Content and image config
public/
└── images/        # Event and brand photography
```
