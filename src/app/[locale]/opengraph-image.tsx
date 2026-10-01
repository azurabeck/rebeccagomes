import { ImageResponse } from 'next/og';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { site } from '@/config/site';
import { routing } from '@/i18n/routing';

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// next/og renders outside the page, so the design tokens are repeated here.
const colors = {
  bg: '#0e0e10',
  fg: '#f2f2f3',
  muted: '#a1a1aa',
  accents: ['#e5484d', '#3e8fb0', '#f5b82e', '#d6409f'],
};

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 80,
        background: colors.bg,
        color: colors.fg,
      }}
    >
      <div style={{ display: 'flex', gap: 28, paddingLeft: 12 }}>
        {colors.accents.map((color) => (
          <div
            key={color}
            style={{ width: 36, height: 36, background: color, transform: 'rotate(45deg)' }}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
          {t('headline')}
        </div>
        <div style={{ fontSize: 30, color: colors.muted }}>{`${site.name} · ${t('eyebrow')}`}</div>
      </div>
    </div>,
    size,
  );
}
