import { secondaryFont } from '@/utils/fonts';

import ProjectCard from '../../ui/ProjectCard/ProjectCard';
import styles from './FeaturedProjectsSectionDefault.module.scss';
import getFeaturedProjectsSetup from './getFeaturedProjectsSetup';

export default function FeaturedProjectsSectionDefault({ settings }) {
  const setup = getFeaturedProjectsSetup(settings);

  return (
    <section className={styles['projects-section']}>
      <h2 className={secondaryFont.className}>{setup.title}</h2>
      <p>{setup.description}</p>
      {setup.featuredProjects.map(
        (project) => project && <ProjectCard key={project._id} project={project} sizes="90vw" />
      )}
    </section>
  );
}
