# Quantivo Labs Technologies — Website

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:3000)
npm run dev

# 3. Build for production → outputs to /dist
npm run build

# 4. Preview the production build
npm run preview
```

## Build Output

Running `npm run build` generates a `dist/` folder with:

```
dist/
  index.html          ← entry point
  assets/
    index-[hash].js   ← vendor chunk (React, Router)
    motion-[hash].js  ← framer-motion chunk
    icons-[hash].js   ← lucide-react chunk
    index-[hash].css  ← all styles
```

Deploy the entire `dist/` folder to any static host:
- **Netlify** — drag & drop `dist/` or connect repo
- **Vercel** — `vercel --prod` from project root
- **AWS S3** — sync `dist/` to S3 bucket with static hosting
- **GitHub Pages** — push `dist/` contents to `gh-pages` branch

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Inter + Space Grotesk) |

## Project Structure

```
src/
  components/
    Navbar.tsx          ← sticky responsive navigation
    Footer.tsx          ← full-width footer with links
    ScrollToTop.tsx     ← auto-scroll on route change
  pages/
    Home.tsx            ← hero, services, products, testimonials
    About.tsx           ← mission/vision, values, team, timeline
    Products.tsx        ← 9 product detail cards
    Services.tsx        ← 6 service lines + delivery process
    Portfolio.tsx       ← 9 case studies with results
    Contact.tsx         ← validated contact form
    Blog.tsx            ← articles with newsletter CTA
  index.css             ← global design system (CSS variables)
  App.tsx               ← router + layout wrapper
  main.tsx              ← React entry point
```

## Customization

### Brand Colors (`src/index.css`)
```css
--primary: #1E3A8A;       /* Deep blue */
--secondary: #7C3AED;     /* Purple */
--accent: #0EA5E9;        /* Cyan */
--highlight: #F59E0B;     /* Amber */
```

### Adding Contact Form Backend
The contact form in `src/pages/Contact.tsx` simulates submission.
Replace the `await new Promise(...)` with a real API call:
```ts
await fetch('https://api.quantivolabs.tech/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Placeholders to Replace
- `[Insert phone number]` in `Footer.tsx` and `Contact.tsx`
- `[Insert email address]` in `Footer.tsx`
- `[Insert full physical address]` in `Contact.tsx`
- Team member names in `About.tsx` (replace placeholder names with real ones)
- Social media links in `Footer.tsx`

## SEO

Meta tags are configured in `index.html`. Update:
- `og:url` — set to your production domain
- `og:image` — add a 1200×630 social preview image to `public/`
