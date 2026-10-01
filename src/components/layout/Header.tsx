'use client';

import { useSyncExternalStore } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { navSections } from '@/config/site';
import { cn } from '@/lib/cn';
import { LocaleSwitcher } from './LocaleSwitcher';
import { Logo } from './Logo';
import { MobileDrawer } from './MobileDrawer';
import { ThemeToggle } from './ThemeToggle';

function subscribeToScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );
}

export function Header() {
  const t = useTranslations('nav');
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
        <a href="#top" aria-label={t('home')} className="justify-self-start">
          <Logo />
        </a>

        <nav aria-label={t('label')} className="hidden md:block">
          <ul className="flex gap-8">
            {navSections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="text-sm font-medium text-muted transition-colors hover:text-fg"
                >
                  {t(section)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-3 flex items-center gap-3 justify-self-end">
          <div className="hidden items-center gap-3 md:flex">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
          <MobileDrawer />
        </div>
      </Container>
    </header>
  );
}
