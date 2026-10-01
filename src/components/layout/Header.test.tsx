import { screen, within } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { renderWithIntl } from '@/test/render';
import { Header } from './Header';

vi.mock('@/i18n/navigation', () => ({
  usePathname: () => '/',
  Link: ({ href, locale, ...props }: ComponentProps<'a'> & { locale: string }) => (
    <a href={`/${locale}${href === '/' ? '' : href}`} {...props} />
  ),
}));

const expectedAnchors = ['#about', '#projects', '#experience', '#education', '#contact'];

function renderHeader(locale?: 'en' | 'pt' | 'es') {
  return renderWithIntl(
    <ThemeProvider>
      <Header />
    </ThemeProvider>,
    { locale },
  );
}

function hrefs(nav: HTMLElement) {
  return within(nav)
    .getAllByRole('link', { hidden: true })
    .map((link) => link.getAttribute('href'));
}

describe('Header navigation', () => {
  it('links to every section, in page order', () => {
    renderHeader();

    const [desktopNav] = screen.getAllByRole('navigation', { name: 'Main' });

    expect(hrefs(desktopNav!)).toEqual(expectedAnchors);
  });

  it('offers the same sections in the mobile drawer', () => {
    const { container } = renderHeader();

    // The drawer is a closed <dialog>, so its content is hidden from the a11y tree.
    const drawer = container.querySelector('dialog')!;
    const drawerNav = within(drawer).getByRole('navigation', { name: 'Main', hidden: true });

    expect(hrefs(drawerNav)).toEqual(expectedAnchors);
  });

  it.each([
    ['en', 'Education'],
    ['pt', 'Formação'],
    ['es', 'Formación'],
  ] as const)('labels the education link in %s', (locale, label) => {
    renderHeader(locale);

    const [link] = screen.getAllByRole('link', { name: label });

    expect(link).toHaveAttribute('href', '#education');
  });
});
