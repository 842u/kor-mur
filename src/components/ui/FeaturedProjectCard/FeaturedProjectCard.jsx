import Image from 'next/image';
import Link from 'next/link';

import styles from './FeaturedProjectCard.module.scss';
import FeaturedProjectInfo from './FeaturedProjectInfo/FeaturedProjectInfo';
import getFeaturedProjectSetup from './getFeaturedProjectSetup';

export default function FeaturedProjectCard({ project, className }) {
  const { name, slug, mainImage } = getFeaturedProjectSetup(project);

  const style = `${className} ${styles['project-card']}`;

  return (
    <div className={style}>
      <FeaturedProjectInfo className={styles['info-card']} project={project} />

      <Link className={styles['project-link']} href={`/projects/${slug.current}`}>
        <Image
          fill
          alt={`Main image of ${name} project.`}
          sizes="100vw"
          src={mainImage.asset.url}
        />
      </Link>
    </div>
  );
}
