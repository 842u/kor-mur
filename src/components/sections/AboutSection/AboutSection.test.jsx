import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { getAboutSectionSchema } from '@/utils/dataSetup/dataSchemas/aboutSection';
import { defaultType, mockType } from '@/utils/dataSetup/dataTypes';

import AboutSection from './AboutSection';

const mockData = getAboutSectionSchema(mockType);

const defaultData = getAboutSectionSchema(defaultType);

describe('AboutSection', () => {
  it('should render section description provided in data', () => {
    render(<AboutSection data={mockData} />);

    const description = screen.getByText(mockData.description);

    expect(description).toBeInTheDocument();
  });

  it('should render default section description if not provided in data', () => {
    render(<AboutSection />);

    const description = screen.getByText(defaultData.description);

    expect(description).toBeInTheDocument();
  });

  it('should render two images provided in data', () => {
    render(<AboutSection data={mockData} />);

    const images = screen.getAllByRole('img', { hidden: true });

    expect(images).toHaveLength(2);
  });

  it('should render two image placeholders if not provided with data', () => {
    render(<AboutSection />);

    const images = screen.getAllByRole('img', { hidden: true });

    expect(images).toHaveLength(2);
  });
});
