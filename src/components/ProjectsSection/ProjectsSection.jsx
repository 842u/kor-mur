import { secondaryFont } from '@/utils/fonts';

import styles from './ProjectsSection.module.scss';

export default function ProjectsSection() {
  return (
    <section className={styles['projects-section']}>
      <h2 className={secondaryFont.className}>PROJECTS</h2>
    </section>
  );
}
