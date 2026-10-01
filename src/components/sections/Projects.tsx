import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/Badge';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { ArrowUpRightIcon, GitHubIcon } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects as allProjects, type Project } from '@/data/projects';
import { cn } from '@/lib/cn';

const linkClass =
  'inline-flex items-center gap-1.5 font-semibold text-fg underline decoration-line underline-offset-8 transition-colors hover:text-link hover:decoration-link';

export function Projects({ projects = allProjects }: { projects?: readonly Project[] }) {
  const t = useTranslations('projects');

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          id="projects-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          accent="red"
        />

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article className="group grid grid-cols-12 items-center gap-x-6 gap-y-8">
                <div
                  className={cn('col-span-12 lg:col-span-7', index % 2 === 1 && 'lg:order-last')}
                >
                  <BrowserFrame url={new URL(project.demoUrl).host}>
                    <Image
                      src={project.image}
                      alt={t('screenshotAlt', { title: project.title })}
                      width={1440}
                      height={900}
                      sizes="(min-width: 1024px) 680px, 100vw"
                      className="h-auto w-full"
                    />
                  </BrowserFrame>
                </div>

                <div className="col-span-12 lg:col-span-5 lg:px-6">
                  {project.aiPowered && <Badge accent={project.accent}>{t('aiBadge')}</Badge>}
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {t(`items.${project.slug}.description`)}
                  </p>

                  <ul aria-label={t('stackLabel')} className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex gap-8 text-sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t('liveDemo')}: ${project.title}`}
                      className={linkClass}
                    >
                      {t('liveDemo')}
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t('code')}: ${project.title}`}
                      className={linkClass}
                    >
                      <GitHubIcon className="size-4" />
                      {t('code')}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
