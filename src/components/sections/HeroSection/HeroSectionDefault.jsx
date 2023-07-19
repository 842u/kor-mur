import Image from 'next/image';

import getHeroSectionSetup from './getHeroSectionSetup';
import styles from './HeroSectionDefault.module.scss';

export default function HeroSectionDefault({ settings }) {
  const { heroSectionText, heroSectionImages } = getHeroSectionSetup(settings);

  return (
    <section className={styles['hero-section']}>
      <p>{heroSectionText}</p>
      <div className={styles['image-container']}>
        {heroSectionImages.map((image) => (
          <Image
            key={image.asset._id}
            aria-hidden
            fill
            priority
            alt=""
            className={styles.image}
            sizes="100vw"
            src={image.asset.url}
          />
        ))}
      </div>
    </section>
  );
}
