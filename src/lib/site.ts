export const SITE = {
  name: 'Best Cordless Drills',
  shortName: 'Best Cordless Drills',
  url: 'https://bestcordlessdrills.uk',
  description: 'Independent UK cordless drill reviews and buying guides. Research-led comparisons of own-brand vs premium drills, combi drills, impact drivers and battery platforms.',
  locale: 'en_GB',
  publisher: 'Best Cordless Drills',
  author: 'Gareth Vaughan',
  editor: 'Gareth Vaughan',
  email: 'hello@bestcordlessdrills.uk',
  logo: '/favicon.svg',
  founded: '2026',
  // Real, verified entity profiles only (Trustpilot / Companies House / socials). Never fabricate.
  sameAs: [] as string[],
  organizationId: 'https://bestcordlessdrills.uk/#organization',
  websiteId: 'https://bestcordlessdrills.uk/#website',
  personId: 'https://bestcordlessdrills.uk/#person-gareth-vaughan',
} as const;

// The 5 NODE hubs - single source of truth, imported by Header + Footer.
export const NODE_HUBS = [
  { slug: 'own-brand-vs-premium', label: 'Own-Brand vs Premium' },
  { slug: 'drill-vs-combi-vs-impact-driver', label: 'Drill vs Combi vs Impact Driver' },
  { slug: 'battery-platforms-explained', label: 'Battery Platforms Explained' },
  { slug: 'glossary', label: 'Glossary' },
] as const;

// Grouped under the "Buying Guides" nav dropdown.
export const BUYING_GUIDES = [
  { slug: 'best-budget', label: 'Best Budget' },
  { slug: 'best-combi-drill', label: 'Best Combi Drill' },
] as const;
