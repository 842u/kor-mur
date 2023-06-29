import Image from 'next/image';

import CircleLogo from '@/components/ui/CircleLogo/CircleLogo';

import getDefaultHeroSectionSettings from './getDefaultHeroSectionSettings';
import styles from './HeroSectionDefault.module.scss';

const defaultSettings = getDefaultHeroSectionSettings();

export default function HeroSectionDefault({ heroSectionSettings }) {
  const imageLeftUrl = heroSectionSettings?.[0]?.imageLeft?.asset?.url || defaultSettings.imageLeft;

  const imageMiddleTopUrl =
    heroSectionSettings?.[0]?.imageMiddleTop?.asset?.url || defaultSettings.imageMiddleTop;

  const imageMiddleBottomUrl =
    heroSectionSettings?.[0]?.imageMiddleBottom?.asset?.url || defaultSettings.imageMiddleBottom;

  const imageRightTopUrl =
    heroSectionSettings?.[0]?.imageRightTop?.asset?.url || defaultSettings.imageRightTop;

  const imageRightBottomUrl =
    heroSectionSettings?.[0]?.imageRightBottom?.asset?.url || defaultSettings.imageRightBottom;

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
          src={imageLeftUrl}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-2']}
          sizes="33vw"
          src={imageMiddleTopUrl}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-3']}
          sizes="33vw"
          src={imageMiddleBottomUrl}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-4']}
          sizes="33vw"
          src={imageRightTopUrl}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-5']}
          sizes="33vw"
          src={imageRightBottomUrl}
        />
      </div>
    </section>
  );
}
