import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HamburgerButton from './HamburgerButton';

describe('HamburgerButton', () => {
  it('should render button', () => {
    render(<HamburgerButton />);

    const button = screen.getByRole('button', { name: 'menu' });

    expect(button).toBeInTheDocument();
  });

  it('should have active class when isActive = true', () => {
    render(<HamburgerButton isActive />);

    const button = screen.getByRole('button', { name: 'menu' });

    expect(button).toHaveClass('hamburger-button--active');
  });

  it('should not have active class when isActive = false', () => {
    render(<HamburgerButton />);

    const button = screen.getByRole('button', { name: 'menu' });

    expect(button).not.toHaveClass('hamburger-button--active');
  });

  it('should call onClick when the button is clicked', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<HamburgerButton onClick={onClick} />);

    const button = screen.getByRole('button', { name: 'menu' });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
