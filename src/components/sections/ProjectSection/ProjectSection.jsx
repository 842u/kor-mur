import Image from 'next/image';

import { InViewSlide } from '@/components/animations/InViewSlide';
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
        <InViewSlide className={styles.details} slideFrom="left">
          <ProjectDetailsCard project={project} />
          <TagsContainer tags={tags} />
          <p>{descriptionFirst}</p>
        </InViewSlide>

        <InViewSlide className={styles['main-image']} slideFrom="right">
          <Image
            fill
            priority
            alt={`Główne zdjęcie porjektu ${name}.`}
            sizes="(max-width: 810px) 100vw, 60vw"
            src={mainImage.asset.url}
          />
        </InViewSlide>
      </div>

      <div className={styles.description}>
        <InViewSlide className={styles['secondary-image']} slideFrom="bottom">
          <Image
            fill
            alt={`Jedno ze zdjęć projektu ${name}.`}
            sizes="(max-width: 810px) 100vw, 60vw"
            src={secondaryImage.asset.url}
          />
        </InViewSlide>

        <InViewSlide slideFrom="right">
          <p>{descriptionSecond}</p>
        </InViewSlide>
      </div>

      <div className={styles.gallery}>
        {images.map((image, index) => (
          <InViewSlide
            key={image.asset._id}
            className={styles['gallery-image']}
            slideFrom={index % 2 ? 'left' : 'right'}
          >
            <Image
              fill
              alt={`Jedno ze zdjęć projektu ${name}.`}
              sizes="(max-width: 1200px) 100vw, 80vw"
              src={image.asset.url}
            />
          </InViewSlide>
        ))}
      </div>
    </section>
  );
}
