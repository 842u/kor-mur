import { InViewSlide } from '@/components/animations/InViewSlide';
import FeaturedProjectCard from '@/components/ui/FeaturedProjectCard/FeaturedProjectCard';

import styles from './FeaturedProjectsSection.module.scss';

export default function FeaturedProjectsSection({ projects }) {
  return (
    <section className={styles['projects-section']}>
      {projects?.map((project, index) => (
        <InViewSlide
          key={project._id}
          duration={0.5}
          offset="300px"
          slideFrom={index % 2 ? 'left' : 'right'}
        >
          <FeaturedProjectCard className={styles['project-card']} project={project} />
        </InViewSlide>
      ))}
    </section>
  );
}
