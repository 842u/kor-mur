import { useRef } from 'react';

import styles from './ContactForm.module.scss';
import FormField from './FormField/FormField';

export default function ContactForm() {
  const nameFieldRef = useRef();
  const emailFieldRef = useRef();
  const telephoneFieldRef = useRef();
  const messageFieldRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    nameFieldRef.current.value = '';
    emailFieldRef.current.value = '';
    telephoneFieldRef.current.value = '';
    messageFieldRef.current.value = '';
  };

  return (
    <form className={styles['contact-form']} onSubmit={formSubmitHandler}>
      <FormField
        label="Name"
        type="text"
        id="name"
        placeholder="Enter your name"
        required
        ref={nameFieldRef}
        minLength="2"
        maxLength="30"
      />
      <FormField
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
        required
        minLength="3"
        maxLength="256"
        ref={emailFieldRef}
      />
      <FormField
        label="Telephone"
        type="tel"
        id="telephone"
        placeholder="Enter your telephone"
        ref={telephoneFieldRef}
        maxLength="15"
      />
      <FormField
        label="Message"
        type="textarea"
        id="message"
        placeholder="Enter your message"
        required
        ref={messageFieldRef}
        maxLength="500"
      />
      <button type="submit">Send</button>
    </form>
  );
}
