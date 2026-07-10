import { SITE } from './site';

const abs = (path: string) => new URL(path, SITE.url).toString();

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': SITE.organizationId,
  name: SITE.publisher,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: abs(SITE.logo) },
  foundingDate: SITE.founded,
  // Entity corroboration for AI engines: only emitted once real profiles exist.
  ...(SITE.sameAs.length ? { sameAs: [...SITE.sameAs] } : {}),
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE.websiteId,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': SITE.organizationId },
  inLanguage: 'en-GB',
});

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': SITE.personId,
  name: SITE.author,
  jobTitle: 'Editor and lead researcher',
  worksFor: { '@id': SITE.organizationId },
  url: `${SITE.url}/about/`,
  knowsAbout: [
    'cordless drills',
    'combi drills',
    'impact drivers',
    'UK power tool retail',
    'battery platforms',
    'brushless motors',
  ],
});

// Marks the H1 and FAQ answers as speakable so AI/voice engines extract them cleanly.
export const speakableSchema = (url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.faq-answer'],
  },
});

export const breadcrumbSchema = (crumbs: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.url),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) =>
  faqs.length === 0 ? null : ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });

export const itemListSchema = (args: {
  name: string;
  url: string;
  items: { name: string; url: string; position: number }[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: args.name,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  numberOfItems: args.items.length,
  itemListElement: args.items.map((it) => ({
    '@type': 'ListItem',
    position: it.position,
    url: abs(it.url),
    name: it.name,
  })),
});

export const productSchema = (args: {
  name: string;
  brand: string;
  image?: string;
  description: string;
  url: string;
  priceLow?: number;
  priceHigh?: number;
  // Only pass when a real, sourced owner-rating count exists.
  aggRating?: number;
  aggCount?: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: args.name,
  brand: { '@type': 'Brand', name: args.brand },
  ...(args.image ? { image: abs(args.image) } : {}),
  description: args.description,
  url: abs(args.url),
  ...(args.priceLow && args.priceHigh ? {
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: args.priceLow,
      highPrice: args.priceHigh,
      availability: 'https://schema.org/InStock',
    },
  } : {}),
  ...(args.aggRating && args.aggCount ? {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: args.aggRating,
      reviewCount: args.aggCount,
      bestRating: 5,
    },
  } : {}),
});

export const reviewSchema = (args: {
  itemReviewedName: string;
  itemReviewedType?: string;
  rating: number;
  url: string;
  reviewBody?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': args.itemReviewedType ?? 'Product',
    name: args.itemReviewedName,
  },
  reviewRating: { '@type': 'Rating', ratingValue: args.rating, bestRating: 5 },
  author: { '@type': 'Organization', name: args.author ?? SITE.publisher },
  datePublished: args.datePublished,
  ...(args.dateModified ? { dateModified: args.dateModified } : {}),
  ...(args.reviewBody ? { reviewBody: args.reviewBody } : {}),
  url: abs(args.url),
});

export const definedTermSchema = (args: {
  name: string;
  description: string;
  url: string;
  inDefinedTermSet?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: args.name,
  description: args.description,
  url: abs(args.url),
  ...(args.inDefinedTermSet ? { inDefinedTermSet: abs(args.inDefinedTermSet) } : {}),
});

export const howToSchema = (args: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: args.name,
  description: args.description,
  step: args.steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});

export const aboutPageSchema = (args: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: args.name,
  description: args.description,
  url: abs(args.url),
  about: { '@id': SITE.organizationId },
  mainEntity: { '@id': SITE.personId },
});
