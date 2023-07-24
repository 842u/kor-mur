import Image from 'next/image';

import ContactForm from '@/components/ui/ContactForm/ContactForm';
import { secondaryFont } from '@/utils/fonts';

import styles from './ContactSectionDefault.module.scss';
import getContactSectionSetup from './getContactSectionSetup';

export default function ContactSectionDefault({ settings }) {
  const { title, description, image } = getContactSectionSetup(settings);

  return (
    <section className={styles['contact-section']} id="contact">
      <div className={styles['contact-info']}>
        <h2 className={secondaryFont.className}>{title}</h2>
        <p>{description}</p>
        <div className={styles['image-container']}>
          <Image fill className={styles.image} src={image.asset.url} />
        </div>
      </div>
      <ContactForm className={styles.form} />
    </section>
  );
}
