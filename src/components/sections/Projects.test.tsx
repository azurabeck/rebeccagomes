import { screen, within } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { projects, type Project } from '@/data/projects';
import en from '@/messages/en.json';
import es from '@/messages/es.json';
import pt from '@/messages/pt.json';
import { renderWithIntl } from '@/test/render';
import { Projects } from './Projects';

beforeAll(() => {
  // <Reveal> observes its children; jsdom has no IntersectionObserver.
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      disconnect() {}
    },
  );
});

describe('Projects', () => {
  it('renders a card for every project in the data file', () => {
    renderWithIntl(<Projects />);

    const cards = screen.getAllByRole('article');

    expect(cards).toHaveLength(projects.length);
    projects.forEach((project, index) => {
      const card = within(cards[index]!);
      expect(card.getByRole('heading', { name: project.title })).toBeInTheDocument();
      expect(card.getByText(en.projects.items[project.slug].description)).toBeInTheDocument();
    });
  });

  it('links each card to its demo and source in a new tab', () => {
    renderWithIntl(<Projects />);

    for (const project of projects) {
      const demo = screen.getByRole('link', { name: `Live demo: ${project.title}` });
      const code = screen.getByRole('link', { name: `Code: ${project.title}` });

      expect(demo).toHaveAttribute('href', project.demoUrl);
      expect(code).toHaveAttribute('href', project.codeUrl);
      expect(demo).toHaveAttribute('target', '_blank');
      expect(demo).toHaveAttribute('rel', 'noreferrer');
    }
  });

  it('lists the stack and gives the screenshot alt text', () => {
    renderWithIntl(<Projects />);
    const [project] = projects;
    const card = within(screen.getAllByRole('article')[0]!);

    const stack = within(card.getByRole('list', { name: 'Tech stack' })).getAllByRole('listitem');

    expect(stack.map((item) => item.textContent)).toEqual(project!.stack);
    expect(
      card.getByRole('img', { name: `Screenshot of the ${project!.title} app` }),
    ).toBeVisible();
  });

  it('shows the AI badge only on AI-powered projects', () => {
    const base = projects[0]!;
    const custom: Project[] = [
      { ...base, slug: 'maibook', aiPowered: true },
      { ...base, slug: 'tickflix', title: 'Plain', aiPowered: false },
    ];
    renderWithIntl(<Projects projects={custom} />);
    const [withAi, withoutAi] = screen.getAllByRole('article');

    expect(within(withAi!).getByText('AI-powered')).toBeInTheDocument();
    expect(within(withoutAi!).queryByText('AI-powered')).not.toBeInTheDocument();
  });

  it('renders translated descriptions', () => {
    renderWithIntl(<Projects />, { locale: 'pt' });

    expect(screen.getByText(pt.projects.items.maibook.description)).toBeInTheDocument();
  });

  it.each([
    ['pt', pt],
    ['es', es],
  ])('has a %s description for every project', (_locale, messages) => {
    for (const project of projects) {
      expect(messages.projects.items[project.slug].description).toBeTruthy();
    }
  });
});
