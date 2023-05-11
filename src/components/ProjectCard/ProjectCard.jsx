import Image from 'next/image';

import { secondaryFont } from '@/utils/fonts';

import styles from './ProjectCard.module.scss';

export default function ProjectCard({ project, sizes }) {
  const mainImageUrl = project.mainImage.asset.url;
  const { name } = project;
  const { description } = project;

  let tags = [];
  if (project.tags !== null && project.tags !== undefined) {
    tags = project.tags;
  }

  return (
    <div className={styles['project-card']}>
      <h3 className={secondaryFont.className}>{name}</h3>
      <div className={styles['image-container']}>
        <Image src={mainImageUrl} fill sizes={sizes} alt={`${name} main image`} />
      </div>
      <p>{description}</p>
      {tags && tags.map((tag) => <span key={tag.name}>{tag.name}</span>)}
    </div>
  );
}
