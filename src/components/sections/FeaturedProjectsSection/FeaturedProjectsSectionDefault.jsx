import FeaturedProjectCard from '@/components/ui/FeaturedProjectCard/FeaturedProjectCard';

import styles from './FeaturedProjectsSectionDefault.module.scss';

export default function FeaturedProjectsSectionDefault({ projects }) {
  return (
    <section className={styles['projects-section']}>
      {projects?.map((project) => (
        <FeaturedProjectCard project={project} />
      ))}
    </section>
  );
}
