import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import ContactSectionDefault from './ContactSectionDefault';
import { getDefaultContactSectionSettings } from './getContactSectionSetup';

const mockSettings = [
  {
    title: 'mock title',
    description: 'mock description',
  },
];

const defaultSettings = getDefaultContactSectionSettings();

describe('ContactSection', () => {
  it('should render title provided in settings prop', () => {
    render(<ContactSectionDefault settings={mockSettings} />);

    const title = screen.getByText(mockSettings[0].title);

    expect(title).toBeInTheDocument();
  });

  it('should render description provided in settings prop', () => {
    render(<ContactSectionDefault settings={mockSettings} />);

    const description = screen.getByText(mockSettings[0].description);

    expect(description).toBeInTheDocument();
  });

  it('should render default title if not provided with settings prop', () => {
    render(<ContactSectionDefault />);

    const title = screen.getByText(defaultSettings.title);

    expect(title).toBeInTheDocument();
  });

  it('should render default description if not provided with settings prop', () => {
    render(<ContactSectionDefault />);

    const description = screen.getByText(defaultSettings.description);

    expect(description).toBeInTheDocument();
  });

  it('should render ContactForm component', () => {
    render(<ContactSectionDefault />);

    const form = screen.getByTestId('contact-form');

    expect(form).toBeInTheDocument();
  });
});
