import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { getDefaultMottoSectionSettings } from './getMottoSectionSetup';
import MottoSectionDefault from './MottoSectionDefault';

const mockSettings = [
  {
    title: 'Motto title',
    text: 'Motto text',
    description: 'Motto description',
    image: 'url',
  },
];

const defaultSettings = getDefaultMottoSectionSettings();

describe('MottoSection', () => {
  it('should render motto title provided in settings prop', () => {
    render(<MottoSectionDefault settings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings[0].title);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render motto text provided in settings prop', () => {
    render(<MottoSectionDefault settings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings[0].text);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render motto description provided in settings prop', () => {
    render(<MottoSectionDefault settings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings[0].description);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render default motto title if not provided with settings prop', () => {
    render(<MottoSectionDefault />);

    const mottoTitle = screen.getByText(defaultSettings.title);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render default motto text if not provided with settings prop', () => {
    render(<MottoSectionDefault />);

    const mottoTitle = screen.getByText(defaultSettings.text);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render default motto description if not provided with settings prop', () => {
    render(<MottoSectionDefault />);

    const mottoTitle = screen.getByText(defaultSettings.description);

    expect(mottoTitle).toBeInTheDocument();
  });

  it('should render motto image', () => {
    render(<MottoSectionDefault />);

    const mottoImage = screen.getByRole('img', { name: 'motto image' });

    expect(mottoImage).toBeInTheDocument();
  });
});
