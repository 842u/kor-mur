import Image from 'next/image';
import Link from 'next/link';
import mottoImg1 from 'public/images/motto/render-7.png';

import { secondaryFont } from '@/utils/fonts';

import styles from './MottoSection.module.scss';

export default function MottoSection() {
  return (
    <section className={styles['motto-section']}>
      <h2 className={secondaryFont.className}>MOTTO</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero voluptatem quam, et,
        atque laborum excepturi deserunt molestias porro unde consequatur inventore totam architecto
        omnis corporis placeat magni voluptas? Magnam?
      </p>
      <div className={styles.addnotation}>
        <div className={styles['image-container']}>
          <Image
            fill
            alt="motto img"
            className={styles.image}
            placeholder="blur"
            sizes="(max-width: 810px) 100vw, 50vw"
            src={mottoImg1}
          />
        </div>
        <div className={styles.about}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero voluptatem quam,
            et, atque laborum excepturi deserunt molestias porro unde consequatur inventore totam
            architecto omnis corporis placeat magni voluptas? Magnam?
          </p>
          <Link className={styles.link} href="/about">
            O MNIE
          </Link>
        </div>
      </div>
    </section>
  );
}
