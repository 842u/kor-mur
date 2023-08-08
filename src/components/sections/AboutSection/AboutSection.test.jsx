import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import AboutSection from './AboutSection';
import { getDefaultAboutSectionSettings } from './getAboutSectionSetup';

const mockSettings = [
  {
    imageFirst: {
      asset: {
        url: '/mock-url',
      },
    },
    imageSecond: {
      asset: {
        url: '/mock-url',
      },
    },
    description: 'mocked description',
  },
];

const defaultSettings = getDefaultAboutSectionSettings();

describe('AboutSection', () => {
  it('should render section description provided in data', () => {
    render(<AboutSection data={mockSettings} />);

    const description = screen.getByText(mockSettings[0].description);

    expect(description).toBeInTheDocument();
  });

  it('should render default section description if not provided in data', () => {
    render(<AboutSection />);

    const description = screen.getByText(defaultSettings.description);

    expect(description).toBeInTheDocument();
  });

  it('should render two images provided in data', () => {
    render(<AboutSection data={mockSettings} />);

    const images = screen.getAllByRole('img', { name: 'One of the about me section photo.' });

    expect(images).toHaveLength(2);
  });

  it('should render two image placeholders if not provided with data', () => {
    render(<AboutSection />);

    const images = screen.getAllByRole('img', { name: 'One of the about me section photo.' });

    expect(images).toHaveLength(2);
  });
});
