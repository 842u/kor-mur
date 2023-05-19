import { useState } from 'react';

import useInputField from '@/utils/hooks/useInputField';
import {
  emailInputReqirements,
  messageInputReqirements,
  nameInputReqirements,
  phoneInputReqirements,
} from '@/utils/validation/fieldRequirements';

import styles from './ContactForm.module.scss';
import FormField from './FormField/FormField';

export default function ContactForm() {
  const [serverResponseMessages, setServerResponseMessages] = useState([]);

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

      setServerResponseMessages([responseData.message]);
    } catch (error) {
      setServerResponseMessages(error.message.split(','));
    }
  };

  return (
    <form className={styles['contact-form']} onSubmit={formSubmitHandler}>
      <FormField
        errorMessage={nameErrorMessage}
        hasError={nameHasError}
        id="name"
        isTouched={nameIsTouched}
        label="Name"
        maxLength={nameInputReqirements.maxLength}
        minLength={nameInputReqirements.minLength}
        placeholder="Enter your name"
        required={nameInputReqirements.required}
        type={nameInputReqirements.type}
        value={nameValue}
        onBlur={nameIsTouchedHandler}
        onChange={nameValueChangeHandler}
      />
      <FormField
        errorMessage={emailErrorMessage}
        hasError={emailHasError}
        id="email"
        isTouched={emailIsTouched}
        label="Email"
        maxLength={emailInputReqirements.maxLength}
        placeholder="Enter your email"
        required={emailInputReqirements.required}
        type={emailInputReqirements.type}
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
        maxLength={phoneInputReqirements.maxLength}
        placeholder="Enter your phone number"
        type={phoneInputReqirements.type}
        value={phoneValue}
        onBlur={phoneIsTouchedHandler}
        onChange={phoneValueChangeHandler}
      />
      <FormField
        errorMessage={messageErrorMessage}
        hasError={messageHasError}
        id="message"
        isTouched={messageIsTouched}
        label="Message"
        maxLength={messageInputReqirements.maxLength}
        placeholder="Enter your message"
        required={messageInputReqirements.required}
        type={messageInputReqirements.type}
        value={messageValue}
        onBlur={messageIsTouchedHandler}
        onChange={messageValueChangeHandler}
      />
      <button disabled={!!formHasError} type="submit">
        Send
      </button>
      {serverResponseMessages.map((message) => (
        <p>{message}</p>
      ))}
    </form>
  );
}
