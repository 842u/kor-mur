import Image from 'next/image';
import Link from 'next/link';

import styles from './ProjectCard.module.scss';

export default function ProjectCard({ project, sizes, className }) {
  const image = project.mainImage.asset.url;
  const { current: slug } = project.slug;
  const { name } = project;
  const style = `${styles['project-card']} ${className}`;

  return (
    <Link className={style} href={`/projects/${slug}`}>
      <div className={styles['image-container']}>
        <Image
          fill
          alt={`${name} project image`}
          className={styles['project-image']}
          sizes={sizes}
          src={image}
        />
      </div>
    </Link>
  );
}
