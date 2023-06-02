import Image from 'next/image';

import styles from './AboutSection.module.scss';
import getDefaultAboutSectionSettings from './getDefaultAboutSectionSettings';

const defaultSettings = getDefaultAboutSectionSettings();

export default function AboutSection({ aboutSectionSettings }) {
  const sectionTitle = aboutSectionSettings?.title || defaultSettings.title;
  const sectionFirstParagraph =
    aboutSectionSettings?.firstParagraph || defaultSettings.firstParagraph;
  const sectionSecondParagraph =
    aboutSectionSettings?.secondParagraph || defaultSettings.secondParagraph;
  const sectionImage = aboutSectionSettings?.image?.asset?.url || defaultSettings.image;

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
