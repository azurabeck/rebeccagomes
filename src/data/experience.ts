import type { Messages } from 'next-intl';
import type { Accent } from '@/components/ui/Diamond';

export type RoleKind = 'dev' | 'lead' | 'qa';

export const roleKindAccent: Record<RoleKind, Accent> = {
  dev: 'blue',
  lead: 'yellow',
  qa: 'pink',
};

export type ExperienceItem = {
  id: keyof Messages['experience']['items'];
  company: string;
  kind: RoleKind;
  start: number;
  /** `null` means the role is current. */
  end: number | null;
};

export const experience: readonly ExperienceItem[] = [
  { id: 'lifemed', company: 'Lifemed', kind: 'dev', start: 2025, end: null },
  {
    id: 'foursys',
    company: 'Foursys / Safra International Bank',
    kind: 'lead',
    start: 2024,
    end: 2025,
  },
  { id: 'mercadoLivre', company: 'Mercado Livre', kind: 'lead', start: 2023, end: 2024 },
  { id: 'cyberlabs', company: 'CyberLabs', kind: 'lead', start: 2022, end: 2023 },
  { id: 'psafeLead', company: 'PSafe', kind: 'lead', start: 2019, end: 2021 },
  { id: 'psafeDev', company: 'PSafe', kind: 'dev', start: 2017, end: 2019 },
  { id: 'psafeQa', company: 'PSafe', kind: 'qa', start: 2011, end: 2017 },
];

export type CareerStep = {
  id: keyof Messages['about']['arc']['steps'];
  kind: RoleKind;
  year: number;
};

export const careerArc: readonly CareerStep[] = [
  { id: 'qa', kind: 'qa', year: 2011 },
  { id: 'developer', kind: 'dev', year: 2017 },
  { id: 'lead', kind: 'lead', year: 2019 },
  { id: 'developerAgain', kind: 'dev', year: 2025 },
];
