import { useState } from 'react';

import useInputField from '@/utils/hooks/useInputField';

import styles from './ContactForm.module.scss';
import FormField from './FormField/FormField';

export default function ContactForm() {
  const [serverResponseMessage, setServerResponseMessage] = useState('');

  const [
    nameValue,
    nameIsTouched,
    nameHasError,
    nameErrorMessage,
    nameValueChangeHandler,
    nameIsTouchedHandler,
  ] = useInputField();

  const [
    emailValue,
    emailIsTouched,
    emailHasError,
    emailErrorMessage,
    emailValueChangeHandler,
    emailIsTouchedHandler,
  ] = useInputField();

  const [
    phoneValue,
    phoneIsTouched,
    phoneHasError,
    phoneErrorMessage,
    phoneValueChangeHandler,
    phoneIsTouchedHandler,
  ] = useInputField();

  const [
    messageValue,
    messageIsTouched,
    messageHasError,
    messageErrorMessage,
    messageValueChangeHandler,
    messageIsTouchedHandler,
  ] = useInputField();

  const formHasError = nameHasError || emailHasError || phoneHasError || messageHasError;

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      message: messageValue,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong!');
      }

      setServerResponseMessage(responseData.message);
    } catch (error) {
      setServerResponseMessage(error.message);
    }
  };

  return (
    <form className={styles['contact-form']} onSubmit={formSubmitHandler}>
      <FormField
        required
        errorMessage={nameErrorMessage}
        hasError={nameHasError}
        id="name"
        isTouched={nameIsTouched}
        label="Name"
        maxLength="30"
        minLength="3"
        placeholder="Enter your name"
        type="text"
        value={nameValue}
        onBlur={nameIsTouchedHandler}
        onChange={nameValueChangeHandler}
      />
      <FormField
        required
        errorMessage={emailErrorMessage}
        hasError={emailHasError}
        id="email"
        isTouched={emailIsTouched}
        label="Email"
        maxLength="30"
        placeholder="Enter your email"
        type="email"
        value={emailValue}
        onBlur={emailIsTouchedHandler}
        onChange={emailValueChangeHandler}
      />
      <FormField
        errorMessage={phoneErrorMessage}
        hasError={phoneHasError}
        id="phone"
        isTouched={phoneIsTouched}
        label="Phone"
        maxLength="12"
        placeholder="Enter your phone number"
        type="tel"
        value={phoneValue}
        onBlur={phoneIsTouchedHandler}
        onChange={phoneValueChangeHandler}
      />
      <FormField
        required
        errorMessage={messageErrorMessage}
        hasError={messageHasError}
        id="message"
        isTouched={messageIsTouched}
        label="Message"
        maxLength="500"
        placeholder="Enter your message"
        type="textarea"
        value={messageValue}
        onBlur={messageIsTouchedHandler}
        onChange={messageValueChangeHandler}
      />
      <button disabled={!!formHasError} type="submit">
        Send
      </button>
      <p>{serverResponseMessage || ' '}</p>
    </form>
  );
}
