import Image from 'next/image';

import ProjectDetailsCard from '@/components/ui/ProjectDetailsCard/ProjectDetailsCard';
import TagsContainer from '@/components/ui/TagsContainer/TagsContainer';
import getProjectSetup from '@/utils/dataSetup/dataSchemas/project';

import styles from './ProjectSection.module.scss';

export default function ProjectSection({ data }) {
  const project = getProjectSetup(data);

  const { name, descriptionFirst, descriptionSecond, mainImage, secondaryImage, images, tags } =
    project;

  return (
    <section className={styles['project-section']}>
      <h1>{name}</h1>

      <div className={styles.overview}>
        <div className={styles.details}>
          <ProjectDetailsCard project={project} />
          <TagsContainer tags={tags} />
          <p>{descriptionFirst}</p>
        </div>

        <div className={styles['main-image']}>
          <Image
            fill
            priority
            alt={`Główne zdjęcie porjektu ${name}.`}
            sizes="(max-width: 810px) 100vw, 60vw"
            src={mainImage.asset.url}
          />
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles['secondary-image']}>
          <Image
            fill
            alt={`Jedno ze zdjęć projektu ${name}.`}
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
              alt={`Jedno ze zdjęć projektu ${name}.`}
              sizes="(max-width: 1200px) 100vw, 80vw"
              src={image.asset.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
