import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { getFeaturedProjectSchema } from '@/utils/dataSetup/dataSchemas/featuredProject';
import { mockType } from '@/utils/dataSetup/dataTypes';

import FeaturedProjectCard from './FeaturedProjectCard';

const mockData = getFeaturedProjectSchema(mockType);

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: 'default-tag-slug',
    },
  }),
}));

describe('FeaturedProjectCard', () => {
  it('should render FeaturedProjectInfo', async () => {
    render(<FeaturedProjectCard project={mockData} />);

    const projectInfo = screen.getByTestId('featured-project-info');

    await waitFor(() => expect(projectInfo).toBeInTheDocument());
  });

  it('should render main image of provided project', async () => {
    render(<FeaturedProjectCard project={mockData} />);

    const projectImage = screen.getByRole('img', {
      name: `Główne zdjęcie porjektu ${mockData.name}.`,
    });

    await waitFor(() => expect(projectImage).toBeInTheDocument());
  });

  it('should render link to provided project', async () => {
    render(<FeaturedProjectCard project={mockData} />);

    const projectLink = screen.getByRole('link', {
      name: `Główne zdjęcie porjektu ${mockData.name}.`,
    });

    await waitFor(() => {
      expect(projectLink).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(projectLink).toHaveAttribute('href', expect.stringContaining(mockData.slug.current));
    });
  });
});
