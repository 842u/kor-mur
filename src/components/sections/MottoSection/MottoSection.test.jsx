import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import getDefaultMottoSectionSettings from './getDefaultMottoSectionSettings';
import MottoSection from './MottoSection';

const mockSettings = {
  title: 'Motto title',
  text: 'Motto text',
  description: 'Motto description',
  image: 'url',
};

const defaultSettings = getDefaultMottoSectionSettings();

describe('MottoSection', () => {
  it('should render motto title provided in settings prop', () => {
    render(<MottoSection mottoSectionSettings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings.title);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render motto text provided in settings prop', () => {
    render(<MottoSection mottoSectionSettings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings.text);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render motto description provided in settings prop', () => {
    render(<MottoSection mottoSectionSettings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings.description);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render default motto title if not provided with settings prop', () => {
    render(<MottoSection />);

    const mottoTitle = screen.getByText(defaultSettings.title);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render default motto text if not provided with settings prop', () => {
    render(<MottoSection />);

    const mottoTitle = screen.getByText(defaultSettings.text);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render default motto description if not provided with settings prop', () => {
    render(<MottoSection />);

    const mottoTitle = screen.getByText(defaultSettings.description);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render motto image', () => {
    render(<MottoSection />);

    const mottoImage = screen.getByRole('img', { name: 'motto image' });

    expect(mottoImage).toBeInTheDocument();
  });
});