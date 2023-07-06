import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import NavBar from './NavBar';

jest.mock('next/router', () => ({
  useRouter: () => ({}),
}));

describe('NavBar', () => {
  it('should render logo button', async () => {
    render(<NavBar />);

    const logoButton = screen.getByRole('button', { name: 'home page' });

    await waitFor(() => expect(logoButton).toBeInTheDocument());
  });

  it('should render hamburger button', async () => {
    render(<NavBar />);

    const hamburgerButton = screen.getByRole('button', { name: 'menu' });

    await waitFor(() => expect(hamburgerButton).toBeInTheDocument());
  });

  it('should render nav menu', async () => {
    render(<NavBar />);

    const navMenu = screen.getByRole('navigation');

    await waitFor(() => expect(navMenu).toBeInTheDocument());
  });
});
