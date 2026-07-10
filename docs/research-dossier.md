# Research Dossier: bestcordlessdrills.uk (UK cordless drill / power tool buying guides)

Date: 2026-07-10 | Researcher: Claude (Sonnet 5) | Status: **GO**

## 1. Demand (real data only)

| Query / prompt | Source | Volume or impressions | Trend |
|---|---|---|---|
| bestcordlessdrills.uk (existing site) | Bing Webmaster (own property, verified) | 11 total impressions, 0 clicks, ever, across 10 ultra-narrow queries (e.g. "bosch ixo cordless v black and decker rapid") | flat/dead — wrong queries entirely |
| "best cordless drill uk" / "best cordless drill for diy" / "cordless combi drill" / "cordless drill vs impact driver" / "best budget cordless drill uk" | WebSearch SERP density (proxy) | ~9 distinct search phrasings each returning 5-8 populated results, sustaining 7-8 independent niche affiliate domains competing head-to-head | evergreen category, not seasonal/trend-dependent |
| Bing Webmaster `get_keyword_data`/`get_keyword_stats`/`get_related_keywords` | Bing Webmaster API | **Unavailable** — confirmed dead (API 400 .NET null-ref) on every query tested, both via agent and direct call. Portfolio-wide known issue, logged Jul 10 (`reference_bing-keyword-api-dead.md`) | n/a |
| 12 realistic AI-chat buyer prompts (ChatGPT/Perplexity-style) | Manual fan-out + WebSearch grounding | All 12 map to real, distinct buying decisions (budget tier, brand trust, combi-vs-drill-vs-impact-driver confusion, battery platform lock-in, paint-mixing edge case, UK wall/masonry context) | rising interest in "is the cheap one good enough" value-comparison framing |

**Evidence quality: moderate-strong, with an honest gap.** No hard monthly search-volume number was obtainable (Bing's keyword API is platform-broken this week, confirmed twice). Demand is evidenced instead by: (a) an entire cluster of ~8 independent niche affiliate sites actively competing for this term set, a market doesn't sustain 8 competitors on zero volume; (b) cordless drills are a long-established, evergreen consumer durable category, not a speculative niche; (c) the existing domain's own (badly-targeted) pages still pick up incidental Bing impressions, confirming Bing indexes and serves this space. Flagged as the one dossier line to revisit once an Ahrefs export or working Bing API is available.

## 2. SERP reality (per head term)

- **"best cordless drill uk"**: rewarded format is buying-guide/listicle with named tester and real product photos. Top result quality is inconsistent: one is a 2026-updated big-media guide (homebuilding.co.uk, 6/10, no budget/own-brand coverage), most others are niche affiliate sites, several thin/generic (garageworld360.co.uk 3/10, boilerplate "analysed thousands of reviews" language, no Screwfix/B&Q/Toolstation mention at all despite being a UK-specific page).
- **"best budget cordless drill uk"**: same weakness repeats. Not one ranking page benchmarks UK retail own-brand lines against premium brands with real numbers.
- **"cordless drill vs impact driver"**: no ranking page fully covers all three tool types (drill, combi drill, impact driver) in one clear decision tool.
- Freshest page found with genuine hands-on evidence (gardentoolbox.co.uk, named tester, real photos, masonry anecdotes) is dated **June 2019**, seven years stale in a category where battery/brushless tech has moved on.
- No featured snippet/AI Overview ownership identified in this space by any tested source.

## 3. AI-chat landscape

- Real buyer prompts identified (sample): "What cordless drill should I buy for occasional DIY around the house?", "Is it worth paying more for a Makita over a cheap Ozito/Parkside drill?", "What's the difference between a combi drill and a normal cordless drill?", "Is 18V or 20V max better, or just marketing?", "Are Aldi/Lidl special-buy cordless drills any good?"
- Fan-out sub-queries mapped for the 3 highest-value prompts: budget tier, torque/voltage vs task, combi-vs-straight-drill decision, battery ecosystem lock-in, brand reliability/warranty, UK retail availability and pricing.
- Live citation test: sources currently citable for these exact prompts are almost entirely non-UK. Bob Vila, Pro Tool Reviews and TechGearLab (US) dominate the generic DIY-drill question; Whirlpool and OzBargain forums (AU/NZ) dominate the value-brand question. Only one UK source surfaced at all, a Screwfix Community forum thread, and only on a UK-qualified search.
- **Gap**: no confident, UK-specific, directly-extractable answer exists to "is it worth paying more than a budget drill for occasional UK home DIY use", accounting for UK wall types, UK retail pricing and UK warranty terms.

## 4. Community signal

- Reddit MCP was dead this session (every call across r/DIYUK, r/DIY, r/Tools, r/PowerTools, r/HomeImprovement returned HTTP 403, no OAuth/username credentials configured server-side). Substituted with the WebSearch/forum signal folded into sections 2-3 (Screwfix Community, PistonHeads, WoodCentral, Quora threads).
- Recurring pain points identified: battery degradation over time, chuck/gear quality at budget tier, confusion over drill vs combi drill vs impact driver, brand loyalty vs price sensitivity, whether occasional/light users are wasting money on trade brands.

## 5. Competitor teardown (winner-audit lens)

| Site | Strength | Exploitable gap |
|---|---|---|
| homebuilding.co.uk (Future plc) | UK retailers, GBP, updated Oct 2025, high domain authority | No hands-on evidence beyond a blanket claim, zero budget/own-brand coverage |
| garageworld360.co.uk | Ranks repeatedly (3x across query set) | Boilerplate AI-sounding copy, no named tester, no photos, ignores Screwfix/B&Q/Toolstation despite targeting "UK budget" explicitly |
| diygarden.co.uk (Harris Creative Ltd) | Named tester, 7-point methodology, updated Jul 2026 | No impact driver coverage, no own-brand/retail-chain comparison |
| gardentoolbox.co.uk (Terry Smith) | Real photos, genuine masonry-drilling anecdotes, named 20-yr background | Dated June 2019, 7 years stale |
| Which? / Tom's Guide / Ideal Home / Real Homes / T3 | Absent from this term cluster entirely | The entrenched big-media moat that usually blocks niche sites is not present here |

**Niche vs big-media verdict: winnable.** Around 80% of the visible SERP for these exact long-tail terms is small independent affiliate sites, several thin or AI-generic. The bar to clear is a stale 2019 review and a handful of boilerplate pages, not an entrenched Which?/Tom's Guide moat.

## 6. Monetisation arithmetic

- Mechanism: Amazon Associates UK, tracking ID `chainsaw0f6-21` (reused from bestchainsaw.uk per instruction, one tag across multiple owned properties is allowed under Associates).
- Tools & Home Improvement category commission: **5.0%**, confirmed via direct fetch of Amazon's own live UK Associates fee schedule during Phase 3 product research (the initial Phase 0 figure of 3% was stale third-party content, not Amazon's own page).
- UK price tiers (spot-checked live B&Q/Screwfix/Toolstation listings): budget own-brand £25-160, mid-range combi drills £45-150, trade/prosumer kits £150-350+. Blended AOV assumption: £75.
- Arithmetic (sessions x CTR-to-Amazon x conversion% x AOV x 5%):
  - 6-month (2,000-5,000 sessions/mo): £38-£270/mo range, **~£118/mo central case**.
  - 12-month (8,000-15,000 sessions/mo): £153-£810/mo range, **~£388/mo central case**.
- Both central cases clear the £50-300/mo realistic-win bar for a solo-portfolio niche site. Session volume against a beatable-but-real competitor set is the remaining risk, not the arithmetic.
- Secondary monetisation: display ads once traffic supports it (no premature AdSense application).
- This domain was orphaned at £0/mo since Feb 2026, rebuilding it is strictly additive to the portfolio, not a reallocation away from a healthier site.

## GO/NO-GO scorecard

| # | Criterion | Pass? | Evidence pointer |
|---|---|---|---|
| 1 | Demand proven with real data | PASS (moderate) | section 1, proxy-strong, hard volume number unavailable |
| 2 | Winnable: documented SERP/AI weakness | PASS (strong) | sections 2-3, stale 2019 best-in-class page, no UK own-brand benchmarking anywhere |
| 3 | £ path with arithmetic | PASS | section 6, ~£118/mo (6mo) to ~£388/mo (12mo) central cases |
| 4 | USP candidate nobody else has | PASS | sections 3-5, UK retail own-brand vs premium-brand benchmarking with a direct usage-threshold answer |
| 5 | Effort proportionate to return | PASS | section 6, standard Astro affiliate-guide build, same class as thebestmowers/bestvibrationplates |
| 6 | No portfolio cannibalisation | PASS | checked PROJECT-REGISTRY.md + MEMORY.md, no existing portfolio site covers power tools/DIY equipment |

**Verdict: GO.** Rebuild of an already-owned, already-domain-verified, currently-earning-£0 asset.

## USP candidates (fed into Phase 1)

1. The only UK cordless drill site that benchmarks retail own-brand lines (Erbauer/Titan at Screwfix, Mac Allister at B&Q, Ozito) against premium brands (Makita/DeWalt/Bosch/Milwaukee) with real UK price, warranty and battery-platform data, and gives a direct usage-threshold answer.
2. Explicit "drill vs combi drill vs impact driver" decision tool covering all three tool types in one place with UK task examples.
3. Content kept visibly current against a category where the freshest competing "real testing" page is 7 years stale.
