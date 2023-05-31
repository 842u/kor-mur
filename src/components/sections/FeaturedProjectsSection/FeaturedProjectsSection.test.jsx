import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import FeaturedProjectsSection from './FeaturedProjectsSection';
import getDefaultFeaturedProjectsSettings from './getDefaultFeaturedProjectsSectionSettings';

const mockSettings = {
  title: 'Section title',
  description: 'Section description',
};

const defaultSettings = getDefaultFeaturedProjectsSettings();

describe('FeaturedProjectsSection', () => {
  it('should render section title provided in settings prop', () => {
    render(<FeaturedProjectsSection featuredProjectsSectionSettings={mockSettings} />);

    const sectionTitle = screen.getByText(mockSettings.title);

    expect(sectionTitle).toBeInTheDocument();
  });

  it('should render section description provided in settings prop', () => {
    render(<FeaturedProjectsSection featuredProjectsSectionSettings={mockSettings} />);

    const sectionDescription = screen.getByText(mockSettings.description);

    expect(sectionDescription).toBeInTheDocument();
  });

  it('should render default section title if not provided with settings prop', () => {
    render(<FeaturedProjectsSection />);

    const sectionTitle = screen.getByText(defaultSettings.title);

    expect(sectionTitle).toBeInTheDocument();
  });

  it('should render default section description if not provided with settings prop', () => {
    render(<FeaturedProjectsSection />);

    const sectionDescription = screen.getByText(defaultSettings.description);

    expect(sectionDescription).toBeInTheDocument();
  });
});
