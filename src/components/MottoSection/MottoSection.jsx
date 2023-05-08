import Image from 'next/image';
import Link from 'next/link';
import mottoImg1 from 'public/images/motto/render-7.png';

import { secondaryFont } from '@/utils/fonts';

import styles from './MottoSection.module.scss';

export default function MottoSection() {
  return (
    <section className={styles['motto-section']}>
      <h2 className={`${secondaryFont.className} ${styles.motto}`}>MOTTO</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero voluptatem quam, et,
        atque laborum excepturi deserunt molestias porro unde consequatur inventore totam architecto
        omnis corporis placeat magni voluptas? Magnam?
      </p>
      <div className={styles.decor}>
        <div className={styles['image-container']}>
          <Image
            src={mottoImg1}
            placeholder="blur"
            sizes="(max-width: 810px) 100vw, 40vw"
            alt="motto img"
            fill
            className={styles.image}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero voluptatem quam,
          et, atque laborum excepturi deserunt molestias porro unde consequatur inventore totam
          architecto omnis corporis placeat magni voluptas? Magnam?
        </p>
        <Link href="/about" className={styles.link}>
          <button type="button" className={styles.button}>
            O MNIE
          </button>
        </Link>
      </div>
    </section>
  );
}
