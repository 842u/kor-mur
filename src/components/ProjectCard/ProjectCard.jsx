import Image from 'next/image';

import { secondaryFont } from '@/utils/fonts';

import styles from './ProjectCard.module.scss';

export default function ProjectCard({ project, sizes }) {
  const projectImgSrc = project.projectMainImage.asset.url;
  const { projectName } = project;
  const { projectDescription } = project;

  return (
    <div className={styles['project-card']}>
      <h3 className={secondaryFont.className}>{projectName}</h3>
      <div className={styles['image-container']}>
        <Image src={projectImgSrc} fill sizes={sizes} alt={`${projectName} main image`} />
      </div>
      <p>{projectDescription}</p>
    </div>
  );
}
