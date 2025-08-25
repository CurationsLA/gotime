# 🚀 GitHub Pages Deployment Guide

## Deployment Status

This repository is configured to automatically deploy to GitHub Pages.

**Live Site URL:** https://CurationsLA.github.io/gotime/

## How It Works

1. **Automatic Deployment**: Pushes to `main` branch trigger deployment
2. **Build Process**: GitHub Actions runs `npm run build` in the `MASTERS 1.1` directory
3. **Asset Deployment**: Built files are deployed to GitHub Pages
4. **Base Path**: Production builds use `/gotime/` base path for correct asset loading

## Manual Deployment

You can trigger deployment manually:
1. Go to the **Actions** tab in GitHub
2. Select **Deploy React App to Pages** workflow
3. Click **Run workflow** button

## Configuration Details

- **Source Directory**: `MASTERS 1.1/` (React app location)
- **Build Output**: `MASTERS 1.1/dist/` (deployed to Pages)
- **Base Path**: `/gotime/` (matches repository name)
- **Node Version**: 20 (defined in workflow)

## Deployment Workflow

The deployment uses `.github/workflows/static.yml`:
- Installs Node.js and dependencies
- Builds the React application
- Uploads build artifacts to GitHub Pages
- Deploys to the live site

## Development vs Production

- **Development** (`npm run dev`): Uses base path `/`
- **Production** (`npm run build`): Uses base path `/gotime/`

This ensures assets load correctly both locally and on GitHub Pages.