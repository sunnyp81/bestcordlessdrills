#!/usr/bin/env node
// Build-time OG image generator for bestcordlessdrills.uk.
// Satori lays out text/boxes -> SVG; sharp rasterises that SVG to a static PNG.
// This is a one-off asset build (run manually, output committed to public/og/),
// not a runtime API route - the site is static Astro with no server.
//
// Usage: node scripts/generate-og.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'og');

const WIDTH = 1200;
const HEIGHT = 630;

// Site identity tokens, mirrored from src/styles/global.css. Satori can't read
// CSS custom properties at build time, so these are kept in sync by hand -
// update both places if the palette ever changes.
const COLOR = {
  ink950: '#16181C',
  amber700: '#E4740E',
  amber500: '#F5900F',
  steel300: '#9AA3AD',
  white: '#FFFFFF',
};

async function loadFont(relPath, weight) {
  const data = await readFile(path.join(ROOT, 'node_modules', relPath));
  return { data, weight, style: 'normal' };
}

async function loadFonts() {
  const [grotesk700, grotesk500, plexSans400, plexMono500] = await Promise.all([
    loadFont('@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff', 700),
    loadFont('@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff', 500),
    loadFont('@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff', 400),
    loadFont('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff', 500),
  ]);
  return [
    { name: 'Space Grotesk', ...grotesk700 },
    { name: 'Space Grotesk', ...grotesk500 },
    { name: 'IBM Plex Sans', ...plexSans400 },
    { name: 'IBM Plex Mono', ...plexMono500 },
  ];
}

// Minimal element-tree builder matching satori's expected shape
// ({ type, props: { style, children } }) - no React/JSX dependency needed.
function h(type, props = {}, children) {
  return { type, props: { ...props, children } };
}

// Shared chrome for every OG card: dark graphite-steel background, a flux
// amber accent bar down the left edge, and a small uppercase kicker line.
function baseFrame({ kicker, children }) {
  return h('div', {
    style: {
      display: 'flex',
      width: '100%',
      height: '100%',
      background: COLOR.ink950,
      fontFamily: 'IBM Plex Sans',
    },
  }, [
    h('div', { style: { display: 'flex', width: '14px', height: '100%', background: COLOR.amber500 } }),
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        padding: '72px 88px',
      },
    }, [
      h('div', {
        style: {
          display: 'flex',
          fontFamily: 'IBM Plex Mono',
          fontWeight: 500,
          fontSize: '26px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: COLOR.amber500,
          marginBottom: '28px',
        },
      }, kicker),
      ...children,
    ]),
  ]);
}

// Default, site-wide OG card: wordmark + tagline. Used for the home page and
// as the fallback for any page that doesn't pass a custom ogImage.
function defaultTemplate() {
  return baseFrame({
    kicker: 'Independent · UK · Research-led',
    children: [
      h('div', {
        style: {
          display: 'flex',
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          fontSize: '96px',
          lineHeight: 1.05,
          color: COLOR.white,
          marginBottom: '30px',
        },
      }, 'Best Cordless Drills'),
      h('div', { style: { display: 'flex', width: '160px', height: '6px', background: COLOR.amber700, marginBottom: '30px' } }),
      h('div', {
        style: {
          display: 'flex',
          fontFamily: 'IBM Plex Sans',
          fontWeight: 400,
          fontSize: '36px',
          lineHeight: 1.4,
          color: COLOR.steel300,
          maxWidth: '920px',
        },
      }, 'UK cordless drill buying guide, sourced not guessed.'),
    ],
  });
}

// Per-page-type template: same chrome, swaps in a page title.
function pageTemplate(title) {
  return baseFrame({
    kicker: 'Best Cordless Drills · bestcordlessdrills.uk',
    children: [
      h('div', {
        style: {
          display: 'flex',
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          fontSize: '60px',
          lineHeight: 1.18,
          color: COLOR.white,
          maxWidth: '980px',
          marginBottom: '30px',
        },
      }, title),
      h('div', { style: { display: 'flex', width: '120px', height: '6px', background: COLOR.amber700 } }),
    ],
  });
}

async function renderPng(node, fonts) {
  const svg = await satori(node, { width: WIDTH, height: HEIGHT, fonts });
  return sharp(Buffer.from(svg)).png().toBuffer();
}

// The 6 non-home wave-1 pages, titled from each page's real <h1> (no new copy).
const PAGES = [
  { slug: 'about', title: 'About Best Cordless Drills' },
  { slug: 'best-budget', title: 'Best Budget Cordless Drill UK: Full Buying Guide' },
  { slug: 'best-combi-drill', title: 'Best Cordless Combi Drill UK' },
  { slug: 'drill-vs-combi-vs-impact-driver', title: 'Drill vs combi drill vs impact driver: which one do you actually need?' },
  { slug: 'makita-vs-ozito', title: 'Makita vs Ozito: Is It Worth Paying More?' },
  { slug: 'own-brand-vs-premium', title: 'Own-brand vs premium cordless drills: are retailer drills worth it?' },
];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const fonts = await loadFonts();

  const defaultPng = await renderPng(defaultTemplate(), fonts);
  await writeFile(path.join(OUT_DIR, 'default.png'), defaultPng);
  console.log('Wrote public/og/default.png (site-wide default, also used by the home page)');

  for (const { slug, title } of PAGES) {
    const png = await renderPng(pageTemplate(title), fonts);
    await writeFile(path.join(OUT_DIR, `${slug}.png`), png);
    console.log(`Wrote public/og/${slug}.png`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
