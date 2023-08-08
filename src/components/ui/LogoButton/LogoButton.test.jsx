import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

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
});
