import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { getDefaultFeaturedProjectSetup } from '../getFeaturedProjectSetup';
import FeaturedProjectInfo from './FeaturedProjectInfo';

const defaultFeaturedProject = getDefaultFeaturedProjectSetup();

describe('FeaturedProjectInfo', () => {
  it('should render heading with project name', () => {
    render(<FeaturedProjectInfo project={defaultFeaturedProject} />);

    const heading = screen.getByRole('heading', { name: defaultFeaturedProject.name });

    expect(heading).toBeInTheDocument();
  });
});
