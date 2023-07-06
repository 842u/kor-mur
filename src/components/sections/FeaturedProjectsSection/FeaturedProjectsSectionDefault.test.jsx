import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import FeaturedProjectsSectionDefault from './FeaturedProjectsSectionDefault';
import { getDefaultFeaturedProjectsSettings } from './getFeaturedProjectsSetup';

const mockSettings = [
  {
    title: 'Section title',
    description: 'Section description',
  },
];

const defaultSettings = getDefaultFeaturedProjectsSettings();

describe('FeaturedProjectsSection', () => {
  it('should render section title provided in settings prop', async () => {
    render(<FeaturedProjectsSectionDefault settings={mockSettings} />);

    const sectionTitle = screen.getByText(mockSettings[0].title);
    await waitFor(() => expect(sectionTitle).toBeInTheDocument());
  });

  it('should render section description provided in settings prop', async () => {
    render(<FeaturedProjectsSectionDefault settings={mockSettings} />);

    const sectionDescription = screen.getByText(mockSettings[0].description);
    await waitFor(() => expect(sectionDescription).toBeInTheDocument());
  });

  it('should render default section title if not provided with settings prop', async () => {
    render(<FeaturedProjectsSectionDefault />);

    const sectionTitle = screen.getByText(defaultSettings.title);
    await waitFor(() => expect(sectionTitle).toBeInTheDocument());
  });

  it('should render default section description if not provided with settings prop', async () => {
    render(<FeaturedProjectsSectionDefault />);

    const sectionDescription = screen.getByText(defaultSettings.description);
    await waitFor(() => expect(sectionDescription).toBeInTheDocument());
  });
});
