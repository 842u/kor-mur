import Image from 'next/image';
import Link from 'next/link';

import { secondaryFont } from '@/utils/fonts';

import styles from './ProjectCard.module.scss';

export default function ProjectCard({ project, sizes }) {
  const mainImageUrl = project.mainImage.asset.url;
  const { current: slug } = project.slug;
  const { name } = project;
  const { description } = project;

  let tags = [];
  if (project.tags !== null && project.tags !== undefined) {
    tags = project.tags;
  }

  return (
    <div className={styles['project-card']}>
      <h3 className={secondaryFont.className}>{name}</h3>
      <Link className={styles['project-link']} href={`/projects/${slug}`}>
        <Image
          alt={`${name} main image`}
          className={styles['project-image']}
          height={1}
          sizes={sizes}
          src={mainImageUrl}
          width={1}
        />
      </Link>
      <p>{description}</p>
      {tags && tags.map((tag) => <span key={tag.name}>{tag.name}</span>)}
    </div>
  );
}
