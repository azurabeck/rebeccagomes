import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Diamond } from '@/components/ui/Diamond';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { careerArc, roleKindAccent } from '@/data/experience';

const paragraphs = ['p1', 'p2', 'p3'] as const;

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-32">
      <Container>
        <SectionHeading id="about-title" eyebrow={t('eyebrow')} title={t('title')} accent="pink" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <Reveal className="col-span-12 space-y-5 text-lg leading-relaxed text-muted lg:col-span-6 lg:pr-12">
            {paragraphs.map((key) => (
              <p key={key}>{t(`paragraphs.${key}`)}</p>
            ))}
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-6">
            <div className="rounded-xl border border-line bg-surface p-6 md:p-8">
              <h3 className="mb-8 text-sm font-medium text-muted">{t('arc.title')}</h3>
              <ol className="grid gap-y-5 sm:grid-cols-4">
                {careerArc.map((step) => (
                  <li key={step.id} className="group relative flex items-center gap-x-4 sm:block">
                    {/* Connector to the next step (horizontal layout only). */}
                    <span
                      aria-hidden="true"
                      className="absolute top-2.5 right-0 left-5 hidden h-px bg-line sm:block sm:group-last:hidden"
                    />
                    <Diamond accent={roleKindAccent[step.kind]} className="relative size-5" />
                    <p className="flex-1 font-display text-sm font-semibold sm:mt-4 sm:pr-3">
                      {t(`arc.steps.${step.id}`)}
                    </p>
                    <p className="text-sm text-muted">{step.year}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
