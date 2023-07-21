import Image from 'next/image';

import styles from './FeaturedProjectCard.module.scss';

export default function FeaturedProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3>{project.name}</h3>
      <p>{project.descriptionFirst}</p>
      {project.tags?.map((tag) => (
        <p>{tag.name}</p>
      ))}
      <Image fill className={styles['background-image']} src={project.mainImage.asset.url} />
    </div>
  );
}
