/* eslint no-return-assign: 0, no-param-reassign: 0, no-plusplus: 0 */
import Image from 'next/image';
import { useEffect, useState } from 'react';

import getHeroSectionSetup from './getHeroSectionSetup';
import styles from './HeroSectionDefault.module.scss';

export default function HeroSectionDefault({ settings }) {
  const { text, images } = getHeroSectionSetup(settings);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageChangeDelay = setTimeout(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex >= images.length - 1 ? 0 : (currentIndex += 1)
      );
    }, 5000);

    return () => {
      clearTimeout(imageChangeDelay);
    };
  }, [currentImageIndex, settings]);

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
              aria-hidden
              fill
              alt=""
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
