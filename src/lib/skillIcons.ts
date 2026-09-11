import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

export type SimpleIconKey = keyof typeof icons;

export function getSimpleIcon(key: SimpleIconKey): SimpleIcon | null {
  const icon = icons[key];
  if (!icon || typeof icon !== 'object' || !('path' in icon)) return null;
  return icon as SimpleIcon;
}

/**
 * Official simple-icons brand logos (monochrome SVG paths + brand hex).
 */
export const brandIconMap = {
  html5: 'siHtml5',
  css3: 'siCss',
  tailwindcss: 'siTailwindcss',
  javascript: 'siJavascript',
  nodejs: 'siNodedotjs',
  postgresql: 'siPostgresql',
  mysql: 'siMysql',
  github: 'siGithub',
  git: 'siGit',
  python: 'siPython',
  astro: 'siAstro',
  vercel: 'siVercel',
  wordpress: 'siWordpress',
  notion: 'siNotion',
  trello: 'siTrello',
  meta: 'siMeta',
  mailchimp: 'siMailchimp',
  zapier: 'siZapier',
  seo: 'siGooglesearchconsole',
  elementor: 'siElementor',
  figma: 'siFigma',
  shopify: 'siShopify',
  wix: 'siWix',
  chatgpt: 'siOpenai',
  claude: 'siClaude',
  gemini: 'siGooglegemini',
  metabusiness: 'siMeta',
} as const satisfies Record<string, SimpleIconKey>;

/**
 * Full-color official / brand-kit logo assets for tools not in simple-icons
 * (or where multi-color marks are more recognizable).
 */
export const assetIconMap = {
  gohighlevel: '/skills/gohighlevel.png',
  systemeio: '/skills/systemeio.svg',
  clickfunnels: '/skills/clickfunnels.png',
  canva: '/skills/canva.png',
  capcut: '/skills/capcut.png',
  adobephotoshop: '/skills/adobephotoshop.svg',
  microsoftoffice: '/skills/microsoftoffice.svg',
  googleworkspace: '/skills/googleworkspace.svg',
  googleforms: '/skills/googleforms.svg',
  gorgias: '/skills/gorgias.svg',
  jotform: '/skills/jotform.png',
  powershell: '/skills/powershell.svg',
  mysqlcolor: '/skills/mysql.svg',
  klaviyo: '/skills/klaviyo.png',
  grok: '/skills/grok.svg',
} as const satisfies Record<string, string>;

export type BrandIconId = keyof typeof brandIconMap;
export type AssetIconId = keyof typeof assetIconMap;
export type SkillIconId = BrandIconId | AssetIconId;

export type SkillLogoType = 'brand' | 'asset';

export function getSkillLogoType(id: SkillIconId): SkillLogoType {
  return id in brandIconMap ? 'brand' : 'asset';
}

/** Relative luminance of a #RRGGBB brand color (0–1). Used for contrast. */
export function brandLuminance(hex: string): number {
  const h = hex.replace('#', '');
  if (h.length !== 6) return 0.5;
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
