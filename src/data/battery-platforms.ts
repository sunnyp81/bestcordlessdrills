// UK 18V battery platforms. Tool counts are each maker's own published claim, not our count.
// null count = the maker or retailer publishes no figure. Never estimate.
export const PLATFORMS_CHECKED = '2026-09-28';

export type PlatformKind = 'trade' | 'consumer' | 'alliance';

export interface Platform {
  id: string;
  name: string;
  kind: PlatformKind;
  soldBy: string;
  toolCount: number | null;
  countLabel: string;
  countScope: string;
  garden: string;
  crossBrand: string;
  source: string;
  sourceLabel: string;
}

export const PLATFORMS: Platform[] = [
  {
    id: 'cas', name: 'CAS (Metabo-led alliance)', kind: 'alliance',
    soldBy: 'Metabo and partner brands, mostly trade suppliers',
    toolCount: 500, countLabel: '500+ tools', countScope: 'Global alliance figure, 50+ brands claimed',
    garden: 'Very few, trade focus', crossBrand: 'Yes, every CAS brand shares one 18V battery',
    source: 'https://cordless-alliance-system.com/en', sourceLabel: 'Cordless Alliance System',
  },
  {
    id: 'ampshare', name: 'AMPShare (Bosch Professional, blue)', kind: 'alliance',
    soldBy: 'Bosch Professional plus partner brands such as FEIN and Rothenberger',
    toolCount: 430, countLabel: '430+ tools', countScope: 'Alliance-wide, 35+ brands, GB site',
    garden: 'Not stated on the pages checked', crossBrand: 'Yes, within AMPShare. Not with Bosch green',
    source: 'https://ampshare.com/gb/en/', sourceLabel: 'AMPShare GB',
  },
  {
    id: 'einhell-pxc', name: 'Einhell Power X-Change', kind: 'consumer',
    soldBy: 'Einhell UK and DIY retailers',
    toolCount: 350, countLabel: '350+ tools', countScope: 'Einhell UK site',
    garden: 'Yes: mowers, trimmers, blowers', crossBrand: 'Some specialist partner tools',
    source: 'https://www.einhell.co.uk/power-x-change/', sourceLabel: 'Einhell UK',
  },
  {
    id: 'makita-lxt', name: 'Makita LXT 18V', kind: 'trade',
    soldBy: 'Makita UK dealers and trade retailers',
    toolCount: 325, countLabel: '325+ tools', countScope: 'Makita UK site, stated as a world figure',
    garden: 'Yes, a dedicated LXT garden range', crossBrand: 'No, Makita only',
    source: 'https://www.makitauk.com/lxt', sourceLabel: 'Makita UK',
  },
  {
    id: 'milwaukee-m18', name: 'Milwaukee M18', kind: 'trade',
    soldBy: 'Trade retailers such as Toolstation',
    toolCount: 325, countLabel: '325+ tools', countScope: 'Milwaukee Europe site, not UK-specific',
    garden: 'Yes, outdoor tools listed', crossBrand: 'No, Milwaukee only',
    source: 'https://www.milwaukeetool.eu/systems/m18/', sourceLabel: 'Milwaukee Europe',
  },
  {
    id: 'dewalt-xr', name: 'DeWalt 18V XR', kind: 'trade',
    soldBy: 'Trade and DIY retailers',
    toolCount: 250, countLabel: '250+ products', countScope: 'DeWalt UK site',
    garden: 'Some, e.g. hedge trimmers', crossBrand: 'No, DeWalt only',
    source: 'https://www.dewalt.co.uk/systems/cordless-ranges/18v-xr', sourceLabel: 'DeWalt UK',
  },
  {
    id: 'ryobi-one-plus', name: 'Ryobi 18V ONE+', kind: 'consumer',
    soldBy: 'DIY retailers such as Toolstation',
    toolCount: 200, countLabel: '200+ tools', countScope: 'Ryobi UK site, home and garden',
    garden: 'Yes, home and garden', crossBrand: 'No, Ryobi only',
    source: 'https://uk.ryobitools.eu/', sourceLabel: 'Ryobi UK',
  },
  {
    id: 'power-for-all', name: 'POWER FOR ALL (Bosch green)', kind: 'alliance',
    soldBy: 'Bosch DIY, Gardena, Husqvarna and partner brands',
    toolCount: 150, countLabel: '150+ products', countScope: 'Alliance-wide, 10+ brands, Bosch DIY GB site',
    garden: 'Yes, a garden-heavy alliance', crossBrand: 'Yes, within the alliance. Not with Bosch blue',
    source: 'https://www.bosch-diy.com/gb/en/landing/power-for-all/power-for-all', sourceLabel: 'Bosch DIY GB',
  },
  {
    id: 'parkside-x20v', name: 'Parkside X 20 V Team (Lidl)', kind: 'consumer',
    soldBy: 'Lidl, as seasonal stock',
    toolCount: 100, countLabel: '100+ products', countScope: 'Parkside GB site',
    garden: 'Yes, drills to leaf blowers', crossBrand: 'No, Parkside only',
    source: 'https://parkside-diy.com/gb/battery-technology/x20v-team', sourceLabel: 'Parkside GB',
  },
  {
    id: 'ozito-pxc', name: 'Ozito PXC', kind: 'consumer',
    soldBy: 'UK stockists not confirmed on the check date',
    toolCount: null, countLabel: 'No UK figure', countScope: 'Ozito Australia claims 125+ products',
    garden: 'Yes', crossBrand: 'Branded "powered by Einhell"; no explicit swap statement found',
    source: 'https://www.ozito.com.au/pxc', sourceLabel: 'Ozito Australia',
  },
  {
    id: 'erbauer-ext', name: 'Erbauer EXT 18V', kind: 'consumer',
    soldBy: 'Screwfix (own-brand)',
    toolCount: null, countLabel: 'Not published', countScope: 'Screwfix gives no count',
    garden: 'Not confirmed', crossBrand: 'No, Erbauer only',
    source: 'https://www.screwfix.com/brand/erbauer-18v-tools', sourceLabel: 'Screwfix',
  },
  {
    id: 'titan-txp', name: 'Titan TXP 18V', kind: 'consumer',
    soldBy: 'Screwfix (own-brand)',
    toolCount: null, countLabel: 'Not published', countScope: 'Screwfix gives no count',
    garden: 'Yes: mowers and trimmers', crossBrand: 'No, Titan TXP only',
    source: 'https://www.screwfix.com/brand/titan-txp', sourceLabel: 'Screwfix',
  },
  {
    id: 'mac-allister-solo', name: 'Mac Allister Solo 18V', kind: 'consumer',
    soldBy: 'B&Q (own-brand)',
    toolCount: null, countLabel: 'Not published', countScope: 'B&Q gives no count',
    garden: 'Yes, per B&Q', crossBrand: 'No, Mac Allister only',
    source: 'https://www.diy.com/departments/mac-allister-solo-18v-2ah-li-ion-power-tool-battery-mbat18-2/5059340253602_BQ.prd', sourceLabel: 'B&Q',
  },
];
