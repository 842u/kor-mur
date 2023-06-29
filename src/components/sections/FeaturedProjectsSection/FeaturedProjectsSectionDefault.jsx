import { secondaryFont } from '@/utils/fonts';

import ProjectCard from '../../ui/ProjectCard/ProjectCard';
import styles from './FeaturedProjectsSectionDefault.module.scss';
import getDefaultFeaturedProjectsSettings from './getDefaultFeaturedProjectsSectionSettings';

const defaultSettings = getDefaultFeaturedProjectsSettings();

export default function FeaturedProjectsSectionDefault({ featuredProjectsSectionSettings }) {
  const sectionTitle = featuredProjectsSectionSettings?.[0]?.title || defaultSettings.title;
  const featuredProjects =
    featuredProjectsSectionSettings?.[0]?.featuredProjects || defaultSettings.featuredProjects;
  const sectionDescription =
    featuredProjectsSectionSettings?.[0]?.description || defaultSettings.description;

  return (
    <section className={styles['projects-section']}>
      <h2 className={secondaryFont.className}>{sectionTitle}</h2>
      <p>{sectionDescription}</p>
      {featuredProjects.map(
        (project) => project && <ProjectCard key={project._id} project={project} sizes="90vw" />
      )}
    </section>
  );
}
