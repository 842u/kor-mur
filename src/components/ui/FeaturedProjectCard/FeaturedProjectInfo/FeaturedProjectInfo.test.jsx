import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { getFeaturedProjectSchema } from '@/utils/createData/dataSchemas/featuredProject';
import { mockType } from '@/utils/createData/dataTypes';

import FeaturedProjectInfo from './FeaturedProjectInfo';

const mockData = getFeaturedProjectSchema(mockType);

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: 'default-tag-slug',
    },
  }),
}));

describe('FeaturedProjectInfo', () => {
  it('should render heading with project name', async () => {
    render(<FeaturedProjectInfo project={mockData} />);

    const heading = screen.getByRole('heading', { name: mockData.name });

    await waitFor(() => expect(heading).toBeInTheDocument());
  });

  it('should render TagContainer', async () => {
    render(<FeaturedProjectInfo project={mockData} />);

    const tagContainer = screen.getByTestId('tag-container');

    await waitFor(() => expect(tagContainer).toBeInTheDocument());
  });

  it('should render project first description', async () => {
    render(<FeaturedProjectInfo project={mockData} />);

    const description = screen.getByText(mockData.descriptionFirst);

    await waitFor(() => expect(description).toBeInTheDocument());
  });
});
