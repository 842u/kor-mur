import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import AboutSection from './AboutSectionDefault';
import { getDefaultAboutSectionSettings } from './getAboutSectionSetup';

const mockSettings = [
  {
    title: 'mock title',
    firstParagraph: 'mock first paragraph',
    secondParagraph: 'mock second paragraph',
    image: {
      asset: {
        url: '/mock-url',
      },
    },
  },
];

const defaultSettings = getDefaultAboutSectionSettings();

describe('AboutSection', () => {
  it('should render section title provided in settings prop', () => {
    render(<AboutSection settings={mockSettings} />);

    const title = screen.getByText(mockSettings[0].title);

    expect(title).toBeInTheDocument();
  });

  it('should render section first paragraph provided in settings prop', () => {
    render(<AboutSection settings={mockSettings} />);

    const firstParagraph = screen.getByText(mockSettings[0].firstParagraph);

    expect(firstParagraph).toBeInTheDocument();
  });

  it('should render section second paragraph provided in settings prop', () => {
    render(<AboutSection settings={mockSettings} />);

    const secondParagraph = screen.getByText(mockSettings[0].secondParagraph);

    expect(secondParagraph).toBeInTheDocument();
  });

  it('should render default section title if not provided in settings prop', () => {
    render(<AboutSection />);

    const title = screen.getByText(defaultSettings.title);

    expect(title).toBeInTheDocument();
  });

  it('should render default section first paragraph if not provided in settings prop', () => {
    render(<AboutSection />);

    const firstParagraph = screen.getByText(defaultSettings.firstParagraph);

    expect(firstParagraph).toBeInTheDocument();
  });

  it('should render default section second paragraph if not provided in settings prop', () => {
    render(<AboutSection />);

    const secondParagraph = screen.getByText(defaultSettings.secondParagraph);

    expect(secondParagraph).toBeInTheDocument();
  });

  it('should render section image', () => {
    render(<AboutSection aboutSectionSettings={mockSettings} />);

    const image = screen.getByRole('img', { name: 'Photo of Kornelia' });

    expect(image).toBeInTheDocument();
  });
});
