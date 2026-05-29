
## Stack

- React 18
- Vite 5
- Tailwind CSS 3

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

Site URL: [https://sisrar40.github.io/](https://sisrar40.github.io/)

**Option A — GitHub Actions (recommended)**

1. Push to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds `dist/` and deploys automatically.

**Option B — manual**

```bash
npm run deploy
```

Then set **Settings → Pages → Source** to the `gh-pages` branch.

> Do not enable “Deploy from branch / main / root” — that publishes source files and causes a black screen. The built `dist/` output must be deployed.
