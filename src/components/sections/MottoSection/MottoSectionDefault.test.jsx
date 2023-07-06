import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

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
  it('should render motto title provided in settings prop', async () => {
    render(<MottoSectionDefault settings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings[0].title);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render motto text provided in settings prop', async () => {
    render(<MottoSectionDefault settings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings[0].text);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render motto description provided in settings prop', async () => {
    render(<MottoSectionDefault settings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings[0].description);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render default motto title if not provided with settings prop', async () => {
    render(<MottoSectionDefault />);

    const mottoTitle = screen.getByText(defaultSettings.title);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render default motto text if not provided with settings prop', async () => {
    render(<MottoSectionDefault />);

    const mottoTitle = screen.getByText(defaultSettings.text);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render default motto description if not provided with settings prop', async () => {
    render(<MottoSectionDefault />);

    const mottoTitle = screen.getByText(defaultSettings.description);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render motto image', async () => {
    render(<MottoSectionDefault />);

    const mottoImage = screen.getByRole('img', { name: 'motto image' });

    await waitFor(() => expect(mottoImage).toBeInTheDocument());
  });
});
