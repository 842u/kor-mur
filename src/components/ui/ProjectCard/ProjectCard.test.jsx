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
};

describe('ProjectCard', () => {
  it('should render project image', async () => {
    render(<ProjectCard project={projectData} />);

    const projectImage = screen.getByAltText(`${projectData.name} project image`);

    await waitFor(() => expect(projectImage).toBeInTheDocument());
  });

  it('should render project link', async () => {
    render(<ProjectCard project={projectData} />);

    const projectLink = screen.getByRole('link');

    await waitFor(() => {
      expect(projectLink).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(projectLink).toHaveAttribute('href', `/projects/${projectData.slug.current}`);
    });
  });
});
