import { useMessages, useTranslations } from 'next-intl';
import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { Diamond } from '@/components/ui/Diamond';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education, spokenLanguages } from '@/data/education';

/** Only the degree is required; the rest shows when the translation has it. */
type EducationCopy = { degree: string; note?: string; description?: string };

export function Education() {
  const t = useTranslations('education');
  const copyById: Record<string, EducationCopy> = useMessages().education.items;

  return (
    <section id="education" aria-labelledby="education-title" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          id="education-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          accent="red"
        />

        <Reveal>
          <ul className="grid gap-6 md:grid-cols-2">
            {education.map((item) => {
              const copy = copyById[item.id];
              if (!copy) return null;

              return (
                <li
                  key={item.id}
                  className="rounded-xl border border-line bg-surface p-6 transition hover:shadow-lift motion-safe:hover:-translate-y-1 md:p-8"
                >
                  <Diamond accent={item.accent} className="size-4" />
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                    {copy.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    <span className="font-medium text-fg">{item.school}</span>
                    {' · '}
                    {item.start}–{item.end}
                  </p>
                  {copy.note && (
                    <p className="mt-4">
                      <Chip>{copy.note}</Chip>
                    </p>
                  )}
                  {copy.description && (
                    <p className="mt-4 leading-relaxed text-muted">{copy.description}</p>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-3 border-t border-line pt-6">
            <h3 className="col-span-12 font-display font-semibold md:col-span-3">
              {t('languages.title')}
            </h3>
            <ul className="col-span-12 flex flex-wrap gap-2 md:col-span-9">
              {spokenLanguages.map((language) => (
                <li key={language.id}>
                  <Chip>
                    <span lang={language.id} className="font-medium text-fg">
                      {language.name}
                    </span>
                    &nbsp;({t(`languages.levels.${language.id}`)})
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
