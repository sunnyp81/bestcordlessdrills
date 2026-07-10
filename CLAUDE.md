# bestcordlessdrills.uk — repo brain

Built 2026-07-10 via `/site-build`. Full rebuild of a previously orphaned, thin affiliate domain (Bing showed 11 impressions / 0 clicks ever, on irrelevant ultra-narrow queries). See `docs/research-dossier.md` (Phase 0, verdict GO on all 6 criteria) and `site-identity.md` (Phase 1) for full detail — this file is the quick-reference summary.

## What this site is

Brand: **Best Cordless Drills**. UK cordless-drill and power-tool buying guide for occasional-to-keen home DIYers. USP: the only UK site benchmarking retailer own-brand tool lines (Erbauer and Titan at Screwfix, Mac Allister at B&Q, Ozito, plus Aldi/Lidl special-buys) against premium trade brands (Makita, DeWalt, Bosch, Milwaukee, Ryobi) on real UK price, warranty and battery-platform data, honestly sourced rather than claiming lab-testing it doesn't do. Author persona: Gareth Vaughan (disclosed editorial persona, 20+ years DIY experience, explicitly not a tradesperson or test lab).

## Stack

Astro 5 + Tailwind 4, static output, self-hosted fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono via fontsource), Satori-generated OG images (build-time, `scripts/generate-og.mjs`), no server/API routes.

## Design state (2026-07-10, after 2 fix passes)

Sunny twice called the first build "bland, flavourless". Two follow-up passes:
1. Chrome fix (commit `de6677e`, all 7 pages + shared components): full-bleed dark `.hero-band` (dot-grid + amber glow) on every page, page shell widened 44rem->58rem, `SpecPanel.astro` rebuilt as a dark instrument plate with an amber headline figure, `VerdictBadge.astro` switched to solid-fill.
2. Picks-first restructure (commit `49879de`, **homepage `/` ONLY so far**): a `.toppicks` "picks at a glance" card band directly under the hero (1 dark featured card + 3 light, Spec Ledger mono figures + verdict badges + jump links); intro trimmed to one line; "how we score" methodology moved from top to foot of page; use-case decision diagram moved next to the picks. Content reordered, not rewritten.

⚠️ **The other 6 pages still have the old methodology-first / buried-answer order** — they have NOT had the picks-first treatment yet (was paused for Sunny to judge the homepage first). If rolling it out, replicate the `.toppicks` pattern from `src/pages/index.astro`. Nothing this session was ever *visually* verified rendered — browser screenshot tooling was dead all session; verification was DOM inspection + live-HTML source order only.

## Content status

All 7 wave-1 pages live, each passed `/semantic-audit` >=85: `/` (91), `/own-brand-vs-premium/` (92, flagship USP page), `/drill-vs-combi-vs-impact-driver/` (90), `/best-budget/` (89), `/best-combi-drill/` (92), `/makita-vs-ozito/` (91), `/about/` (91). 18 more pages planned across waves 2-3, see `docs/growth-plan.md`.

**Product-data honesty rule (critical, read before adding any product/price/spec content):** only 4 Amazon ASINs are confirmed real via direct fetch — Makita DHP484Z `B01LYXFYLB`, DeWalt DCD796N `B0F5WZQ12C`, Bosch GSB 18V-55 `B084GSNQLY`, Ryobi R18PD3 `B07YT5HGH3` (note: this is the 2x1.5Ah pack, not the 2x2Ah one often quoted at retail). Every other product must use `amazonSearchLink()` from `src/lib/affiliate.ts`, never a guessed ASIN. Aldi Ferrex and Lidl Parkside have no Amazon UK listing at all, mention only. Re-verify prices periodically, they were checked July 2026.

**Titan correction:** Titan is a Screwfix own-brand alongside Erbauer, not Toolstation's. Toolstation has no house power-tool brand and resells trade brands instead. This was wrong in early drafts and fixed everywhere before launch, don't reintroduce the error.

**Amazon commission rate:** 5.0% for Tools & Home Improvement (confirmed live via Amazon's own fee schedule), not the commonly-quoted 3% (that figure is stale/US-conflated).

## Deploy

- GitHub: `sunnyp81/bestcordlessdrills` (public, `main` branch).
- Cloudflare Pages project: `bestcordlessdrills` (sunnypat81 account, `aba0a6722a4510842ca473315a8ba13e`). Deploy: `npm run build && npx wrangler pages deploy dist --project-name bestcordlessdrills --commit-dirty=true`.
- **Live URL right now: https://bestcordlessdrills.pages.dev/** — this is the real, current, working site.
- **Custom domain bestcordlessdrills.uk is NOT yet attached.** `bestcordlessdrills.uk` is not a zone in the sunnypat81 Cloudflare account, and the wrangler OAuth token available this session lacked zone-create permission. **[MANUAL: Sunny]** needs to either confirm the domain's current registrar/nameserver state and point it at Cloudflare, or supply a token with zone-create scope, then the custom domain can be attached to the Pages project in a few minutes.
- GA4 is wired in `BaseLayout.astro` with placeholder ID `G-PLACEHOLDER000` — **[MANUAL: Sunny]** create a real GA4 property and swap it in.

## Technical SEO

Audited 2026-07-10 against the live pages.dev preview: 90/100 (see `docs/growth-plan.md` blockers section for what's capped pending domain cutover). Security headers (HSTS, CSP, X-Frame-Options, Permissions-Policy) added via `public/_headers`.

## Next steps

See `docs/growth-plan.md` for the full Phase 5 plan: wave 2/3 content schedule, monitor registration, `/evolve-site` enrolment date, monetisation milestones, entity corroboration checklist, 90-day review trigger.
