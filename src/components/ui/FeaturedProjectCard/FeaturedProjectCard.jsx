import Image from 'next/image';

import styles from './FeaturedProjectCard.module.scss';

export default function FeaturedProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div aria-label="Project Information" className={styles.label} role="region">
        <h3>{project.name}</h3>
        {project.tags?.map((tag) => (
          <p>{tag.name}</p>
        ))}
        <p>{project.descriptionFirst}</p>
      </div>
      <Image fill className={styles['background-image']} src={project.mainImage.asset.url} />
    </div>
  );
}
