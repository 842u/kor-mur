/* eslint react/jsx-props-no-spreading: off */

import '@testing-library/jest-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormField from './FormField';

const mockProps = {
  label: 'Test Label',
  type: 'text',
  id: 'test-id',
  placeholder: 'Test Placeholder',
  value: '',
  required: true,
  minLength: 1,
  maxLength: 10,
  onChange: jest.fn(),
  onBlur: jest.fn(),
  isTouched: false,
  hasError: false,
  errorMessage: 'Test Error Message',
};

describe('FormField', () => {
  it('should render a label', () => {
    render(<FormField {...mockProps} />);

    const label = screen.getByText(mockProps.label);

    expect(label).toBeInTheDocument();
  });

  it('should render textarea when type is "textarea"', () => {
    render(<FormField {...mockProps} type="textarea" />);

    const textarea = screen.getByRole('textbox');

    expect(textarea).toBeInTheDocument();
    expect(textarea).not.toHaveAttribute('type');
  });

  it('should render input with appropriate type', () => {
    const inputTypes = ['text', 'email', 'tel'];

    inputTypes.forEach((type) => {
      render(<FormField {...mockProps} type={type} />);

      const input = screen.getByRole('textbox');

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('type', type);

      cleanup();
    });
  });

  it('should render a required flag when required is true', () => {
    render(<FormField {...mockProps} />);

    const requiredFlag = screen.getByText('*');

    expect(requiredFlag).toBeInTheDocument();
  });

  it('should render error message when isTouched and hasError are true', () => {
    render(<FormField {...mockProps} hasError isTouched />);

    const errorMessage = screen.getByText(mockProps.errorMessage);

    expect(errorMessage).toBeInTheDocument();
  });

  it('should call onChange when input value changes', async () => {
    const user = userEvent.setup();
    render(<FormField {...mockProps} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'Test Input');

    expect(mockProps.onChange).toHaveBeenCalled();
  });

  it('should call onBlur when input loses focus', async () => {
    render(<FormField {...mockProps} />);

    const input = screen.getByRole('textbox');
    fireEvent.blur(input);

    expect(mockProps.onBlur).toHaveBeenCalled();
  });
});
