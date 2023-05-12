import { secondaryFont } from '@/utils/fonts';

import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './FeaturedProjectsSection.module.scss';

export default function ProjectsSection({ featuredProjects }) {
  return (
    <section className={styles['projects-section']}>
      <h2 className={secondaryFont.className}>PROJECTS</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ad!</p>
      {featuredProjects.map((project) => (
        <ProjectCard key={project._id} project={project} sizes="90vw" />
      ))}
    </section>
  );
}
