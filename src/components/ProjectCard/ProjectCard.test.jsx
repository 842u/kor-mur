import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

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
  it('should render project name', () => {
    render(<ProjectCard project={projectData} />);

    const projectName = screen.getByText(projectData.name);
    expect(projectName).toBeInTheDocument();
  });

  it('should render project description', () => {
    render(<ProjectCard project={projectData} />);

    const projectDescription = screen.getByText(projectData.description);
    expect(projectDescription).toBeInTheDocument();
  });

  it('should render project image', () => {
    render(<ProjectCard project={projectData} />);

    const projectImage = screen.getByAltText(`${projectData.name} main image`);
    expect(projectImage).toBeInTheDocument();
  });

  it('should render project tags', () => {
    render(<ProjectCard project={projectData} />);

    projectData.tags.forEach((tag) => {
      const projectTag = screen.getByText(tag.name);
      expect(projectTag).toBeInTheDocument();
    });
  });

  it('should render project link', () => {
    render(<ProjectCard project={projectData} />);

    const projectLink = screen.getByRole('link');
    expect(projectLink).toBeInTheDocument();
    expect(projectLink).toHaveAttribute('href', `/projects/${projectData.slug.current}`);
  });
});
