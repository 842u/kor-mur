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

export default function ContactForm({ className }) {
  const [serverResponseMessages, setServerResponseMessages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [
    nameValue,
    nameIsTouched,
    nameHasError,
    nameErrorMessage,
    nameValueChangeHandler,
    nameOnTouchHandler,
    nameOnSubmitHandler,
  ] = useInputField();

  const [
    emailValue,
    emailIsTouched,
    emailHasError,
    emailErrorMessage,
    emailValueChangeHandler,
    emailIsTouchedHandler,
    emailOnSubmitHandler,
  ] = useInputField();

  const [
    phoneValue,
    phoneIsTouched,
    phoneHasError,
    phoneErrorMessage,
    phoneValueChangeHandler,
    phoneIsTouchedHandler,
    phoneOnSubmitHandler,
  ] = useInputField();

  const [
    messageValue,
    messageIsTouched,
    messageHasError,
    messageErrorMessage,
    messageValueChangeHandler,
    messageIsTouchedHandler,
    messageOnSubmitHandler,
  ] = useInputField();

  const formHasError = nameHasError || emailHasError || phoneHasError || messageHasError;

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    nameOnSubmitHandler();
    emailOnSubmitHandler();
    phoneOnSubmitHandler();
    messageOnSubmitHandler();

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
    } finally {
      setIsSubmitting(false);
    }
  };

  const style = `${styles['contact-form']} ${className}`;

  return (
    <form className={style} data-testid="contact-form" onSubmit={formSubmitHandler}>
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
        onBlur={nameOnTouchHandler}
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
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
      {serverResponseMessages.map((message) => (
        <p key={message.split(' ')[0]}>{message}</p>
      ))}
    </form>
  );
}
