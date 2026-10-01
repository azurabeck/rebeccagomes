import { act, fireEvent, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderWithIntl } from '@/test/render';
import { CopyEmailButton } from './CopyEmailButton';

const EMAIL = 'someone@example.com';

describe('CopyEmailButton', () => {
  const writeText = vi.fn();

  beforeEach(() => {
    vi.useFakeTimers();
    writeText.mockReset().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  async function clickCopy() {
    // act + await flushes the clipboard promise before asserting.
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Copy email address' }));
    });
  }

  it('copies the email to the clipboard', async () => {
    renderWithIntl(<CopyEmailButton email={EMAIL} />);

    await clickCopy();

    expect(writeText).toHaveBeenCalledExactlyOnceWith(EMAIL);
  });

  it('shows "Copied!" and announces it to screen readers', async () => {
    renderWithIntl(<CopyEmailButton email={EMAIL} />);
    expect(screen.getByRole('button')).toHaveTextContent('Copy');
    expect(screen.getByRole('status')).toBeEmptyDOMElement();

    await clickCopy();

    expect(screen.getByRole('button')).toHaveTextContent('Copied!');
    expect(screen.getByRole('status')).toHaveTextContent('Copied!');
  });

  it('resets the feedback after two seconds', async () => {
    renderWithIntl(<CopyEmailButton email={EMAIL} />);
    await clickCopy();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByRole('button')).toHaveTextContent('Copy');
    expect(screen.getByRole('button')).not.toHaveTextContent('Copied!');
  });

  it('shows no feedback when the clipboard is unavailable', async () => {
    writeText.mockRejectedValue(new Error('denied'));
    renderWithIntl(<CopyEmailButton email={EMAIL} />);

    await clickCopy();

    expect(screen.getByRole('button')).not.toHaveTextContent('Copied!');
  });

  it('is translated', () => {
    renderWithIntl(<CopyEmailButton email={EMAIL} />, { locale: 'pt' });

    expect(screen.getByRole('button', { name: 'Copiar endereço de email' })).toHaveTextContent(
      'Copiar',
    );
  });
});
