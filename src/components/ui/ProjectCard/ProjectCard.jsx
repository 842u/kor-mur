import Image from 'next/image';
import Link from 'next/link';

import styles from './ProjectCard.module.scss';

export default function ProjectCard({ project, sizes, className }) {
  const { mainImage, name, slug } = project;

  const style = `${styles['project-card']} ${className}`;

  return (
    <Link className={style} href={`/projects/${slug.current}`} scroll={false}>
      <Image
        fill
        alt={`Główne zdjęcie porjektu ${name}.`}
        className={styles['project-image']}
        sizes={sizes}
        src={mainImage.asset.url}
      />
    </Link>
  );
}
