import Image from 'next/image';

import ProjectDetailsCard from '@/components/ui/ProjectDetailsCard/ProjectDetailsCard';
import TagsContainer from '@/components/ui/TagsContainer/TagsContainer';

import getProjectSectionSetup from './getProjectSectionSetup';
import styles from './ProjectSection.module.scss';

export default function ProjectSection({ data }) {
  const projectSettings = getProjectSectionSetup(data);

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
          <Image
            fill
            priority
            alt={`Main image of the ${name} project.`}
            sizes="(max-width: 810px) 100vw, 60vw"
            src={mainImage.asset.url}
          />
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles['secondary-image']}>
          <Image
            fill
            alt={`One of the ${name} project image.`}
            sizes="(max-width: 810px) 100vw, 60vw"
            src={secondaryImage.asset.url}
          />
        </div>
        <p>{descriptionSecond}</p>
      </div>

      <div className={styles.gallery}>
        {images.map((image) => (
          <div key={image.asset._id} className={styles['gallery-image']}>
            <Image
              fill
              alt={`One of the ${name} project image.`}
              sizes="(max-width: 1200px) 100vw, 80vw"
              src={image.asset.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
