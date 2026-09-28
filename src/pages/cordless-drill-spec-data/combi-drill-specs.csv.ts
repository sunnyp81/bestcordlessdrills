import type { APIRoute } from 'astro';
import { DRILL_SPECS } from '../../data/drill-specs';

const cell = (v: unknown) => {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export const GET: APIRoute = () => {
  const header = ['model', 'brand', 'seller', 'platform', 'voltage_v', 'motor', 'torque_nm', 'torque_basis', 'top_no_load_rpm', 'impact_bpm', 'chuck_mm', 'clutch_settings', 'weight_kg', 'weight_basis', 'source_url', 'checked'];
  const rows = DRILL_SPECS.map((d) => [
    d.name, d.brand, d.seller, d.platform, d.voltage,
    d.brushless === null ? 'not stated' : d.brushless ? 'brushless' : 'brushed',
    d.torqueNm, d.torqueBasis, d.topRpm, d.impactBpm, d.chuckMm, d.clutch, d.weightKg, d.weightBasis, d.source, d.checked,
  ]);
  const body = [header, ...rows].map((r) => r.map(cell).join(',')).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
