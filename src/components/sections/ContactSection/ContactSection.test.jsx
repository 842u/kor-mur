import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { getContactSectionSchema } from '@/utils/dataSetup/dataSchemas/contactSection';
import { defaultType, mockType } from '@/utils/dataSetup/dataTypes';

import ContactSection from './ContactSection';

const mockData = getContactSectionSchema(mockType);

const defaultData = getContactSectionSchema(defaultType);

window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: 'some/path',
  }),
}));

describe('ContactSection', () => {
  it('should render title provided in data', () => {
    render(<ContactSection data={mockData} />);

    const title = screen.getByText(mockData.title);

    expect(title).toBeInTheDocument();
  });

  it('should render default title if not provided with data', () => {
    render(<ContactSection />);

    const title = screen.getByText(defaultData.title);

    expect(title).toBeInTheDocument();
  });

  it('should render description provided in data', () => {
    render(<ContactSection data={mockData} />);

    const description = screen.getByText(mockData.description);

    expect(description).toBeInTheDocument();
  });

  it('should render default description if not provided with data', () => {
    render(<ContactSection />);

    const description = screen.getByText(defaultData.description);

    expect(description).toBeInTheDocument();
  });

  it('should render ContactForm component', () => {
    render(<ContactSection />);

    const form = screen.getByTestId('contact-form');

    expect(form).toBeInTheDocument();
  });
});
