import Image from 'next/image';
import heroImg5 from 'public/images/hero/render-1.png';
import heroImg3 from 'public/images/hero/render-2.png';
import heroImg1 from 'public/images/hero/render-4.png';
import heroImg4 from 'public/images/hero/render-6.png';
import heroImg2 from 'public/images/hero/render-9.png';

import CircleLogo from '@/components/ui/CircleLogo/CircleLogo';

import styles from './HeroSection.module.scss';

export default function HeroSection() {
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
          placeholder="blur"
          sizes="33vw"
          src={heroImg1}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-2']}
          placeholder="blur"
          sizes="33vw"
          src={heroImg2}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-3']}
          placeholder="blur"
          sizes="33vw"
          src={heroImg3}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-4']}
          placeholder="blur"
          sizes="33vw"
          src={heroImg4}
        />
        <Image
          aria-hidden
          fill
          alt=""
          className={styles['image-5']}
          placeholder="blur"
          sizes="33vw"
          src={heroImg5}
        />
      </div>
    </section>
  );
}
