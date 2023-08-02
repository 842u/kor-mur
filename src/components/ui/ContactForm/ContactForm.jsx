import { useState } from 'react';
import { PulseLoader } from 'react-spinners';

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
  ] = useInputField(nameInputReqirements);

  const [
    emailValue,
    emailIsTouched,
    emailHasError,
    emailErrorMessage,
    emailValueChangeHandler,
    emailOnTouchHandler,
    emailOnSubmitHandler,
  ] = useInputField(emailInputReqirements);

  const [
    phoneValue,
    phoneIsTouched,
    phoneHasError,
    phoneErrorMessage,
    phoneValueChangeHandler,
    phoneOnTouchHandler,
    phoneOnSubmitHandler,
  ] = useInputField(phoneInputReqirements);

  const [
    messageValue,
    messageIsTouched,
    messageHasError,
    messageErrorMessage,
    messageValueChangeHandler,
    messageOnTouchHandler,
    messageOnSubmitHandler,
  ] = useInputField(messageInputReqirements);

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
        throw new Error(responseData.message || 'Coś poszło nie tak. Spróbuj ponownie.');
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
        label="Imię"
        maxLength={nameInputReqirements.maxLength}
        minLength={nameInputReqirements.minLength}
        placeholder="Wprowadź swoje imię"
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
        minLength={emailInputReqirements.minLength}
        placeholder="Wprowadź swój email"
        required={emailInputReqirements.required}
        type={emailInputReqirements.type}
        value={emailValue}
        onBlur={emailOnTouchHandler}
        onChange={emailValueChangeHandler}
      />
      <FormField
        errorMessage={phoneErrorMessage}
        hasError={phoneHasError}
        id="phone"
        isTouched={phoneIsTouched}
        label="Telefon"
        maxLength={phoneInputReqirements.maxLength}
        placeholder="Wprowadź swój numer telefonu"
        type={phoneInputReqirements.type}
        value={phoneValue}
        onBlur={phoneOnTouchHandler}
        onChange={phoneValueChangeHandler}
      />
      <FormField
        errorMessage={messageErrorMessage}
        hasError={messageHasError}
        id="message"
        isTouched={messageIsTouched}
        label="Wiadomość"
        maxLength={messageInputReqirements.maxLength}
        placeholder="Wprowadź swoją wiadomość"
        required={messageInputReqirements.required}
        type={messageInputReqirements.type}
        value={messageValue}
        onBlur={messageOnTouchHandler}
        onChange={messageValueChangeHandler}
      />
      <button disabled={!!formHasError} type="submit">
        {isSubmitting ? <PulseLoader loading color="#373627" /> : 'Wyślij'}
      </button>
      {serverResponseMessages.map((message) => (
        <span key={message.split(' ')[0]} className={styles['server-response']}>
          {message}
        </span>
      ))}
    </form>
  );
}
