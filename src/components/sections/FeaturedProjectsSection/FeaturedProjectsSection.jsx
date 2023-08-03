import FeaturedProjectCard from '@/components/ui/FeaturedProjectCard/FeaturedProjectCard';

import styles from './FeaturedProjectsSection.module.scss';

export default function FeaturedProjectsSection({ projects }) {
  return (
    <section className={styles['projects-section']}>
      {projects?.map((project) => (
        <FeaturedProjectCard
          key={project._id}
          className={styles['project-card']}
          project={project}
        />
      ))}
    </section>
  );
}
