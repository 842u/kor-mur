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

  it('should add the active class when isMenuActive is true', () => {
    render(<HamburgerButton isMenuActive />);

    const button = screen.getByRole('button', { name: 'menu' });
    expect(button).toHaveClass('button--active');
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
