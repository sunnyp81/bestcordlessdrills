import amazonImages from '../data/amazon-images.json';

// Amazon Associates UK: single source of truth for the tracking tag.
export const AMAZON_TAG = 'chainsaw0f6-21';

// Required rel set on every outbound affiliate link (ASA/FTC + SEO).
export const AFFILIATE_REL = 'nofollow sponsored noopener noreferrer';

// Build a tagged Amazon UK product link from an ASIN.
export function buildAmazonLink(asin: string): string {
  return `https://www.amazon.co.uk/dp/${asin}?tag=${AMAZON_TAG}`;
}

// Build a tagged Amazon UK search link (used when no single ASIN is canonical).
export function amazonSearchLink(query: string): string {
  return `https://www.amazon.co.uk/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}

// Product image for a given ASIN, from the build-time synced src/data/amazon-images.json
// (gitignored, TOS: URLs stale after 24h). Returns undefined when no ASIN or no synced
// image, so callers can fall back to a placeholder.
type AmazonImages = { items: Record<string, { image: { url: string } }> };
export function amazonImage(asin?: string): string | undefined {
  return asin ? (amazonImages as AmazonImages).items[asin]?.image.url : undefined;
}
