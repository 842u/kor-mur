import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { getMottoSectionSchema } from '@/utils/dataSetup/dataSchemas/mottoSection';
import { defaultType, mockType } from '@/utils/dataSetup/dataTypes';

import MottoSection from './MottoSection';

const defaultData = getMottoSectionSchema(defaultType);
const mockData = getMottoSectionSchema(mockType);

const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('MottoSection', () => {
  it('should render link if withLink = true', async () => {
    render(<MottoSection withLink />);

    const link = screen.getByRole('link', { name: 'O MNIE' });

    await waitFor(() => expect(link).toBeInTheDocument());
  });

  it('should not render link if withLink = false', async () => {
    render(<MottoSection />);

    const link = screen.queryByRole('link', { name: 'O MNIE' });

    await waitFor(() => expect(link).toBeNull());
  });

  it('should render motto heading provided in data', () => {
    render(<MottoSection data={mockData} />);

    mockData.titles.forEach(() => {
      const heading = screen.getByRole('heading', { hidden: true });

      expect(heading).toBeInTheDocument();
    });
  });

  it('should render default heading if not provided with data', () => {
    render(<MottoSection />);

    defaultData.titles.forEach(() => {
      const heading = screen.getByRole('heading', { hidden: true });

      expect(heading).toBeInTheDocument();
    });
  });

  it('should render motto text provided in data', () => {
    render(<MottoSection data={mockData} />);

    const text = screen.getByText(mockData.text);

    expect(text).toBeInTheDocument();
  });

  it('should render default motto text if not provided with data', () => {
    render(<MottoSection />);

    const text = screen.getByText(defaultData.text);

    expect(text).toBeInTheDocument();
  });

  it('should always render image', () => {
    render(<MottoSection />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
