import { secondaryFont } from '@/utils/fonts';

import styles from './FeaturedProjectsSectionDefault.module.scss';
import getFeaturedProjectsSetup from './getFeaturedProjectsSetup';

export default function FeaturedProjectsSectionDefault({ settings }) {
  const { title, description } = getFeaturedProjectsSetup(settings);

  return (
    <section className={styles['projects-section']}>
      <h2 className={secondaryFont.className}>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
