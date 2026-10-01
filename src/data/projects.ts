import type { Messages } from 'next-intl';
import type { Accent } from '@/components/ui/Diamond';

/**
 * To add a project: append an entry here, drop a 1440x900 screenshot in
 * public/projects, and add its description under `projects.items.<slug>` in
 * each messages file. TypeScript flags a slug with no translation.
 */
export type Project = {
  slug: keyof Messages['projects']['items'];
  title: string;
  image: string;
  stack: readonly string[];
  demoUrl: string;
  codeUrl: string;
  aiPowered: boolean;
  accent: Accent;
};

export const projects: readonly Project[] = [
  {
    slug: 'maibook',
    title: 'Maibook',
    image: '/projects/maibook.png',
    stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Firebase', 'Gemini API'],
    demoUrl: 'https://maibook-tau.vercel.app/',
    codeUrl: 'https://github.com/azurabeck/maibook',
    aiPowered: true,
    accent: 'pink',
  },
  {
    slug: 'tickflix',
    title: 'TickFlix',
    image: '/projects/tickflix.png',
    stack: ['React', 'TypeScript', 'Vite', 'Firebase', 'Gemini API'],
    demoUrl: 'https://tickflix-umber.vercel.app/',
    codeUrl: 'https://github.com/azurabeck/tickflix',
    aiPowered: true,
    accent: 'blue',
  },
];
