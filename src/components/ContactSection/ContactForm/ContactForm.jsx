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
        minLength="2"
        maxLength="30"
      />
      <button type="submit">Send</button>
    </form>
  );
}
