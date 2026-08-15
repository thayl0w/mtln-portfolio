# QA report

## Completed static checks
- Relative Astro/TypeScript imports: PASS — no missing relative imports found.
- TypeScript syntax for `portfolio.ts` and `marketing.ts`: PASS. The only local `tsc --noResolve` errors are expected unresolved `simple-icons` imports because `node_modules` is not installed in this sandbox.
- Marketing taxonomy: separate categories for research, social, calendars, email, automation, SOPs, funnels, lead magnets, websites, and analytics.
- Navigation logic: MTLN routes to the dashboard/home; internal page navigation prefixes the root route; the envelope uses tab-scoped `sessionStorage` state.
- Social gallery: no 12-item artificial cap; the full indexed array remains visible.
- PIW source recovery: available funnel screenshots, workflow/email screenshots, research DOCX files, recent social graphics, and social-profile screenshots were copied into `public/projects/piw/`.
- Resume: a current DOCX was bundled and its text preview was added to the document viewer data.

## Production build status
A full `npm run build` could not be completed in this sandbox because the required npm packages are not installed and registry downloads failed in the environment. Run the commands below on a machine with npm registry access:

```bash
npm install
npm run build
```

## Source-asset limitation
The newest PIW social-media ZIP mentioned by the user was not present as an accessible uploaded/library file, so it could not be extracted. Some Corazon, Gig Ready, Cafe Expert, Modern Haus, Anchor Medical, certification, and older technical-project images are also referenced by the uploaded data model but were not available as file bytes in this turn. See `ASSET-AUDIT.md` for exact paths.
