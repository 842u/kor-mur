import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

window.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Server response message' }),
  })
);

async function validFormSetup(user) {
  render(<ContactForm />);

  const nameInput = screen.getByRole('textbox', { name: /imię/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const phoneInput = screen.getByRole('textbox', { name: /telefon/i });
  const messageInput = screen.getByRole('textbox', { name: /wiadomość/i });

  const submitButton = screen.getByRole('button', { name: 'Wyślij' });

  await user.type(nameInput, 'John Doe');
  await user.type(emailInput, 'test@test.com');
  await user.type(phoneInput, '123456789');
  await user.type(messageInput, 'Hello World');

  return submitButton;
}

async function invalidFormSetup(user) {
  render(<ContactForm />);

  const nameInput = screen.getByRole('textbox', { name: /imię/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const phoneInput = screen.getByRole('textbox', { name: /telefon/i });
  const messageInput = screen.getByRole('textbox', { name: /wiadomość/i });

  const submitButton = screen.getByRole('button', { name: 'Wyślij' });

  await user.type(nameInput, 'John Doe');
  await user.type(emailInput, 'invalid-email');
  await user.type(phoneInput, 'invalid-phone');
  await user.type(messageInput, 'Hello World');

  return submitButton;
}

describe('ContactForm', () => {
  it('should render 4 input fields', () => {
    render(<ContactForm />);

    const inputs = screen.getAllByRole('textbox');

    expect(inputs).toHaveLength(4);
  });

  it('should render a submit button', () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: 'Wyślij' });

    expect(submitButton).toBeInTheDocument();
  });

  it('initialy submit button should be disabled', () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: 'Wyślij' });

    expect(submitButton).toBeDisabled();
  });

  it('should enable submit button when all fields are valid', async () => {
    const user = userEvent.setup();

    const submitButton = await validFormSetup(user);

    expect(submitButton).toBeEnabled();
  });

  it('should disable submit button when some fields are invalid', async () => {
    const user = userEvent.setup();

    const submitButton = await invalidFormSetup(user);

    expect(submitButton).toBeDisabled();
  });

  it('should send form data to server on form submit', async () => {
    const user = userEvent.setup();

    const submitButton = await validFormSetup(user);
    await user.click(submitButton);

    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  it('should display server response message on form submit', async () => {
    const user = userEvent.setup();

    const submitButton = await validFormSetup(user);
    await user.click(submitButton);

    const serverResponse = screen.getByText('Server response message');

    expect(serverResponse).toBeInTheDocument();
  });
});
