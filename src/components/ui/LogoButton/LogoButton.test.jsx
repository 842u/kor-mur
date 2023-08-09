import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LogoButton from './LogoButton';

describe('LogoButton', () => {
  it('should render button element', () => {
    render(<LogoButton />);

    const buttonElement = screen.getByRole('button', { name: 'home page' });

    expect(buttonElement).toBeInTheDocument();
  });

  it('should render provided text', () => {
    const text = 'some text';

    render(<LogoButton>{text}</LogoButton>);

    const textElement = screen.getByText(text);

    expect(textElement).toBeInTheDocument();
  });

  it('should call onClick when the button is clicked', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<LogoButton onClick={onClick} />);

    const buttonElement = screen.getByRole('button', { name: 'home page' });
    await user.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });
});
