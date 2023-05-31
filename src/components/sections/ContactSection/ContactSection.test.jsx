import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import ContactSection from './ContactSection';
import getDefaultContactSectionSettings from './getDefaultContactSectionSettings';

const mockSettings = {
  title: 'mock title',
  description: 'mock description',
};

const defaultSettings = getDefaultContactSectionSettings();

describe('ContactSection', () => {
  it('should render title provided in settings prop', () => {
    render(<ContactSection contactSectionSettings={mockSettings} />);

    const title = screen.getByText(mockSettings.title);

    expect(title).toBeInTheDocument();
  });

  it('should render description provided in settings prop', () => {
    render(<ContactSection contactSectionSettings={mockSettings} />);

    const description = screen.getByText(mockSettings.description);

    expect(description).toBeInTheDocument();
  });

  it('should render default title if not provided with settings prop', () => {
    render(<ContactSection />);

    const title = screen.getByText(defaultSettings.title);

    expect(title).toBeInTheDocument();
  });

  it('should render default description if not provided with settings prop', () => {
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
