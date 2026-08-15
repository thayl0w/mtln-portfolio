# MTLN Portfolio — Marketing-First Rebuild

This version makes digital marketing, marketing automation, funnels, research, social content, lead generation, email, SOPs, and analytics the primary story. Development remains prominent as the technical execution advantage behind the work rather than the portfolio's dominant identity.

## What changed
- Premium Iron-Man-inspired palette: gunmetal, crimson, restrained metallic gold — without superhero artwork or Marvel-style UI.
- Marketing library appears immediately after the hero and can be browsed by **work type** or **brand**.
- Funnel, website, lead magnet, email, automation, social, research, SOP, calendar, and analytics stay in **separate project windows** even when they belong to the same brand.
- All indexed legitimate work stays in the data model; the site is not reduced to a top-three selection.
- PIW Social Media now includes recovered recent graphics, the indexed 30-day series, profile-optimization work, and an earlier guide-promotion set.
- Social galleries are no longer capped to a small sample.
- Technical builds remain in their own supporting section.
- Envelope intro is tab/session-scoped: first visit in a fresh tab only. Internal navigation and refreshes after completion do not replay it.
- MTLN always returns to the dashboard/home, not the envelope.
- Current resume DOCX and a built-in text preview are bundled.

## Important asset note
The source inventory already references a large body of marketing work. Only assets actually available to ChatGPT were copied into this package. The newest PIW social ZIP mentioned in the conversation was **not present as an accessible file**, so it could not be extracted. Uploading that ZIP later is enough to fill the prepared PIW Social Media window; the architecture does not need to be redesigned.

See `ASSET-AUDIT.md` for referenced source assets that are still missing from the package and `QA-REPORT.md` for validation status.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```
