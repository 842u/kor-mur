import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import FeaturedProjectCard from './FeaturedProjectCard';
import { getDefaultFeaturedProjectSetup } from './getFeaturedProjectSetup';

const defaultFeaturedProject = getDefaultFeaturedProjectSetup();

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: 'default-tag-slug',
    },
  }),
}));

describe('FeaturedProjectCard', () => {
  it('should render FeaturedProjectInfo', async () => {
    render(<FeaturedProjectCard project={defaultFeaturedProject} />);

    const projectInfo = screen.getByTestId('featured-project-info');

    await waitFor(() => expect(projectInfo).toBeInTheDocument());
  });

  it('should render main image of provided project', async () => {
    render(<FeaturedProjectCard project={defaultFeaturedProject} />);

    const projectImage = screen.getByRole('img', {
      name: 'Main image of Default Featured Project Name project.',
    });

    await waitFor(() => expect(projectImage).toBeInTheDocument());
  });

  it('should render link to provided project', async () => {
    render(<FeaturedProjectCard project={defaultFeaturedProject} />);

    const projectLink = screen.getByRole('link', {
      name: 'Main image of Default Featured Project Name project.',
    });

    await waitFor(() => {
      expect(projectLink).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(projectLink).toHaveAttribute(
        'href',
        expect.stringContaining(defaultFeaturedProject.slug.current)
      );
    });
  });
});
