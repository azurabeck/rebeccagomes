import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';

const items = ['years', 'frontend', 'ai', 'languages'] as const;

export function Stats() {
  const t = useTranslations('stats');

  return (
    <section aria-label={t('label')} className="border-y border-line">
      <Container>
        <dl className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-line">
          {items.map((item) => (
            <div key={item} className="flex flex-col-reverse gap-1 py-8 md:px-8 md:first:pl-0">
              <dt className="text-sm text-muted">{t(`items.${item}.label`)}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight">
                {t(`items.${item}.value`)}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
