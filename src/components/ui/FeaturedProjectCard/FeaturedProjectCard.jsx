import Image from 'next/image';
import Link from 'next/link';

import styles from './FeaturedProjectCard.module.scss';
import FeaturedProjectInfo from './FeaturedProjectInfo/FeaturedProjectInfo';

export default function FeaturedProjectCard({ project }) {
  const { slug, mainImage } = project;

  return (
    <div className={styles['project-card']}>
      <FeaturedProjectInfo className={styles['info-card']} project={project} />

      <Link className={styles['project-link']} href={`/projects/${slug.current}`}>
        <Image fill className={styles['project-image']} src={mainImage.asset.url} />
      </Link>
    </div>
  );
}
