import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import ContactSection from './ContactSection';
import { getDefaultContactSectionSettings } from './getContactSectionSetup';

const mockSettings = [
  {
    title: 'mock title',
    description: 'mock description',
  },
];

const defaultSettings = getDefaultContactSectionSettings();

describe('ContactSection', () => {
  it('should render title provided in data prop', () => {
    render(<ContactSection data={mockSettings} />);

    const title = screen.getByText(mockSettings[0].title);

    expect(title).toBeInTheDocument();
  });

  it('should render description provided in data prop', () => {
    render(<ContactSection data={mockSettings} />);

    const description = screen.getByText(mockSettings[0].description);

    expect(description).toBeInTheDocument();
  });

  it('should render default title if not provided with data prop', () => {
    render(<ContactSection />);

    const title = screen.getByText(defaultSettings.title);

    expect(title).toBeInTheDocument();
  });

  it('should render default description if not provided with data prop', () => {
    render(<ContactSection />);

    const description = screen.getByText(defaultSettings.description);

    expect(description).toBeInTheDocument();
  });

  it('should render ContactForm component', () => {
    render(<ContactSection />);

    const form = screen.getByTestId('contact-form');

    expect(form).toBeInTheDocument();
  });
});
