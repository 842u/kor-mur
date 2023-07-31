import InteractiveImage from '@/components/ui/InteractiveImage/InteractiveImage';
import Tag from '@/components/ui/TagLabel/Tag';

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

          <div className={styles['tag-container']}>
            {tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>

          <p>{descriptionFirst}</p>
        </div>

        <InteractiveImage fill className={styles['main-image']} src={mainImage.asset.url} />
      </section>

      <section className={styles['description-section']}>
        <p>{descriptionSecond}</p>

        <InteractiveImage
          fill
          className={styles['secondary-image']}
          src={secondaryImage.asset.url}
        />
      </section>

      <section className={styles['image-gallery']}>
        {images.map((image) => (
          <InteractiveImage
            fill
            className={styles['gallery-image']}
            sizes="100vw"
            src={image.asset.url}
          />
        ))}
      </section>
    </section>
  );
}
