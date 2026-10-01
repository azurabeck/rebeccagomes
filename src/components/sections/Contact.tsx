import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { ArrowUpRightIcon, TelegramIcon, WhatsAppIcon } from '@/components/ui/icons';
import { site } from '@/config/site';
import { cn } from '@/lib/cn';

const messaging = [
  {
    key: 'whatsapp',
    href: `https://wa.me/${site.phone}`,
    Icon: WhatsAppIcon,
    className: 'bg-action text-action-fg hover:bg-action-hover',
  },
  {
    key: 'telegram',
    href: `https://t.me/+${site.phone}`,
    Icon: TelegramIcon,
    className: 'border border-inverse-muted text-inverse-fg hover:border-inverse-fg',
  },
] as const;

const links = [
  { key: 'linkedin', href: site.links.linkedin },
  { key: 'github', href: site.links.github },
] as const;

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-inverse-bg py-20 text-inverse-fg md:py-32"
    >
      <Container>
        <h2
          id="contact-title"
          className="max-w-3xl font-display text-display font-bold text-balance"
        >
          {t('headline')}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-inverse-muted">{t('lead')}</p>

        <ul aria-label={t('messagingLabel')} className="mt-10 flex flex-wrap gap-4">
          {messaging.map(({ key, href, Icon, className }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'inline-flex h-12 items-center gap-2.5 rounded-full px-6 text-sm font-semibold transition motion-safe:hover:-translate-y-0.5',
                  className,
                )}
              >
                <Icon className="size-4.5" />
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${site.email}`}
            className="font-display text-2xl font-semibold break-all underline decoration-inverse-muted underline-offset-8 transition-colors hover:decoration-accent-red sm:text-4xl"
          >
            {site.email}
          </a>
          <CopyEmailButton email={site.email} />
        </div>

        <ul className="mt-12 flex gap-8 border-t border-inverse-line pt-8">
          {links.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-accent-yellow"
              >
                {t(key)}
                <ArrowUpRightIcon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
