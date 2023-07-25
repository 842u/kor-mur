import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import AboutSection from './AboutSectionDefault';
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
  it('should render section description provided in settings prop', () => {
    render(<AboutSection settings={mockSettings} />);

    const description = screen.getByText(mockSettings[0].description);

    expect(description).toBeInTheDocument();
  });

  it('should render default section description if not provided in settings prop', () => {
    render(<AboutSection />);

    const description = screen.getByText(defaultSettings.description);

    expect(description).toBeInTheDocument();
  });
});
