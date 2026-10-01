import type { Messages } from 'next-intl';

type SkillLabelKey = keyof Messages['skills']['labels'];

/** A plain string is shown as is; `{ label }` is looked up in the messages. */
export type Skill = string | { label: SkillLabelKey };

export type SkillGroup = {
  id: keyof Messages['skills']['groups'];
  items: readonly Skill[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'frontend',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Vue.js',
      'Tailwind',
      'SASS',
      'Styled-components',
      'Zustand',
      'Vite',
    ],
  },
  { id: 'data', items: ['REST', 'Axios', 'Firebase'] },
  { id: 'ai', items: ['Gemini API'] },
  { id: 'tools', items: ['Git', 'GitLab', { label: 'dockerBasics' }, 'Vercel'] },
  {
    id: 'practices',
    items: [
      { label: 'testing' },
      { label: 'accessibility' },
      { label: 'scrum' },
      { label: 'codeReview' },
    ],
  },
];
