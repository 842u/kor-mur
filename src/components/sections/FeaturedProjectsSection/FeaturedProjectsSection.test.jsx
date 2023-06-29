import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';
import getDefaultFeaturedProjectsSettings from './getDefaultFeaturedProjectsSectionSettings';

const mockSettings = {
  title: 'Section title',
  description: 'Section description',
};

const defaultSettings = getDefaultFeaturedProjectsSettings();

describe('FeaturedProjectsSection', () => {
  it('should render section title provided in settings prop', () => {
    render(<FeaturedProjectsSectionDefault featuredProjectsSectionSettings={mockSettings} />);

    const sectionTitle = screen.getByText(mockSettings.title);

    expect(sectionTitle).toBeInTheDocument();
  });

  it('should render section description provided in settings prop', () => {
    render(<FeaturedProjectsSectionDefault featuredProjectsSectionSettings={mockSettings} />);

    const sectionDescription = screen.getByText(mockSettings.description);

    expect(sectionDescription).toBeInTheDocument();
  });

  it('should render default section title if not provided with settings prop', () => {
    render(<FeaturedProjectsSectionDefault />);

    const sectionTitle = screen.getByText(defaultSettings.title);

    expect(sectionTitle).toBeInTheDocument();
  });

  it('should render default section description if not provided with settings prop', () => {
    render(<FeaturedProjectsSectionDefault />);

    const sectionDescription = screen.getByText(defaultSettings.description);

    expect(sectionDescription).toBeInTheDocument();
  });
});
