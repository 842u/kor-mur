import Image from 'next/image';

import styles from './AboutSectionDefault.module.scss';
import getAboutSectionSetup from './getDefaultAboutSectionSettings';

export default function AboutSectionDefault({ aboutSectionSettings }) {
  const setup = getAboutSectionSetup(aboutSectionSettings);

  return (
    <section className={styles['about-section']}>
      <h2>{setup.title}</h2>
      <div>
        <Image alt="Photo of Kornelia" height={100} src={setup.image} width={100} />
        <p>{setup.firstParagraph}</p>
      </div>
      <p>{setup.secondParagraph}</p>
    </section>
  );
}
