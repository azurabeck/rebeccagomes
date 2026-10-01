import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { site } from '@/config/site';
import { routing } from '@/i18n/routing';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['600', '700'],
  display: 'swap',
});

const openGraphLocale = { en: 'en_US', pt: 'pt_BR', es: 'es_ES' } as const;

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(site.url),
    title: t('title'),
    description: t('description'),
    authors: [{ name: site.name, url: site.links.github }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
        'x-default': `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      type: 'website',
      url: `/${locale}`,
      siteName: site.name,
      title: t('title'),
      description: t('description'),
      locale: openGraphLocale[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => openGraphLocale[l]),
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Opts the route into static rendering.
  setRequestLocale(locale);

  return (
    // next-themes sets the theme class on <html> before hydration.
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
