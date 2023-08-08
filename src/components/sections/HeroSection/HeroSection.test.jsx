import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { error } from 'console';

import { getHeroSectionMockData } from '@/utils/mocks';

import { getHeroSectionDefaultData } from './getHeroSectionSetup';
import HeroSection from './HeroSection';

const defaultData = getHeroSectionDefaultData();
const mockData = getHeroSectionMockData();

error(mockData);
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

  it('should always render some image', () => {
    render(<HeroSection />);

    const image = screen.getByRole('img', { name: 'One of the hero section images.' });

    expect(image).toBeInTheDocument();
  });
});
