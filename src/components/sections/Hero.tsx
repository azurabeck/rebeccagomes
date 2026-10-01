import { useTranslations } from 'next-intl';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/ui/icons';
import { site } from '@/config/site';
import { HeroArt } from './HeroArt';

const social = [
  { key: 'github', href: site.links.github, Icon: GitHubIcon, external: true },
  { key: 'linkedin', href: site.links.linkedin, Icon: LinkedInIcon, external: true },
  { key: 'email', href: `mailto:${site.email}`, Icon: MailIcon, external: false },
] as const;

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="top" aria-labelledby="hero-title" className="pt-24 pb-16 md:pt-40 md:pb-24">
      <Container className="grid grid-cols-12 items-center gap-x-6 gap-y-10">
        {/* Art comes first in the DOM so it stacks above the text on mobile. */}
        <div className="col-span-12 lg:order-last lg:col-span-5">
          <HeroArt />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <p className="mb-6 text-sm font-medium text-muted">{t('eyebrow')}</p>
          <h1 id="hero-title" className="font-display text-display font-bold text-balance">
            {t('headline')}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t('lead')}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#projects">{t('viewProjects')}</ButtonLink>
            <ButtonLink href={site.cvPath} variant="secondary" download>
              <DownloadIcon className="size-4" />
              {t('downloadCv')}
            </ButtonLink>
          </div>

          <ul aria-label={t('social.label')} className="mt-10 -ml-3 flex gap-1">
            {social.map(({ key, href, Icon, external }) => (
              <li key={key}>
                <a
                  href={href}
                  aria-label={t(`social.${key}`)}
                  {...(external && { target: '_blank', rel: 'noreferrer' })}
                  className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
