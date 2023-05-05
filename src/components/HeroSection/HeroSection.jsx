import Image from 'next/image';
import heroImg1 from 'public/images/hero/render-9.png';

import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles['hero-section']}>
      <h1 className={styles.brand}>MURAWSKA</h1>
      <Image src={heroImg1} aria-hidden alt="" fill sizes="33vw" className={styles['img-1']} />
    </section>
  );
}
