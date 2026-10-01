import { Diamond, type Accent } from './Diamond';

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  accent: Accent;
};

export function SectionHeading({ id, eyebrow, title, accent }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-4 flex items-center gap-2 text-sm font-medium text-muted">
        <Diamond accent={accent} />
        {eyebrow}
      </p>
      <h2 id={id} className="max-w-3xl font-display text-title font-semibold text-balance">
        {title}
      </h2>
    </div>
  );
}
