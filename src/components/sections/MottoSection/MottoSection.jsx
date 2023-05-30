import Image from 'next/image';
import Link from 'next/link';

import { secondaryFont } from '@/utils/fonts';

import getDefaultMottoSectionSettings from './getDefaultMottoSectionSettings';
import styles from './MottoSection.module.scss';

const defaultSettings = getDefaultMottoSectionSettings();

export default function MottoSection({ mottoSectionSettings }) {
  const mottoTitle = mottoSectionSettings?.title || defaultSettings.title;
  const mottoText = mottoSectionSettings?.text || defaultSettings.text;
  const mottoImageSrc = mottoSectionSettings?.image?.asset?.url || defaultSettings.image;
  const mottoDescription = mottoSectionSettings?.description || defaultSettings.description;

  return (
    <section className={styles['motto-section']}>
      <h2 className={secondaryFont.className}>{mottoTitle}</h2>
      <p>{mottoText}</p>
      <div className={styles.addnotation}>
        <div className={styles['image-container']}>
          <Image
            fill
            alt="motto image"
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
