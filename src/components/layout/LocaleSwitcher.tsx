'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/cn';

export function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher');
  const activeLocale = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label={t('label')}>
      <ul className="flex rounded-full border border-line p-0.5">
        {routing.locales.map((locale) => {
          const isActive = locale === activeLocale;
          return (
            <li key={locale}>
              <Link
                href={pathname}
                locale={locale}
                hrefLang={locale}
                lang={locale}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'block rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors',
                  isActive ? 'bg-fg text-bg' : 'text-muted hover:text-fg',
                )}
              >
                {locale}
                <span className="sr-only"> ({t(`names.${locale}`)})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
