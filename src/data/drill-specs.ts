// Published manufacturer/retailer specs for the 9 combi drills this site ranks.
// Every non-null figure has a source URL. null = not published or not found; never estimate.
export const SPECS_CHECKED = '2026-09-28';

export type Tier = 'premium' | 'own';

export interface DrillSpec {
  id: string;
  name: string;
  brand: string;
  model: string;
  tier: Tier;
  seller: string;
  platform: string;
  voltage: number;
  brushless: boolean | null;
  torqueNm: number | null;
  torqueBasis: string;
  topRpm: number;
  impactBpm: number | null;
  chuckMm: number;
  clutch: string;
  weightKg: number | null;
  weightBasis: string;
  checked: string;
  sourceLabel: string;
  source: string;
  extraSources?: { label: string; href: string }[];
  note?: string;
}

const MAKITA = 'https://www.makitauk.com/product/dhp484.html';
const DEWALT_MANUAL = 'https://service.dewalt.co.uk/i/DEWALT/GLOBALBOM/GB/DCD796/1/Instruction_Manual/EN/DCD791-DCD796-TYP1-10_GB-XE.pdf';
const DEWALT_KIT = 'https://www.dewalt.co.uk/en-gb/product/dcd796p2-gb/18v-xr-brushless-hammer-drill-driver-2-5ah-batteries';
const BOSCH = 'https://www.bosch-professional.com/gb/en/products/gsb-18v-55-06019H5302';
const TITAN = 'https://www.screwfix.com/p/titan-tti1257com-18v-2-x-2-0ah-li-ion-txp-cordless-combi-drill/709af';
const RYOBI = 'https://uk.ryobitools.eu/power-tools/drilling-and-screwdriving/combi-drill/r18pd3/r18pd3-0/';
const RYOBI_TS = 'https://www.toolstation.com/ryobi-18v-one-r18pd3-2c20s-cordless-combi-drill/pAI893';
const MILWAUKEE = 'https://www.milwaukeetool.eu/en-eu/m18-compact-percussion-drill/m18-bpd/';
const OZITO = 'https://www.tooled-up.com/ozito-pxbhs-18v-cordless-brushless-combi-drill/prod/100009555/';
const ERBAUER = 'https://www.screwfix.com/p/erbauer-eri1107com-18v-li-ion-ext-brushless-cordless-combi-drill-bare/815ym';
const MACALLISTER = 'https://www.diy.com/departments/mac-allister-solo-18v-li-ion-brushed-cordless-combi-drill-2-x-2ah-mcd18-li-2/5059340253497_BQ.prd';

export const DRILL_SPECS: DrillSpec[] = [
  {
    id: 'dewalt-dcd796n', name: 'DeWalt DCD796N', brand: 'DeWalt', model: 'DCD796N', tier: 'premium',
    seller: 'DeWalt (trade brand)', platform: 'DeWalt 18V XR', voltage: 18, brushless: true,
    torqueNm: 70, torqueBasis: 'Max torque, hard joint', topRpm: 2000, impactBpm: 34000, chuckMm: 13,
    clutch: '15', weightKg: 1.2, weightBasis: 'Without battery', checked: SPECS_CHECKED,
    sourceLabel: 'DeWalt UK instruction manual', source: DEWALT_MANUAL,
    extraSources: [{ label: 'DeWalt UK kit page (motor, clutch)', href: DEWALT_KIT }],
    note: 'DeWalt UK lists the bare DCD796N at URLs that now return 404. The same tool is sold as the DCD796P2 kit. The kit page gives 15 clutch positions in its features and 14 in its spec table.',
  },
  {
    id: 'makita-dhp484z', name: 'Makita DHP484Z', brand: 'Makita', model: 'DHP484Z', tier: 'premium',
    seller: 'Makita (trade brand)', platform: 'Makita LXT 18V', voltage: 18, brushless: true,
    torqueNm: 65, torqueBasis: 'Max torque. Makita also lists 54 Nm max fastening torque (hard joint)', topRpm: 2000, impactBpm: 30000, chuckMm: 13,
    clutch: '21', weightKg: 1.2, weightBasis: 'Product net weight, bare tool', checked: SPECS_CHECKED,
    sourceLabel: 'Makita UK product page', source: MAKITA,
  },
  {
    id: 'milwaukee-m18-bpd-402c', name: 'Milwaukee M18 BPD-402C', brand: 'Milwaukee', model: 'M18 BPD-402C', tier: 'premium',
    seller: 'Milwaukee (trade brand)', platform: 'Milwaukee M18', voltage: 18, brushless: null,
    torqueNm: 60, torqueBasis: 'Max torque, 402C kit variant (the bare -0 and -202C variants list 50 Nm)', topRpm: 1800, impactBpm: 28800, chuckMm: 13,
    clutch: '18', weightKg: null, weightBasis: 'Not published on the spec page', checked: SPECS_CHECKED,
    sourceLabel: 'Milwaukee Europe product page', source: MILWAUKEE,
    note: 'Milwaukee describes a 4-pole motor and does not call this model brushless.',
  },
  {
    id: 'bosch-gsb-18v-55', name: 'Bosch GSB 18V-55', brand: 'Bosch', model: 'GSB 18V-55 Professional', tier: 'premium',
    seller: 'Bosch Professional (trade brand)', platform: 'Bosch Professional 18V (AMPShare)', voltage: 18, brushless: true,
    torqueNm: 55, torqueBasis: 'Max torque, hard joint', topRpm: 1800, impactBpm: null, chuckMm: 13,
    clutch: '20 + 2', weightKg: 1.0, weightBasis: 'Excluding battery', checked: SPECS_CHECKED,
    sourceLabel: 'Bosch Professional GB product page', source: BOSCH,
    note: 'Bosch confirms impact drilling in masonry but publishes no impact rate on the GB spec table.',
  },
  {
    id: 'titan-tti1257com', name: 'Titan TTI1257COM', brand: 'Titan', model: 'TTI1257COM', tier: 'own',
    seller: 'Screwfix own-brand', platform: 'Titan TXP 18V', voltage: 18, brushless: false,
    torqueNm: 50, torqueBasis: 'Max torque (basis not stated)', topRpm: 1550, impactBpm: 26400, chuckMm: 13,
    clutch: '22', weightKg: 1.8, weightBasis: 'With 2.0Ah battery', checked: SPECS_CHECKED,
    sourceLabel: 'Screwfix product page (2 x 2.0Ah kit)', source: TITAN,
  },
  {
    id: 'ryobi-r18pd3', name: 'Ryobi R18PD3', brand: 'Ryobi', model: 'R18PD3', tier: 'premium',
    seller: 'Ryobi (consumer brand)', platform: 'Ryobi 18V ONE+', voltage: 18, brushless: false,
    torqueNm: 50, torqueBasis: 'Max torque', topRpm: 1800, impactBpm: 23400, chuckMm: 13,
    clutch: '24', weightKg: 1.3, weightBasis: 'Without battery', checked: SPECS_CHECKED,
    sourceLabel: 'Ryobi UK product page', source: RYOBI,
    extraSources: [{ label: 'Toolstation kit page (brushed motor)', href: RYOBI_TS }],
  },
  {
    id: 'ozito-pxbhs', name: 'Ozito PXBHS', brand: 'Ozito', model: 'PXBHS', tier: 'own',
    seller: 'Ozito (budget brand)', platform: 'Ozito PXC 18V', voltage: 18, brushless: true,
    torqueNm: 40, torqueBasis: 'Max torque (UK retailer listing)', topRpm: 1500, impactBpm: 24000, chuckMm: 13,
    clutch: '21', weightKg: 1.2, weightBasis: 'Battery status not stated', checked: SPECS_CHECKED,
    sourceLabel: 'Tooled-Up product page', source: OZITO,
    note: 'Ozito UK’s own site did not load on the check date, so a UK retailer listing is used.',
  },
  {
    id: 'erbauer-eri1107com', name: 'Erbauer ERI1107COM', brand: 'Erbauer', model: 'ERI1107COM', tier: 'own',
    seller: 'Screwfix own-brand', platform: 'Erbauer EXT 18V', voltage: 18, brushless: true,
    torqueNm: null, torqueBasis: 'Screwfix quotes 150 Nm without saying how it was measured', topRpm: 2000, impactBpm: 32000, chuckMm: 13,
    clutch: '24', weightKg: 1.9, weightBasis: 'Without battery', checked: SPECS_CHECKED,
    sourceLabel: 'Screwfix product page (bare tool)', source: ERBAUER,
    note: 'The 150 Nm figure is more than double every other drill here and is not comparable until the basis is published.',
  },
  {
    id: 'mac-allister-mcd18-li-2', name: 'Mac Allister MCD18-Li-2', brand: 'Mac Allister', model: 'MCD18-Li-2', tier: 'own',
    seller: 'B&Q own-brand', platform: 'Mac Allister Solo 18V', voltage: 18, brushless: false,
    torqueNm: null, torqueBasis: 'Not published by B&Q', topRpm: 1500, impactBpm: null, chuckMm: 13,
    clutch: '18', weightKg: null, weightBasis: 'Not published', checked: SPECS_CHECKED,
    sourceLabel: 'B&Q product page (Solo 2 x 2Ah kit)', source: MACALLISTER,
    note: 'The same B&Q page lists 18 torque settings in its spec table and 21 in its features. A newer B&Q listing with the same model code publishes different figures.',
  },
];
