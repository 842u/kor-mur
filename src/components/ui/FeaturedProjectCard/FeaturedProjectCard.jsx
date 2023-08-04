import Image from 'next/image';
import Link from 'next/link';

import styles from './FeaturedProjectCard.module.scss';
import FeaturedProjectInfo from './FeaturedProjectInfo/FeaturedProjectInfo';
import getFeaturedProjectSetup from './getFeaturedProjectSetup';

export default function FeaturedProjectCard({ project, className }) {
  const { slug, mainImage } = getFeaturedProjectSetup(project);

  const style = `${className} ${styles['project-card']}`;

  return (
    <div className={style}>
      <FeaturedProjectInfo className={styles['info-card']} project={project} />

      <Link className={styles['project-link']} href={`/projects/${slug.current}`}>
        <Image fill src={mainImage.asset.url} />
      </Link>
    </div>
  );
}
