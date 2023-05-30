import Image from 'next/image';
import Link from 'next/link';
import placeholderImage from 'public/default-image-placeholder.png';

import { secondaryFont } from '@/utils/fonts';

import styles from './MottoSection.module.scss';

export default function MottoSection({ mottoSectionSettings }) {
  const mottoTitle = mottoSectionSettings?.title || 'Default motto title';
  const mottoText = mottoSectionSettings?.text || 'Default motto text';
  const mottoImageSrc = mottoSectionSettings?.image?.asset?.url || placeholderImage;
  const mottoDescription = mottoSectionSettings?.description || 'Default motto description';

  return (
    <section className={styles['motto-section']}>
      <h2 className={secondaryFont.className}>{mottoTitle}</h2>
      <p>{mottoText}</p>
      <div className={styles.addnotation}>
        <div className={styles['image-container']}>
          <Image
            fill
            alt="motto img"
            className={styles.image}
            sizes="(max-width: 810px) 100vw, 50vw"
            src={mottoImageSrc}
          />
        </div>
        <div className={styles.about}>
          <p>{mottoDescription}</p>
          <Link className={styles.link} href="/about">
            O MNIE
          </Link>
        </div>
      </div>
    </section>
  );
}
