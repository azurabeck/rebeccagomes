'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';
import { navSections } from '@/config/site';
import { LocaleSwitcher } from './LocaleSwitcher';
import { ThemeToggle } from './ThemeToggle';

/** Mobile navigation. A native <dialog> gives focus trapping and Esc for free. */
export function MobileDrawer() {
  const t = useTranslations('nav');
  const dialog = useRef<HTMLDialogElement>(null);

  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label={t('openMenu')}
        aria-haspopup="dialog"
        className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-line md:hidden"
      >
        <MenuIcon />
      </button>

      <dialog
        ref={dialog}
        aria-label={t('menu')}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="m-0 ml-auto h-dvh max-h-none w-[min(20rem,85vw)] max-w-none border-l border-line bg-surface text-fg backdrop:bg-scrim open:flex open:flex-col motion-safe:open:animate-drawer-in"
      >
        <div className="flex h-16 items-center justify-end px-6">
          <button
            type="button"
            onClick={close}
            aria-label={t('closeMenu')}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-line"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label={t('label')} className="flex-1 px-6">
          <ul>
            {navSections.map((section) => (
              <li key={section} className="border-b border-line">
                <a
                  href={`#${section}`}
                  onClick={close}
                  className="block py-4 font-display text-2xl font-semibold"
                >
                  {t(section)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-between p-6">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </dialog>
    </>
  );
}
