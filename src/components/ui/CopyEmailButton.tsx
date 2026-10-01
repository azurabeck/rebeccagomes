'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CheckIcon, CopyIcon } from './icons';

const FEEDBACK_MS = 2000;

export function CopyEmailButton({ email }: { email: string }) {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timeout.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard access denied: the address is still selectable on the page.
      return;
    }
    setCopied(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), FEEDBACK_MS);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={t('copyAria')}
        className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-inverse-muted px-5 text-sm font-semibold text-inverse-fg transition-colors hover:border-inverse-fg"
      >
        {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
        {copied ? t('copied') : t('copy')}
      </button>
      <span role="status" className="sr-only">
        {copied ? t('copied') : ''}
      </span>
    </>
  );
}
