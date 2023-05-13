import styles from './ContactForm.module.scss';
import FormField from './FormField/FormField';

export default function ContactForm() {
  return (
    <form className={styles['contact-form']}>
      <FormField label="Name" type="text" id="name" placeholder="Enter your name" />
      <FormField label="Email" type="email" id="email" placeholder="Enter your email" />
      <FormField label="Telephone" type="tel" id="telephone" placeholder="Enter your telephone" />
      <FormField label="Message" type="textarea" id="message" placeholder="Enter your message" />
      <button type="submit">Send</button>
    </form>
  );
}
