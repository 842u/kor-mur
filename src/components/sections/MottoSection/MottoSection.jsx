/* eslint no-return-assign: 0, no-param-reassign: 0, no-plusplus: 0 */

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import getMottoSectionSetup from './getMottoSectionSetup';
import styles from './MottoSection.module.scss';

export default function MottoSection({ data, withButton }) {
  const { titles, text, image } = getMottoSectionSetup(data);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const titleChangeDelay = setTimeout(() => {
      setCurrentTitleIndex((currentIndex) =>
        currentIndex >= titles.length - 1 ? 0 : (currentIndex += 1)
      );
    }, 2500);

    return () => {
      clearTimeout(titleChangeDelay);
    };
  }, [currentTitleIndex, data]);

  return (
    <section className={styles['motto-section']}>
      <div className={styles['first-wrapper']}>
        <div className={styles['title-container']}>
          {titles.map((title, index) => {
            const style = `${styles.title} ${
              currentTitleIndex === index && styles['title--active']
            }`;

            return (
              <h2 key={title} className={style}>
                {title}
              </h2>
            );
          })}
        </div>

        {withButton ? (
          <Link className={styles['about-button']} href="/about">
            O MNIE
          </Link>
        ) : null}
      </div>

      <div className={styles['second-wrapper']}>
        <p>{text}</p>
        <div className={styles['image-container']}>
          <Image fill alt="motto image" sizes="(max-width: 810px) 100vw, 50vw" src={image} />
        </div>
      </div>
    </section>
  );
}
