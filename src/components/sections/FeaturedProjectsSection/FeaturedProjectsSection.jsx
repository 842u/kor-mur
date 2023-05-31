import { secondaryFont } from '@/utils/fonts';

import ProjectCard from '../../ui/ProjectCard/ProjectCard';
import styles from './FeaturedProjectsSection.module.scss';
import getDefaultFeaturedProjectsSettings from './getDefaultFeaturedProjectsSectionSettings';

const defaultSettings = getDefaultFeaturedProjectsSettings();

export default function FeaturedProjectsSection({ featuredProjectsSectionSettings }) {
  const sectionTitle = featuredProjectsSectionSettings?.title || defaultSettings.title;
  const sectionDescription =
    featuredProjectsSectionSettings?.description || defaultSettings.description;
  const featuredProjects = featuredProjectsSectionSettings?.featuredProjects || [];

  return (
    <section className={styles['projects-section']}>
      <h2 className={secondaryFont.className}>{sectionTitle}</h2>
      <p>{sectionDescription}</p>
      {featuredProjects.map((project) => (
        <ProjectCard key={project._id} project={project} sizes="90vw" />
      ))}
    </section>
  );
}