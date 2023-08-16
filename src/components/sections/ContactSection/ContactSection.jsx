import { useIsPresent } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { InViewSlide } from '@/components/animations/InViewSlide';
import ContactForm from '@/components/ui/ContactForm/ContactForm';
import getContactSectionSetup from '@/utils/dataSetup/dataSchemas/contactSection';

import styles from './ContactSection.module.scss';

export default function ContactSection({ data }) {
  const { title, description, image } = getContactSectionSetup(data);

  const router = useRouter();

  const isPresent = useIsPresent();

  const sectionElement = useRef(null);

  useEffect(() => {
    if (isPresent && router.asPath === '/#contact') {
      sectionElement.current.scrollIntoView();
    }
  }, [isPresent]);

  return (
    <section ref={sectionElement} className={styles['contact-section']} id="contact">
      <h2>{title}</h2>

      <div className={styles['contact-wrapper']}>
        <div className={styles['description-wrapper']}>
          <InViewSlide slideFrom="left">
            <p>{description}</p>
          </InViewSlide>

          <InViewSlide className={styles['image-container']} slideFrom="bottom">
            <Image
              aria-hidden
              fill
              alt=""
              sizes="(max-width: 810px) 100vw,(max-width: 1200px) 60vw, 50vw"
              src={image.asset.url}
            />
          </InViewSlide>
        </div>

        <InViewSlide className={styles['form-wrapper']} slideFrom="right">
          <ContactForm className={styles.form} />
        </InViewSlide>
      </div>
    </section>
  );
}
