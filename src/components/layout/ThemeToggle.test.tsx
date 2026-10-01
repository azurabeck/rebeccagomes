import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { renderWithIntl } from '@/test/render';
import { ThemeToggle } from './ThemeToggle';

function renderToggle() {
  return renderWithIntl(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );
}

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('has an accessible name', () => {
    renderToggle();

    expect(screen.getByRole('button', { name: 'Toggle color theme' })).toBeInTheDocument();
  });

  it('switches between light and dark on click', async () => {
    const user = userEvent.setup();
    renderToggle();
    const toggle = screen.getByRole('button', { name: 'Toggle color theme' });

    // The mocked matchMedia reports a light system preference.
    expect(document.documentElement).toHaveClass('light');

    await user.click(toggle);
    expect(document.documentElement).toHaveClass('dark');

    await user.click(toggle);
    expect(document.documentElement).toHaveClass('light');
  });

  it('remembers the choice', async () => {
    const user = userEvent.setup();
    renderToggle();

    await user.click(screen.getByRole('button', { name: 'Toggle color theme' }));

    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
