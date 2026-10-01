const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: 'Rebecca Souza',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000'),
  email: 'rebeccagsouza@gmail.com',
  /** International format, digits only. */
  phone: '5521975803541',
  cvPath: '/cv/rebecca-souza-cv.pdf',
  links: {
    github: 'https://github.com/azurabeck',
    linkedin: 'https://www.linkedin.com/in/rebecca-souza-11954b16b/?locale=en-US',
    repo: 'https://github.com/azurabeck/rebeccagomes',
  },
} as const;

export const navSections = ['about', 'projects', 'experience', 'contact'] as const;
