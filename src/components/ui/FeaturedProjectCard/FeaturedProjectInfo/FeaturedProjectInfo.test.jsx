import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { getDefaultFeaturedProjectSetup } from '../getFeaturedProjectSetup';
import FeaturedProjectInfo from './FeaturedProjectInfo';

const defaultFeaturedProject = getDefaultFeaturedProjectSetup();

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: 'default-tag-slug',
    },
  }),
}));

describe('FeaturedProjectInfo', () => {
  it('should render heading with project name', async () => {
    render(<FeaturedProjectInfo project={defaultFeaturedProject} />);

    const heading = screen.getByRole('heading', { name: defaultFeaturedProject.name });

    await waitFor(() => expect(heading).toBeInTheDocument());
  });

  it('should render TagContainer', async () => {
    render(<FeaturedProjectInfo project={defaultFeaturedProject} />);

    const tagContainer = screen.getByTestId('tag-container');

    await waitFor(() => expect(tagContainer).toBeInTheDocument());
  });

  it('should render project first description', async () => {
    render(<FeaturedProjectInfo project={defaultFeaturedProject} />);

    const description = screen.getByText(defaultFeaturedProject.descriptionFirst);

    await waitFor(() => expect(description).toBeInTheDocument());
  });
});
