/* eslint no-return-assign: 0 */

import Image from 'next/image';
import { useEffect, useState } from 'react';

import getHeroSectionSetup from '@/utils/dataSetup/dataSchemas/heroSection';

import styles from './HeroSection.module.scss';

export default function HeroSection({ data }) {
  const { text, images } = getHeroSectionSetup(data);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageChangeDelay = setTimeout(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex >= images.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);

    return () => {
      clearTimeout(imageChangeDelay);
    };
  }, [currentImageIndex, data]);

  return (
    <section className={styles['hero-section']}>
      <div className={styles['text-container']}>
        <h1>{text}</h1>
      </div>

      <div className={styles['image-container']}>
        {images.map((image, index) => {
          const isActive = currentImageIndex === index;

          const imageStyle = `${styles.image} ${isActive && styles['image--active']}`;

          return (
            <Image
              key={image?.asset?._id}
              fill
              alt="One of the hero section images."
              className={imageStyle}
              priority={index === 0}
              sizes="100vw"
              src={image?.asset?.url}
            />
          );
        })}
      </div>
    </section>
  );
}
