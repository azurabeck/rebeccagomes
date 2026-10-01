import { screen, within } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { renderWithIntl } from '@/test/render';
import { Education } from './Education';

beforeAll(() => {
  // <Reveal> observes its children; jsdom has no IntersectionObserver.
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      disconnect() {}
    },
  );
});

describe('Education', () => {
  it('is reachable through the #education anchor and labelled by its title', () => {
    renderWithIntl(<Education />);

    const section = screen.getByRole('region', { name: 'Technology and design, side by side.' });

    expect(section).toHaveAttribute('id', 'education');
  });

  it('renders both degrees with school and period', () => {
    renderWithIntl(<Education />);

    const cs = screen.getByRole('heading', { name: 'B.Sc. in Computer Science' }).closest('li')!;
    const design = screen.getByRole('heading', { name: 'Industrial Design' }).closest('li')!;

    expect(cs).toHaveTextContent('Estácio, Rio de Janeiro · 2020–2024');
    expect(design).toHaveTextContent('Estácio, Rio de Janeiro · 2012–2016');
  });

  it('shows the note and description only where the copy has them', () => {
    renderWithIntl(<Education />);

    const cs = screen.getByRole('heading', { name: 'B.Sc. in Computer Science' }).closest('li')!;
    const design = screen.getByRole('heading', { name: 'Industrial Design' }).closest('li')!;

    expect(within(design).getByText('8 semesters of coursework')).toBeInTheDocument();
    expect(
      within(design).getByText(
        'The design foundation that still guides my eye for layout, form and detail.',
      ),
    ).toBeInTheDocument();
    expect(within(cs).queryByText(/semesters/)).not.toBeInTheDocument();
  });

  it('lists spoken languages with their level', () => {
    renderWithIntl(<Education />);

    const heading = screen.getByRole('heading', { name: 'Languages' });
    const items = within(heading.parentElement!).getAllByRole('listitem');

    expect(items.map((item) => item.textContent)).toEqual([
      'Português (native)',
      'English (B2)',
      'Español (intermediate)',
    ]);
  });

  it.each([
    ['pt', 'Bacharelado em Ciência da Computação', 'Desenho Industrial', '8 semestres cursados'],
    [
      'es',
      'Licenciatura en Ciencias de la Computación',
      'Diseño Industrial',
      '8 semestres cursados',
    ],
  ] as const)('is translated to %s', (locale, cs, design, note) => {
    renderWithIntl(<Education />, { locale });

    expect(screen.getByRole('heading', { name: cs })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: design })).toBeInTheDocument();
    expect(screen.getByText(note)).toBeInTheDocument();
  });
});
