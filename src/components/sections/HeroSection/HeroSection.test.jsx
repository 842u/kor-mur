import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { getHeroSectionSchema } from '@/utils/dataSetup/dataSchemas/heroSection';
import { defaultType, mockType } from '@/utils/dataSetup/dataTypes';

import HeroSection from './HeroSection';

const mockData = getHeroSectionSchema(mockType);
const defaultData = getHeroSectionSchema(defaultType);

describe('HeroSection', () => {
  it('should render heading with text provided in data', () => {
    render(<HeroSection data={mockData} />);

    const heading = screen.getByRole('heading', { name: mockData.text });

    expect(heading).toBeInTheDocument();
  });

  it('should render default heading text if not provided in data', () => {
    render(<HeroSection />);

    const heading = screen.getByRole('heading', { name: defaultData.text });

    expect(heading).toBeInTheDocument();
  });

  it('should render image provided in data', () => {
    render(<HeroSection data={mockData} />);

    const image = screen.getByRole('img', { hidden: true });

    expect(image).toBeInTheDocument();
  });
});
