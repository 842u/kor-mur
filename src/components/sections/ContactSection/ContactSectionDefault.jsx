import Image from 'next/image';

import ContactForm from '@/components/ui/ContactForm/ContactForm';
import { secondaryFont } from '@/utils/fonts';

import styles from './ContactSectionDefault.module.scss';
import getContactSectionSetup from './getContactSectionSetup';

export default function ContactSectionDefault({ settings }) {
  const { title, description, image } = getContactSectionSetup(settings);

  return (
    <section className={styles['contact-section']} id="contact">
      <h2 className={secondaryFont.className}>{title}</h2>
      <div className={styles['contact-wrapper']}>
        <div className={styles['description-wrapper']}>
          <p>{description}</p>
          <div className={styles['image-container']}>
            <Image fill className={styles.image} src={image.asset.url} />
          </div>
        </div>
        <div className={styles['form-wrapper']}>
          <ContactForm className={styles.form} />
        </div>
      </div>
    </section>
  );
}
