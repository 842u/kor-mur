import ContactForm from '@/components/ui/ContactForm/ContactForm';
import { secondaryFont } from '@/utils/fonts';

import styles from './ContactSectionDefault.module.scss';
import getDefaultContactSectionSettings from './getDefaultContactSectionSettings';

const defaultSettings = getDefaultContactSectionSettings();

export default function ContactSectionDefault({ contactSectionSettings }) {
  const sectionTitle = contactSectionSettings?.[0]?.title || defaultSettings.title;
  const sectionDescription =
    contactSectionSettings?.[0]?.description || defaultSettings.description;

  return (
    <section className={styles['contact-section']} id="contact">
      <h2 className={secondaryFont.className}>{sectionTitle}</h2>
      <p>{sectionDescription}</p>
      <ContactForm />
    </section>
  );
}
