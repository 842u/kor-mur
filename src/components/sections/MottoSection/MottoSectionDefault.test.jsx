import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { getDefaultMottoSectionSettings } from './getMottoSectionSetup';
import MottoSectionDefault from './MottoSectionDefault';

const mockSettings = [
  {
    mottoSectionTitles: ['Motto title'],
    mottoSectionText: 'Motto text',
    mottoSectionImage: { asset: { url: '/url' } },
  },
];

const defaultSettings = getDefaultMottoSectionSettings();

describe('MottoSection', () => {
  it('should render motto title provided in settings prop', async () => {
    render(<MottoSectionDefault settings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings[0].mottoSectionTitles);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render motto text provided in settings prop', async () => {
    render(<MottoSectionDefault settings={mockSettings} />);

    const mottoTitle = screen.getByText(mockSettings[0].mottoSectionText);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render default motto title if not provided with settings prop', async () => {
    render(<MottoSectionDefault />);

    const mottoTitle = screen.getByText(defaultSettings.mottoSectionTitles[0]);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render default motto text if not provided with settings prop', async () => {
    render(<MottoSectionDefault />);

    const mottoTitle = screen.getByText(defaultSettings.mottoSectionText);

    await waitFor(() => expect(mottoTitle).toBeInTheDocument());
  });

  it('should render motto image', async () => {
    render(<MottoSectionDefault />);

    const mottoImage = screen.getByRole('img', { name: 'motto image' });

    await waitFor(() => expect(mottoImage).toBeInTheDocument());
  });
});
