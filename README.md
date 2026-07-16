# APEX Detailing

A production-quality marketing landing page for a fictional premium auto detailing and ceramic coating studio. It is built as a portfolio piece with a restrained visual system, reusable components, responsive layouts, and accessible interaction details.

**Live demo:** _Add your Vercel URL here_

## Stack

- Next.js 15 with the App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS 3
- Lucide React icons
- `next/image` with optimized Unsplash imagery

## Highlights

- Responsive sticky navigation with an accessible mobile menu
- Shared `Button` component with primary, secondary, and ghost variants
- Reusable `Section`, `Card`, and `PricingCard` primitives
- Responsive service, gallery, pricing, and contact sections
- Semantic landmarks, descriptive image text, keyboard support, and reduced-motion handling
- Static output path with no runtime services or environment variables required

Every component and layout in this project was written from scratch. No template, UI kit, page builder, or generated component library was used.

## Run locally

Use Node.js 20.9 or newer.

```bash
git clone <your-repository-url>
cd apex-detailing
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To verify the production build locally:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

The project uses standard Next.js defaults and requires no Vercel configuration or environment variables.

```bash
npx vercel
npx vercel --prod
```

Alternatively, import the Git repository in the Vercel dashboard and accept the detected Next.js settings.
