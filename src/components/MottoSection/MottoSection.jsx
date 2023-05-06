import { secondaryFont } from '@/utils/fonts';

import styles from './MottoSection.module.scss';

export default function MottoSection() {
  return (
    <section className={styles['motto-section']}>
      <h1 className={secondaryFont.className}>Motto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eum unde minima laborum
        amet est quo labore a reiciendis nesciunt, adipisci, architecto dolore quam. Labore.
      </p>
    </section>
  );
}
