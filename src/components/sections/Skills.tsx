import { useTranslations } from 'next-intl';
import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillGroups } from '@/data/skills';

export function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          id="skills-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          accent="yellow"
        />

        <Reveal>
          <dl className="divide-y divide-line border-y border-line">
            {skillGroups.map((group) => (
              <div key={group.id} className="grid grid-cols-12 gap-x-6 gap-y-3 py-6">
                <dt className="col-span-12 font-display font-semibold md:col-span-3">
                  {t(`groups.${group.id}`)}
                </dt>
                <dd className="col-span-12 md:col-span-9">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => {
                      const label = typeof skill === 'string' ? skill : t(`labels.${skill.label}`);
                      return (
                        <li key={label}>
                          <Chip>{label}</Chip>
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
