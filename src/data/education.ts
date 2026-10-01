import type { Messages } from 'next-intl';
import type { Accent } from '@/components/ui/Diamond';

export type EducationItem = {
  id: keyof Messages['education']['items'];
  school: string;
  start: number;
  end: number;
  accent: Accent;
};

export const education: readonly EducationItem[] = [
  { id: 'cs', school: 'Estácio, Rio de Janeiro', start: 2020, end: 2024, accent: 'blue' },
  { id: 'design', school: 'Estácio, Rio de Janeiro', start: 2012, end: 2016, accent: 'pink' },
];

export type SpokenLanguage = {
  id: keyof Messages['education']['languages']['levels'];
  /** Shown in the language itself, so it is not translated. */
  name: string;
};

export const spokenLanguages: readonly SpokenLanguage[] = [
  { id: 'pt', name: 'Português' },
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' },
];
