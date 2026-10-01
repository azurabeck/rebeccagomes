import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { site } from '@/config/site';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          {t('builtWith')} ·{' '}
          <a
            href={site.links.repo}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-fg underline underline-offset-4 hover:text-link"
          >
            {t('source')}
          </a>
        </p>
      </Container>
    </footer>
  );
}
