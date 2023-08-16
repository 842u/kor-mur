import Image from 'next/image';

import { InViewSlide } from '@/components/animations/InViewSlide';
import getAboutSectionSetup from '@/utils/dataSetup/dataSchemas/aboutSection';

import styles from './AboutSection.module.scss';

export default function AboutSection({ data }) {
  const { imageFirst, imageSecond, description } = getAboutSectionSetup(data);

  return (
    <section className={styles['about-section']}>
      <div className={styles['info-section']}>
        <InViewSlide className={styles['first-image-container']} slideFrom="left">
          <Image
            aria-hidden
            fill
            alt=""
            className={styles.image}
            sizes="(max-width: 810px) 100vw, 50vw"
            src={imageFirst.asset.url}
          />
        </InViewSlide>

        <InViewSlide slideFrom="right">
          <p>{description}</p>
        </InViewSlide>
      </div>

      <InViewSlide className={styles['second-image-container']} slideFrom="bottom">
        <Image
          aria-hidden
          fill
          alt=""
          className={styles.image}
          sizes="100vw"
          src={imageSecond.asset.url}
        />
      </InViewSlide>
    </section>
  );
}
