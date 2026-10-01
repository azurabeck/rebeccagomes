import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Diamond } from '@/components/ui/Diamond';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience, roleKindAccent, type RoleKind } from '@/data/experience';

const kinds: readonly RoleKind[] = ['dev', 'lead', 'qa'];

export function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          id="experience-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          accent="blue"
        />

        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <ul
            aria-label={t('legendLabel')}
            className="col-span-12 flex flex-wrap gap-x-6 gap-y-2 self-start text-sm text-muted lg:col-span-3 lg:flex-col"
          >
            {kinds.map((kind) => (
              <li key={kind} className="flex items-center gap-2">
                <Diamond accent={roleKindAccent[kind]} />
                {t(`legend.${kind}`)}
              </li>
            ))}
          </ul>

          <ol className="col-span-12 ml-2 border-l border-line lg:col-span-9">
            {experience.map((item) => (
              <li key={item.id} className="relative pb-10 pl-8 last:pb-0 md:pl-10">
                <Diamond
                  accent={roleKindAccent[item.kind]}
                  className="absolute top-1 -left-2 size-4"
                />
                <Reveal>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {t(`items.${item.id}.role`)}
                    {/* Marker color carries meaning, so say it in words too. */}
                    <span className="sr-only"> ({t(`legend.${item.kind}`)})</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    <span className="font-medium text-fg">{item.company}</span>
                    {' · '}
                    {item.start}–{item.end ?? t('present')}
                  </p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    {t(`items.${item.id}.description`)}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
