import Image from 'next/image';

import { secondaryFont } from '@/utils/fonts';

import styles from './ProjectCard.module.scss';

export default function ProjectCard({ project, sizes }) {
  const mainImageUrl = project.mainImage.asset.url;
  const mainImageBlurUrl = project.mainImage.asset.metadata.lqip;
  const { name } = project;
  const { description } = project;

  let tags = [];
  if (project.tags !== null && project.tags !== undefined) {
    tags = project.tags;
  }

  return (
    <div className={styles['project-card']}>
      <h3 className={secondaryFont.className}>{name}</h3>
      <Image
        className={styles['project-image']}
        src={mainImageUrl}
        width={1}
        height={1}
        blurDataURL={mainImageBlurUrl}
        sizes={sizes}
        alt={`${name} main image`}
      />
      <p>{description}</p>
      {tags && tags.map((tag) => <span key={tag.name}>{tag.name}</span>)}
    </div>
  );
}
