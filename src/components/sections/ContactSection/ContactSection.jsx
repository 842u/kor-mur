import Image from 'next/image';

import ContactForm from '@/components/ui/ContactForm/ContactForm';

import styles from './ContactSection.module.scss';
import getContactSectionSetup from './getContactSectionSetup';

export default function ContactSection({ data }) {
  const { title, description, image } = getContactSectionSetup(data);

  return (
    <section className={styles['contact-section']} id="contact">
      <h2>{title}</h2>
      <div className={styles['contact-wrapper']}>
        <div className={styles['description-wrapper']}>
          <p>{description}</p>
          <div className={styles['image-container']}>
            <Image fill src={image.asset.url} />
          </div>
        </div>
        <div className={styles['form-wrapper']}>
          <ContactForm className={styles.form} />
        </div>
      </div>
    </section>
  );
}
