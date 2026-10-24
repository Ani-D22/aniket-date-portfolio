# Aniket Date — Personal Portfolio

A responsive, dark, developer-focused portfolio built with React, TypeScript, and Vite.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal.

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Before publishing

Update the `PROFILE` object at the top of `src/App.tsx`:

- `email`: your real professional email
- `github`: your GitHub profile URL
- `linkedin`: your LinkedIn profile URL
- `resume`: path to your resume PDF

Put your final resume PDF at `public/resume.pdf`. If you use a different filename, update `PROFILE.resume`.

### Projects

The first project describes generalized professional experience. Keep internal or confidential details out of public case studies.

The second and third project cards are explicitly labelled as project concepts. Implement them and add working repository/demo links before presenting them as completed projects. Remove any card that does not reflect work you can confidently explain in an interview.

### Accuracy check

Review all dates, metrics, skills, education details, and role descriptions before sharing the site with recruiters. The experience metrics are based on the information supplied for this initial draft; adjust them if your final resume uses different figures.

## Deployment

You can deploy the repository to Vercel, Netlify, or Cloudflare Pages. Use the standard Vite build command `npm run build` and output directory `dist`.
