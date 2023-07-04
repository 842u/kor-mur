import Image from 'next/image';
import Link from 'next/link';

import { secondaryFont } from '@/utils/fonts';

import getMottoSectionSetup from './getMottoSectionSetup';
import styles from './MottoSectionDefault.module.scss';

export default function MottoSectionDefault({ mottoSectionSettings }) {
  const setup = getMottoSectionSetup(mottoSectionSettings);

  return (
    <section className={styles['motto-section']}>
      <h2 className={secondaryFont.className}>{setup.title}</h2>
      <p>{setup.text}</p>
      <div className={styles.addnotation}>
        <div className={styles['image-container']}>
          <Image
            fill
            alt="motto image"
            className={styles.image}
            sizes="(max-width: 810px) 100vw, 50vw"
            src={setup.image}
          />
        </div>
        <div className={styles.about}>
          <p>{setup.description}</p>
          <Link className={styles.link} href="/about">
            O MNIE
          </Link>
        </div>
      </div>
    </section>
  );
}
