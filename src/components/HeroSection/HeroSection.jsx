import Image from 'next/image';
import heroImg5 from 'public/images/hero/render-1.png';
import heroImg3 from 'public/images/hero/render-2.png';
import heroImg1 from 'public/images/hero/render-4.png';
import heroImg4 from 'public/images/hero/render-6.png';
import heroImg2 from 'public/images/hero/render-9.png';

import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles['hero-section']}>
      <Image src={heroImg1} fill sizes="50vw" className={styles['img-1']} aria-hidden alt="" />
      <Image src={heroImg2} fill sizes="50vw" className={styles['img-2']} aria-hidden alt="" />
      <Image src={heroImg3} fill sizes="50vw" className={styles['img-3']} aria-hidden alt="" />
      <Image src={heroImg4} fill sizes="50vw" className={styles['img-4']} aria-hidden alt="" />
      <Image src={heroImg5} fill sizes="50vw" className={styles['img-5']} aria-hidden alt="" />
    </section>
  );
}
