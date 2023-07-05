import Image from 'next/image';

import CircleLogo from '@/components/ui/CircleLogo/CircleLogo';

import getHeroSectionSetup from './getHeroSectionSetup';
import styles from './HeroSectionDefault.module.scss';

export default function HeroSectionDefault({ settings }) {
  const setup = getHeroSectionSetup(settings);

  return (
    <section className={styles['hero-section']}>
      <div className={styles['logo-container']}>
        <CircleLogo className={styles.logo} text="MURAWSKA.STUDIO" />
      </div>
      <div className={styles['image-container']}>
        <Image
          aria-hidden
          fill
          priority
          alt=""
          className={styles['image-1']}
          sizes="33vw"
          src={setup.imageLeft}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-2']}
          sizes="33vw"
          src={setup.imageMiddleTop}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-3']}
          sizes="33vw"
          src={setup.imageMiddleBottom}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-4']}
          sizes="33vw"
          src={setup.imageRightTop}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-5']}
          sizes="33vw"
          src={setup.imageRightBottom}
        />
      </div>
    </section>
  );
}
