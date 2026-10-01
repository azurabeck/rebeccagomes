import { render, type RenderOptions } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactElement } from 'react';
import type { Locale } from '@/i18n/routing';
import en from '@/messages/en.json';
import es from '@/messages/es.json';
import pt from '@/messages/pt.json';

const messages = { en, pt, es };

type Options = RenderOptions & { locale?: Locale };

/** Renders with the real translation files, so tests assert on shipped copy. */
export function renderWithIntl(ui: ReactElement, { locale = 'en', ...options }: Options = {}) {
  return render(
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      {ui}
    </NextIntlClientProvider>,
    options,
  );
}
