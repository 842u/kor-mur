import Image from 'next/image';

import styles from './AboutSectionDefault.module.scss';
import getAboutSectionSetup from './getAboutSectionSetup';

export default function AboutSectionDefault({ settings }) {
  const { imageFirst, imageSecond, description } = getAboutSectionSetup(settings);

  return (
    <section className={styles['about-section']}>
      <div>
        <Image height={100} src={imageFirst.asset.url} width={100} />
        <p>{description}</p>
      </div>
      <Image height={100} src={imageSecond.asset.url} width={100} />
    </section>
  );
}
