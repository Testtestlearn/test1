# React Material UI Site

A React + TypeScript + Vite site styled with Material UI theme customization.

## Tech Stack

- React 19
- Material UI 7
- Vite 7
- TypeScript 5

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Windows PowerShell note: if script execution is restricted, use `npm.cmd` instead of `npm`.

## GitHub Pages Deployment

This repo is configured for GitHub Pages deployment through GitHub Actions.

### 1. Push to `main`

```bash
git add .
git commit -m "Update site"
git push origin main
```

### 2. Enable Pages in GitHub

In the GitHub repository:

1. Go to `Settings`.
2. Select `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.

### 3. Wait for deployment

1. Open the `Actions` tab.
2. Run or wait for `Deploy to GitHub Pages` workflow.
3. After it succeeds, open the site URL.

## Site URL

Expected Pages URL:

`https://testtestlearn.github.io/react-material-ui/`

## Important Config

- Vite base path is set in `vite.config.ts`:

`base: '/react-material-ui/'`

If you rename the repository, update this base path to match the new repo name.
