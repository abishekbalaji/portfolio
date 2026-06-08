# Abishek B — Portfolio

A dark, modern single-page portfolio built with **React + Vite**. All content lives in one file: [`src/data.js`](src/data.js).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Edit your content

Open [`src/data.js`](src/data.js) and edit the objects there — profile, stats, skills, projects, experience, awards. The whole site updates automatically.

**Things you'll likely want to update first:**

- **Employment dates** — under `experience`, set your exact CitiusTech start date and Applied Materials end date (they're marked with comments).
- **Profile photo** — the About section shows an "AB" placeholder. To use a real photo, drop a square-ish image at `public/profile.jpg`, then in `src/components/About.jsx` replace the `<span class="about__monogram">` with `<img src="./profile.jpg" alt="Abishek B" />`.
- **Stats** — the "20+ / 4+ / 20+" numbers in the About section.

## Deploy to GitHub Pages (free)

1. Create a new repo on GitHub, e.g. `portfolio` (or `abishek-portfolio`).
2. Push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/abishekbalaji/portfolio.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.

Your site will be live at `https://abishekbalaji.github.io/<repo-name>/`.

> The Vite config uses `base: './'` (relative paths), so it works on a project page, a user page (`abishekbalaji.github.io`), or a custom domain with no changes.

### Custom domain

If you want `www.abishekbalaji.site` to point here, add a `CNAME` file in `public/` containing your domain, and configure the DNS / custom domain in GitHub Pages settings.
```

## Tech

React 18 · Vite 5 · plain CSS (no UI framework) · Google Fonts (Anton + Manrope).
