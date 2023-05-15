import styles from './ContactForm.module.scss';
import FormField from './FormField/FormField';

export default function ContactForm() {
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
        minLength="3"
        maxLength="30"
      />
      <FormField label="Email" type="email" id="email" placeholder="Enter your email" required />
      <FormField
        label="Telephone"
        type="tel"
        id="telephone"
        placeholder="Enter your phone number"
      />
      <button type="submit">Send</button>
    </form>
  );
}
