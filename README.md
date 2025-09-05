# Career Journey Portfolio (Next.js + Tailwind + Framer Motion)

A neon-tech, animated portfolio themed as a Test Automation Engineer journey with a career timeline, skills playground, projects, and contact. Static-export ready for GitHub Pages.

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build (static export)
```bash
npm run build
```
Outputs static site to `out/`.

## Deploy to GitHub Pages
- Use `.github/workflows/deploy.yml` (included), or push `out/` to `gh-pages`.
- `next.config.js` auto-sets `basePath`/`assetPrefix` from `GITHUB_REPOSITORY` on Actions.

## Customize
- Content: `pages/index.tsx`
- Styles: `styles/globals.css`, `tailwind.config.js`
- Components: `components/*`

Tech: Next.js 14, Tailwind CSS 3, Framer Motion 11.
