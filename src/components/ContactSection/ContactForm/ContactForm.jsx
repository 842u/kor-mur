import styles from './ContactForm.module.scss';

export default function ContactForm() {
  return (
    <form className={styles['contact-form']}>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" placeholder="Your name" required />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" id="email" name="email" placeholder="Your email" required />
      </label>
      <label htmlFor="telephone">
        Telephone
        <input type="tel" id="telephone" name="telephone" placeholder="Your telephone" />
      </label>
      <label htmlFor="message">
        Message
        <textarea id="message" name="message" placeholder="Your message" />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
