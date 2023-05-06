import { secondaryFont } from '@/utils/fonts';

import styles from './MottoSection.module.scss';

export default function MottoSection() {
  return (
    <section className={styles['motto-section']}>
      <h1 className={secondaryFont.className}>MOTTO</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero voluptatem quam, et,
        atque laborum excepturi deserunt molestias porro unde consequatur inventore totam architecto
        omnis corporis placeat magni voluptas? Magnam?
      </p>
    </section>
  );
}
