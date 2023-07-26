import Image from 'next/image';

import TagLabel from '@/components/ui/TagLabel/TagLabel';

import getProjectSectionSetup from './getProjectSectionSetup';
import styles from './ProjectSectionDefault.module.scss';

export default function ProjectSectionDefault({ settings }) {
  const {
    name,
    descriptionFirst,
    descriptionSecond,
    year,
    location,
    area,
    budget,
    mainImage,
    secondaryImage,
    images,
    tags,
    slug,
  } = getProjectSectionSetup(settings);

  return (
    <section className={styles['project-section']}>
      <h1>{name}</h1>
      <section className={styles['info-section']}>
        <div className={styles['project-metrics']}>
          <p>Rok: {year}</p>
          <p>Miejsce: {location}</p>
          <p>Powierzchnia: {area} m²</p>
          <p>Budżet: {budget} PLN</p>
          {tags.map((tag) => (
            <TagLabel tag={tag} />
          ))}
        </div>
        <div className={styles['main-image-container']}>
          <Image fill src={mainImage.asset.url} />
        </div>
      </section>
    </section>
  );
}
