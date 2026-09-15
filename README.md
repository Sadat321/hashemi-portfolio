# Sayed Masbah Hashimi — Cinematic Technology Portfolio

A bilingual, production-ready React + Vite portfolio built from the supplied CV, portrait, contact details, and two verified live projects.

## Run on Windows

If PowerShell blocks `npm.ps1`, use the Windows command shim:

```powershell
npm.cmd install
npm.cmd run dev
```

Or in Command Prompt:

```cmd
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Included content

- Real identity and portrait of Sayed Masbah Hashimi
- English and Dari interfaces with automatic LTR/RTL switching
- Dark and light themes saved in `localStorage`
- Downloadable supplied PDF CV
- Verified contact details and WhatsApp shortcut
- Two real, publicly deployed project case studies:
  - Hashemi Web Development — Solar Hijri 1402 (2023/24)
  - Blue Ship Cargo — Solar Hijri 1403 (2024/25)
- Experience from the Ministry of Agriculture, Irrigation and Livestock
- Management systems, English, and computer instruction experience
- Gharjistan University, Jamal Al-Shefa Institute, and high-school education
- CV-based technical and language skills
- Clearly qualified cybersecurity learning direction
- Harmless simulated terminal; no system commands are executed
- Brighter locally stored cinematic Hero video with poster fallback
- Two lightweight, locally hosted ambient films for the Expertise and Security sections; playback pauses outside the viewport and respects reduced-motion preferences

## Ambient media credits

- Server-room footage: [MrColo on Pexels](https://www.pexels.com/video/close-up-of-a-cpu-7140928/)
- Circuit-flow animation: [Oleg Gamulinskii on Pexels](https://www.pexels.com/video/a-circuit-board-with-blue-lines-on-it-6466100/)

Both clips are distributed under the Pexels license, stored locally, muted, stripped of audio, and optimized to 720p WebM for GitHub Pages.

## Content architecture

All bilingual portfolio data is centralized in:

```text
src/data/portfolio.js
```

Display preferences are handled by:

```text
src/context/SitePreferences.jsx
```

## Project structure

```text
src/
├── components/       # Navigation, controls, modal, cursor, terminal
├── context/          # Language and theme state
├── data/             # Central bilingual portfolio content
├── hooks/            # Reveal and active-section observers
├── sections/         # Complete portfolio sections
├── styles/           # Tokens, global, components, sections, responsive
├── App.jsx
└── main.jsx

public/
├── assets/           # Portrait, live screenshots, video, social preview
├── documents/        # Supplied PDF CV
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Accuracy and privacy choices

Content was transcribed from the supplied CV and verified against the two public websites. The portfolio does not claim professional cybersecurity certification or unsupported expertise. Date of birth and exact residential address were intentionally omitted from the public interface; they remain inside the user-supplied downloadable CV.

## GitHub Pages deployment

This project is configured for the repository and public URL below:

```text
Repository: Sadat321/hashemi-portfolio
Website:    https://sadat321.github.io/hashemi-portfolio/
```

The Vite base path and every local image, video, and document URL include the repository path. Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys `dist` automatically through GitHub Actions.
