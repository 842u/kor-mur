import Image from 'next/image';

import ProjectDetailsCard from '@/components/ui/ProjectDetailsCard/ProjectDetailsCard';
import TagsContainer from '@/components/ui/TagsContainer/TagsContainer';

import getProjectSectionSetup from './getProjectSectionSetup';
import styles from './ProjectSectionDefault.module.scss';

export default function ProjectSectionDefault({ settings }) {
  const projectSettings = getProjectSectionSetup(settings);

  const { name, descriptionFirst, descriptionSecond, mainImage, secondaryImage, images, tags } =
    projectSettings;

  return (
    <section className={styles['project-section']}>
      <h1>{name}</h1>

      <div className={styles.overview}>
        <div className={styles.details}>
          <ProjectDetailsCard project={projectSettings} />
          <TagsContainer tags={tags} />
          <p>{descriptionFirst}</p>
        </div>

        <div className={styles['main-image']}>
          <Image fill src={mainImage.asset.url} />
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles['secondary-image']}>
          <Image fill src={secondaryImage.asset.url} />
        </div>
        <p>{descriptionSecond}</p>
      </div>

      <div className={styles.gallery}>
        {images.map((image) => (
          <div className={styles['gallery-image']}>
            <Image fill sizes="100vw" src={image.asset.url} />
          </div>
        ))}
      </div>
    </section>
  );
}
