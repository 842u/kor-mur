import ContactForm from '@/components/ui/ContactForm/ContactForm';
import { secondaryFont } from '@/utils/fonts';

import styles from './ContactSection.module.scss';
import getDefaultContactSectionSettings from './getDefaultContactSectionSettings';

const defaultSettings = getDefaultContactSectionSettings();

export default function ContactSection({ contactSectionSettings }) {
  const sectionTitle = contactSectionSettings?.title || defaultSettings.title;
  const sectionDescription = contactSectionSettings?.description || defaultSettings.description;

  return (
    <section className={styles['contact-section']} id="contact">
      <h2 className={secondaryFont.className}>{sectionTitle}</h2>
      <p>{sectionDescription}</p>
      <ContactForm />
    </section>
  );
}
