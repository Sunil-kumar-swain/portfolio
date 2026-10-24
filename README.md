# Sunil Kumar Swain — Portfolio

A React + Vite portfolio with 4 switchable themes, built from your resume.

## Run it locally

You need [Node.js](https://nodejs.org) (v18 or newer) installed.

```bash
npm install     # installs dependencies (only needed once)
npm run dev     # starts a local dev server, usually at http://localhost:5173
```

Open the printed URL in your browser. Edit any file in `src/` and the page updates instantly (hot reload) — this is the fastest way to learn what each file does.

## Project structure

```
src/
  data/resume.js         <- ALL your content lives here. Edit this to update the site.
  context/ThemeContext.jsx <- the theme-switching logic
  components/
    Navbar.jsx / .css
    Hero.jsx   / .css     <- the animated terminal section
    About.jsx  / .css
    Skills.jsx / .css
    Experience.jsx / .css
    Projects.jsx   / .css
    Education.jsx  / .css
    Contact.jsx    / .css
    Footer.jsx     / .css
    BrandIcons.jsx        <- GitHub/LinkedIn SVG icons
  App.jsx                 <- assembles all the sections
  index.css               <- theme color variables + global styles
```

Each component has its own CSS file sitting right next to it, so it's obvious what belongs to what.

## Customizing

- **Content**: edit `src/data/resume.js` only — nothing else needs to change.
- **Colors/themes**: edit the `[data-theme="..."]` blocks in `src/index.css`. Add a 5th theme by copying a block, changing the values, and adding it to the `THEMES` array in `src/context/ThemeContext.jsx`.
- **Sections**: to add a new section, create a component in `src/components/`, then import and place it in `src/App.jsx`.

## Build for production

```bash
npm run build      # outputs static files into dist/
npm run preview    # preview the production build locally
```

## Deploying (all free)

**Vercel** (easiest):
1. Push this folder to a GitHub repo.
2. Go to vercel.com -> New Project -> import the repo. It auto-detects Vite. Deploy.

**Netlify**:
1. Push to GitHub.
2. netlify.com -> Add new site -> Import from Git. Build command: `npm run build`, publish directory: `dist`.

**GitHub Pages**:
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.js`
4. `npm run build && npm run deploy`
