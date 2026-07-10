# Growth Plan: bestcordlessdrills.uk

Written 2026-07-10, at Phase 3/4 completion (7 wave-1 pages live on Cloudflare Pages, custom domain cutover pending).

## 1. Wave 2/3 content schedule

From the Phase 2 build manifest (25 pages total, 7 shipped in wave 1). Target cadence: 2-3 pages/week once the custom domain is live and indexing (per `/launch-seo` wave protocol). Dates below assume domain cutover lands within the next 1-2 weeks of 2026-07-10; shift the whole schedule by the actual cutover date if it slips.

**Wave 2 (12 pages, target weeks of 2026-07-27 to 2026-08-24):**
`/battery-platforms-explained/`, `/18v-vs-20v-max/`, `/drill-vs-corded/`, `/hammer-drill-for-masonry/`, `/aldi-lidl-special-buys/`, `/erbauer-review/`, `/mac-allister-review/`, `/titan-review/`, `/bare-tool-vs-kit/`, `/glossary/`, `/glossary/torque-nm/`, `/glossary/brushless-vs-brushed/`.

**Wave 3 (6 pages, target weeks of 2026-08-31 to 2026-09-14):**
`/ozito-review/`, `/can-a-drill-mix-paint/`, `/battery-longevity/`, `/glossary/hammer-action/`, `/glossary/ah-battery-capacity/`, `/glossary/chuck-size/`.

Each new page follows the same pipeline proven in wave 1: `/semantic-brief` → `/content-writer` → `/semantic-audit` (>=85 gate) → `/content-visuals` → `/meta-generate`, grounded in the verified product data sheet (`docs/` or regenerate via fresh WebFetch checks as prices age).

## 2. Monitor registration

Register `bestcordlessdrills.uk` in `/seo-monitor-loop` triage rotation and `seogets` once GSC access exists (see Phase 4 blockers below). Cadence: weekly triage checks until first real GSC data exists, then state-based cadence (recovery/growth/maintenance) per the skill's standard rules.

## 3. `/evolve-site` enrolment

Enrol **4 weeks after the custom domain actually goes live** (not from this build date, since GSC data only starts accumulating once bestcordlessdrills.uk itself is serving traffic). Placeholder target: 2026-08-07, adjust once the real go-live date is confirmed.

## 4. Monetisation activation milestones

- Amazon Associates UK links are already live (tag `chainsaw0f6-21`), using only 4 confirmed-real ASINs (Makita B01LYXFYLB, DeWalt B0F5WZQ12C, Bosch B084GSNQLY, Ryobi B07YT5HGH3) plus search-tag links for every unconfirmed product. **[MANUAL: Sunny]** click-verify the unconfirmed products before they've been live long, and swap in confirmed ASINs where found.
- No ad network application until a real, stable traffic threshold exists (per portfolio rule: no premature AdSense). Ezoic has no minimum, so it can be evaluated first once traffic exists; Mediavine needs ~50k sessions/mo, well beyond the 12-month horizon in the dossier.
- First-£ checkpoint: track first Amazon Associates commission event as the go/no-go signal that the arithmetic in the dossier is holding.

## 5. Entity corroboration checklist (carried from Phase 1)

- [ ] Author (Gareth Vaughan) LinkedIn / personal author page / X profile — **[MANUAL: Sunny]**
- [ ] Amazon Associates storefront link
- [ ] YouTube short spec-explainer clips (own-brand vs premium angle)
- [ ] MoneySavingExpert DIY board, Screwfix Community, DIYnot, UKworkshop.co.uk mentions (organic, never vote-manipulated)
- [ ] GA4 property created, replace `G-PLACEHOLDER000` in `src/layouts/BaseLayout.astro` — **[MANUAL: Sunny]**
- [ ] GSC property added once custom domain is live — **[MANUAL: Sunny or Claude once domain resolves]**

## 6. 90-day review

Target date: **2026-10-08** (90 days from this build). Compare actual traffic/clicks against the dossier's 6-month arithmetic (~£118/mo central case, 2,000-5,000 sessions/mo). If under 25% of that line, trigger `/site-health` diagnosis rather than letting it decay silently. Also re-check: are the 4 confirmed ASINs still live and correctly priced; has Amazon's 5.0% Tools & Home Improvement commission rate changed; is Titan still a Screwfix-only brand (retail brand ownership can shift).

## Phase 4 blockers carried into this plan

**Custom domain cutover is blocked**, not yet started to be precise: `bestcordlessdrills.uk` is not currently a zone in the sunnypat81 Cloudflare account, and the available API token lacks zone-create permission. The live site currently serves only from `https://bestcordlessdrills.pages.dev/`. To unblock: Sunny needs to either (a) confirm where the domain is currently registered/hosted and add it as a CF zone + point nameservers at Cloudflare, or (b) supply a CF API token with zone-create scope. Until this resolves: no GSC submission, no Bing sitemap resubmission (Bing property already exists from Phase 0 but points at the old thin content), no `/index-push` — all of these target the real domain and would be wasted effort against a URL that's about to change.
