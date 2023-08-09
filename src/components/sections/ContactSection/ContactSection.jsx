import Image from 'next/image';

import ContactForm from '@/components/ui/ContactForm/ContactForm';
import getContactSectionSetup from '@/utils/dataSetup/dataSchemas/contactSection';

import styles from './ContactSection.module.scss';

export default function ContactSection({ data }) {
  const { title, description, image } = getContactSectionSetup(data);

  return (
    <section className={styles['contact-section']} id="contact">
      <h2>{title}</h2>

      <div className={styles['contact-wrapper']}>
        <div className={styles['description-wrapper']}>
          <p>{description}</p>
          <div className={styles['image-container']}>
            <Image
              fill
              alt="Image of contact section."
              sizes="(max-width: 810px) 100vw,(max-width: 1200px) 60vw, 50vw"
              src={image.asset.url}
            />
          </div>
        </div>

        <div className={styles['form-wrapper']}>
          <ContactForm className={styles.form} />
        </div>
      </div>
    </section>
  );
}
