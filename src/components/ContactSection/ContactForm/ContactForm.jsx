import { useDeferredValue, useMemo, useState } from 'react';

import getValidationInfo from '@/utils/validation';

import styles from './ContactForm.module.scss';
import FormField from './FormField/FormField';

export default function ContactForm() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredTelephone, setEnteredTelephone] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const deferredName = useDeferredValue(enteredName);
  const deferredEmail = useDeferredValue(enteredEmail);
  // const deferredTelephone = useDeferredValue(enteredTelephone);
  // const deferredMessage = useDeferredValue(enteredMessage);

  const nameValidationInfo = useMemo(() => {
    return getValidationInfo({ value: deferredName, type: 'text', minLength: 5, maxLength: 30 });
  }, [deferredName]);

  const emailValidationInfo = useMemo(() => {
    return getValidationInfo({ value: deferredEmail, type: 'email', minLength: 3, maxLength: 30 });
  }, [deferredEmail]);

  const inputChangeHandler = (event) => {
    const { id, value } = event.target;
    console.log(id, value);

    switch (id) {
      case 'name':
        setEnteredName(value);
        break;
      case 'email':
        setEnteredEmail(value);
        break;
      case 'telephone':
        setEnteredTelephone(value);
        break;
      case 'message':
        setEnteredMessage(value);
        break;
      default:
        break;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles['contact-form']} onSubmit={formSubmitHandler}>
      <FormField
        label="Name"
        type="text"
        id="name"
        placeholder="Enter your name"
        required
        minLength="2"
        maxLength="30"
        value={enteredName}
        validationInfo={nameValidationInfo}
        onChange={inputChangeHandler}
      />
      <FormField
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
        required
        minLength="3"
        maxLength="256"
        value={enteredEmail}
        validationInfo={emailValidationInfo}
        onChange={inputChangeHandler}
      />
      <FormField
        label="Telephone"
        type="tel"
        id="telephone"
        placeholder="Enter your telephone"
        maxLength="15"
        value={enteredTelephone}
        onChange={inputChangeHandler}
      />
      <FormField
        label="Message"
        type="textarea"
        id="message"
        placeholder="Enter your message"
        required
        maxLength="500"
        value={enteredMessage}
        onChange={inputChangeHandler}
      />
      <button type="submit">Send</button>
    </form>
  );
}
