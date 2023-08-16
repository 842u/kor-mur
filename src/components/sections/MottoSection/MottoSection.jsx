/* eslint no-return-assign: 0 */

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { InViewSlide } from '@/components/animations/InViewSlide';
import getMottoSectionSetup from '@/utils/dataSetup/dataSchemas/mottoSection';

import styles from './MottoSection.module.scss';

export default function MottoSection({ data, withLink }) {
  const { titles, text, image } = getMottoSectionSetup(data);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const titleChangeDelay = setTimeout(() => {
      setCurrentTitleIndex((currentIndex) =>
        currentIndex >= titles.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);

    return () => {
      clearTimeout(titleChangeDelay);
    };
  }, [currentTitleIndex, data]);

  return (
    <section className={styles['motto-section']}>
      <div className={styles['first-wrapper']}>
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentTitleIndex}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.title}
            exit={{ opacity: 0, scale: 0.8 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {titles[currentTitleIndex]}
          </motion.h2>
        </AnimatePresence>

        {withLink && (
          <InViewSlide slideFrom="left">
            <Link className={styles['about-button']} href="/about" scroll={false}>
              O MNIE
            </Link>
          </InViewSlide>
        )}
      </div>

      <div className={styles['second-wrapper']}>
        <InViewSlide slideFrom="right">
          <p>{text}</p>
        </InViewSlide>

        <InViewSlide className={styles['image-container']} slideFrom="bottom">
          <Image
            fill
            alt="Zdjęcie motywacyjne."
            sizes="(max-width: 810px) 100vw,(max-width: 1200px) 50vw, 60vw"
            src={image}
          />
        </InViewSlide>
      </div>
    </section>
  );
}
