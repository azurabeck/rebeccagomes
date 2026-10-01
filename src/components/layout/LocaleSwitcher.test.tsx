import { screen, within } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { renderWithIntl } from '@/test/render';
import { LocaleSwitcher } from './LocaleSwitcher';

// next-intl's Link needs the Next.js router; stand in a plain anchor that
// builds the href the same way (locale prefix + pathname).
vi.mock('@/i18n/navigation', () => ({
  usePathname: () => '/',
  Link: ({ href, locale, ...props }: ComponentProps<'a'> & { locale: string }) => (
    <a href={`/${locale}${href === '/' ? '' : href}`} {...props} />
  ),
}));

describe('LocaleSwitcher', () => {
  it('links to every supported locale', () => {
    renderWithIntl(<LocaleSwitcher />);

    const nav = screen.getByRole('navigation', { name: 'Language' });
    const links = within(nav).getAllByRole('link');

    expect(links.map((link) => link.getAttribute('href'))).toEqual(['/en', '/pt', '/es']);
    expect(links.map((link) => link.getAttribute('hreflang'))).toEqual(['en', 'pt', 'es']);
  });

  it('marks only the active locale as current', () => {
    renderWithIntl(<LocaleSwitcher />, { locale: 'pt' });

    expect(screen.getByRole('link', { name: /português/i })).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(screen.getByRole('link', { name: /english/i })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('link', { name: /español/i })).not.toHaveAttribute('aria-current');
  });

  it('labels the control in the active language', () => {
    renderWithIntl(<LocaleSwitcher />, { locale: 'es' });

    expect(screen.getByRole('navigation', { name: 'Idioma' })).toBeInTheDocument();
  });
});
