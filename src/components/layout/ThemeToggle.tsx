'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/ui/icons';

export function ThemeToggle() {
  const t = useTranslations('themeToggle');
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={t('label')}
      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-fg"
    >
      {/* Both icons render; CSS picks one, so there is no hydration mismatch. */}
      <SunIcon className="hidden size-4 dark:block" />
      <MoonIcon className="size-4 dark:hidden" />
    </button>
  );
}
