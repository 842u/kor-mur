import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import NavBar from './NavBar';

jest.mock('next/router', () => ({
  useRouter: () => ({}),
}));

describe('NavBar', () => {
  it('should render logo button', () => {
    render(<NavBar />);

    const logoButton = screen.getByRole('button', { name: 'home page' });
    expect(logoButton).toBeInTheDocument();
  });

  it('should render hamburger button', () => {
    render(<NavBar />);

    const hamburgerButton = screen.getByRole('button', { name: 'menu' });
    expect(hamburgerButton).toBeInTheDocument();
  });

  it('should render nav menu', () => {
    render(<NavBar />);

    const navMenu = screen.getByRole('navigation');
    expect(navMenu).toBeInTheDocument();
  });
});
