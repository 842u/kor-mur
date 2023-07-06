import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import ProjectCard from './ProjectCard';

const projectData = {
  mainImage: {
    asset: {
      url: 'https://test.com',
    },
  },
  slug: {
    current: 'test-slug',
  },
  name: 'Test Project',
  description: 'Test description',
  tags: [{ name: 'tag-1' }, { name: 'tag-2' }],
};

describe('ProjectCard', () => {
  it('should render project name', async () => {
    render(<ProjectCard project={projectData} />);

    const projectName = screen.getByText(projectData.name);

    await waitFor(() => expect(projectName).toBeInTheDocument());
  });

  it('should render project description', async () => {
    render(<ProjectCard project={projectData} />);

    const projectDescription = screen.getByText(projectData.description);

    await waitFor(() => expect(projectDescription).toBeInTheDocument());
  });

  it('should render project image', async () => {
    render(<ProjectCard project={projectData} />);

    const projectImage = screen.getByAltText(`${projectData.name} main image`);

    await waitFor(() => expect(projectImage).toBeInTheDocument());
  });

  it('should render project tags', async () => {
    render(<ProjectCard project={projectData} />);

    projectData.tags.forEach(async (tag) => {
      const projectTag = screen.getByText(tag.name);

      await waitFor(() => expect(projectTag).toBeInTheDocument());
    });
  });

  it('should render project link', async () => {
    render(<ProjectCard project={projectData} />);

    const projectLink = screen.getByRole('link');

    await waitFor(() => {
      expect(projectLink).toBeInTheDocument();
    });

    expect(projectLink).toHaveAttribute('href', `/projects/${projectData.slug.current}`);
  });
});
