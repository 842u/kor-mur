import Image from 'next/image';
import heroImg5 from 'public/images/hero/render-1.png';
import heroImg3 from 'public/images/hero/render-2.png';
import heroImg1 from 'public/images/hero/render-4.png';
import heroImg4 from 'public/images/hero/render-6.png';
import heroImg2 from 'public/images/hero/render-9.png';

import CircleLogo from '../CircleLogo/CircleLogo';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['logo-container']}>
        <CircleLogo text="MURAWSKA.STUDIO" className={styles.logo} />
      </div>
      <div className={styles['image-container']}>
        <Image
          src={heroImg1}
          priority
          fill
          placeholder="blur"
          sizes="33vw"
          className={styles['img-1']}
          aria-hidden
          alt=""
        />
        <Image
          src={heroImg2}
          placeholder="blur"
          fill
          sizes="33vw"
          className={styles['img-2']}
          aria-hidden
          alt=""
        />
        <Image
          src={heroImg3}
          placeholder="blur"
          fill
          sizes="33vw"
          className={styles['img-3']}
          aria-hidden
          alt=""
        />
        <Image
          src={heroImg4}
          placeholder="blur"
          fill
          sizes="33vw"
          className={styles['img-4']}
          aria-hidden
          alt=""
        />
        <Image
          src={heroImg5}
          placeholder="blur"
          fill
          sizes="33vw"
          className={styles['img-5']}
          aria-hidden
          alt=""
        />
      </div>
    </section>
  );
}
