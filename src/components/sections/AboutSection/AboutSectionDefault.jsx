import Image from 'next/image';

import styles from './AboutSectionDefault.module.scss';
import getAboutSectionSetup from './getAboutSectionSetup';

export default function AboutSectionDefault({ settings }) {
  const { imageFirst, imageSecond, description } = getAboutSectionSetup(settings);

  return (
    <section className={styles['about-section']}>
      <section className={styles['info-section']}>
        <div className={styles['first-image-container']}>
          <Image fill className={styles.image} src={imageFirst.asset.url} />
        </div>
        <p>{description}</p>
      </section>
      <div className={styles['second-image-container']}>
        <Image fill className={styles.image} src={imageSecond.asset.url} />
      </div>
    </section>
  );
}
