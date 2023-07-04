import Image from 'next/image';

import getDefaultProjectSectionSettings from './getDefaultProjectSectionSettings';
import styles from './ProjectSectionDefault.module.scss';

const defaultSettings = getDefaultProjectSectionSettings();

export default function ProjectSectionDefault({ projectSectionSettings }) {
  const projectName = projectSectionSettings?.[0]?.name || defaultSettings.name;
  const projectDescription =
    projectSectionSettings?.[0]?.description || defaultSettings.description;
  const projectYear = projectSectionSettings?.[0]?.year || defaultSettings.year;
  const projectLocation = projectSectionSettings?.[0]?.location || defaultSettings.location;
  const projectArea = projectSectionSettings?.[0]?.area || defaultSettings.area;
  const projectBudget = projectSectionSettings?.[0]?.budget || defaultSettings.budget;
  const projectMainImage =
    projectSectionSettings?.[0]?.mainImage?.asset?.url || defaultSettings.mainImage;

  return (
    <section className={styles['project-section']}>
      <p>{new Date(projectYear).getFullYear()}</p>
      <p>{projectLocation}</p>
      <p>{projectArea}</p>
      <p>{projectBudget}</p>
      <h1>{projectName}</h1>
      <p>{projectDescription}</p>
      <Image alt={`${projectName}`} height={400} src={projectMainImage} width={400} />
    </section>
  );
}
