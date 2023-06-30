import Image from 'next/image';

import styles from './AboutSectionDefault.module.scss';
import getDefaultAboutSectionSettings from './getDefaultAboutSectionSettings';

const defaultSettings = getDefaultAboutSectionSettings();

export default function AboutSectionDefault({ aboutSectionSettings }) {
  const sectionTitle = aboutSectionSettings?.[0]?.title || defaultSettings.title;
  const sectionFirstParagraph =
    aboutSectionSettings?.[0]?.firstParagraph || defaultSettings.firstParagraph;
  const sectionSecondParagraph =
    aboutSectionSettings?.[0]?.secondParagraph || defaultSettings.secondParagraph;
  const sectionImage = aboutSectionSettings?.[0]?.image?.asset?.url || defaultSettings.image;

  return (
    <section className={styles['about-section']}>
      <h2>{sectionTitle}</h2>
      <div>
        <Image alt="Photo of Kornelia" height={100} src={sectionImage} width={100} />
        <p>{sectionFirstParagraph}</p>
      </div>
      <p>{sectionSecondParagraph}</p>
    </section>
  );
}
