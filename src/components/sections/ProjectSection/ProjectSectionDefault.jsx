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
  } = getProjectSectionSetup(settings);

  return (
    <section className={styles['project-section']}>
      <h1>{name}</h1>

      <section className={styles['details-section']}>
        <table aria-label="Project details" className={styles['project-details']}>
          <tr>
            <th>Rok</th>
            <td>{new Date(year).getFullYear()}</td>
          </tr>
          <tr>
            <th>Miejsce</th>
            <td>{location}</td>
          </tr>
          <tr>
            <th>Powierzchnia</th>
            <td>{area}</td>
          </tr>
          <tr>
            <th>Budżet</th>
            <td>{budget}</td>
          </tr>
        </table>

        <div className={styles['tag-container']}>
          {tags.map((tag) => (
            <TagLabel tag={tag} />
          ))}
        </div>

        <p>{descriptionFirst}</p>

        <div className={styles['main-image-container']}>
          <Image fill className={styles.image} src={mainImage.asset.url} />
        </div>
      </section>

      <section className={styles['description-section']}>
        <p>{descriptionSecond}</p>

        <div className={styles['second-image-container']}>
          <Image fill className={styles.image} src={secondaryImage.asset.url} />
        </div>
      </section>

      <section className={styles['image-gallery']}>
        {images.map((image) => (
          <div className={styles['image-container']}>
            <Image fill className={styles.image} src={image.asset.url} />
          </div>
        ))}
      </section>
    </section>
  );
}
