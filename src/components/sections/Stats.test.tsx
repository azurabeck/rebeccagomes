import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithIntl } from '@/test/render';
import { Stats } from './Stats';

/** Reads the <dl> as "value label" strings, in display order. */
function readStats() {
  return screen
    .getAllByRole('term')
    .map((term) => `${term.nextElementSibling?.textContent} ${term.textContent}`);
}

describe('Stats', () => {
  it('shows the four career numbers', () => {
    renderWithIntl(<Stats />);

    expect(readStats()).toEqual([
      '15 years in tech',
      '8+ years in frontend',
      '2 AI-powered apps live',
      '3 languages',
    ]);
  });

  it.each([
    ['pt', '8+ anos em frontend'],
    ['es', '8+ años en frontend'],
  ] as const)('translates the frontend stat to %s', (locale, expected) => {
    renderWithIntl(<Stats />, { locale });

    expect(readStats()).toContain(expected);
  });
});
