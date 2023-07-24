import Image from 'next/image';

import getProjectSectionSetup from './getProjectSectionSetup';
import styles from './ProjectSectionDefault.module.scss';

export default function ProjectSectionDefault({ settings }) {
  const setup = getProjectSectionSetup(settings);

  return (
    <section className={styles['project-section']}>
      <p>{new Date(setup.year).getFullYear()}</p>
      <p>{setup.location}</p>
      <p>{setup.area}</p>
      <p>{setup.budget}</p>
      <h1>{setup.name}</h1>
      <p>{setup.descriptionFirst}</p>
      <Image alt={`${setup.name}`} height={400} src={setup.mainImage.asset.url} width={400} />
    </section>
  );
}
