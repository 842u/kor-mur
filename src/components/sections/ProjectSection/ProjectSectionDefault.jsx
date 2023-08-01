import Image from 'next/image';

import TagsContainer from '@/components/ui/TagsContainer/TagsContainer';

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
        <div className={styles['details-container']}>
          <table aria-label="Project details" className={styles['project-details']}>
            <tbody>
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
            </tbody>
          </table>

          <TagsContainer tags={tags} />

          <p>{descriptionFirst}</p>
        </div>

        <div className={styles['main-image-container']}>
          <Image fill src={mainImage.asset.url} />
        </div>
      </section>

      <section className={styles['description-section']}>
        <p>
          <div className={styles['secondary-image-container']}>
            <Image fill src={secondaryImage.asset.url} />
          </div>
          {descriptionSecond}
        </p>
      </section>

      <section className={styles['image-gallery']}>
        {images.map((image) => (
          <div className={styles['gallery-image-container']}>
            <Image fill sizes="100vw" src={image.asset.url} />
          </div>
        ))}
      </section>
    </section>
  );
}
