/* eslint no-return-assign: 0, no-param-reassign: 0, no-plusplus: 0 */
import Image from 'next/image';
import { useEffect, useState } from 'react';

import getHeroSectionSetup from './getHeroSectionSetup';
import styles from './HeroSectionDefault.module.scss';

export default function HeroSectionDefault({ settings }) {
  const { heroSectionText, heroSectionImages } = getHeroSectionSetup(settings);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageDelay = setTimeout(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex >= heroSectionImages.length - 1 ? 0 : (currentIndex += 1)
      );
    }, 5000);

    return () => {
      clearTimeout(imageDelay);
    };
  }, [currentImageIndex, settings]);

  return (
    <section className={styles['hero-section']}>
      <div className={styles['text-container']}>
        <h1>{heroSectionText}</h1>
      </div>

      <div className={styles['image-container']}>
        {heroSectionImages.map((image, index) => {
          const imageStyle = `${styles.image} ${
            currentImageIndex === index && styles['image--active']
          }`;

          return (
            <Image
              key={image.asset._id}
              aria-hidden
              fill
              alt=""
              className={imageStyle}
              priority={index === 0}
              sizes="100vw"
              src={image.asset.url}
            />
          );
        })}
      </div>
    </section>
  );
}
