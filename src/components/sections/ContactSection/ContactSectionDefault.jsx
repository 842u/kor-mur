import ContactForm from '@/components/ui/ContactForm/ContactForm';
import { secondaryFont } from '@/utils/fonts';

import styles from './ContactSectionDefault.module.scss';
import getContactSectionSetup from './getContactSectionSetup';

export default function ContactSectionDefault({ contactSectionSettings }) {
  const setup = getContactSectionSetup(contactSectionSettings);

  return (
    <section className={styles['contact-section']} id="contact">
      <h2 className={secondaryFont.className}>{setup.title}</h2>
      <p>{setup.description}</p>
      <ContactForm />
    </section>
  );
}
