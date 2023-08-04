import Image from 'next/image';

import styles from './AboutSection.module.scss';
import getAboutSectionSetup from './getAboutSectionSetup';

export default function AboutSection({ data }) {
  const { imageFirst, imageSecond, description } = getAboutSectionSetup(data);

  return (
    <section className={styles['about-section']}>
      <div className={styles['info-section']}>
        <div className={styles['first-image-container']}>
          <Image fill className={styles.image} src={imageFirst.asset.url} />
        </div>
        <p>{description}</p>
      </div>

      <div className={styles['second-image-container']}>
        <Image fill className={styles.image} src={imageSecond.asset.url} />
      </div>
    </section>
  );
}
