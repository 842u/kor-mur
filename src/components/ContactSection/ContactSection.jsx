import { secondaryFont } from '@/utils/fonts';

import ContactForm from './ContactForm/ContactForm';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section className={styles['contact-section']} id="contact">
      <h2 className={secondaryFont.className}>CONTACT</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic soluta illo consectetur
        aliquid atque doloremque enim laborum iusto quos molestiae nihil eligendi vitae aperiam,
        doloribus explicabo totam nisi ea!
      </p>
      <ContactForm />
    </section>
  );
}
