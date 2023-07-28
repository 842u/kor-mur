import Image from 'next/image';
import Link from 'next/link';

import TagLabel from '../TagLabel/TagLabel';
import styles from './FeaturedProjectCard.module.scss';

export default function FeaturedProjectCard({ project }) {
  return (
    <div className={styles['project-card']}>
      <div aria-label="Project Information" className={styles['project-info']} role="region">
        <h3>{project.name}</h3>

        {project.tags?.map((tag) => (
          <TagLabel tag={tag} />
        ))}

        <p>{project.descriptionFirst}</p>
      </div>

      <Link className={styles['project-link']} href={`/projects/${project.slug.current}`}>
        <Image fill className={styles['project-image']} src={project.mainImage.asset.url} />
      </Link>
    </div>
  );
}
