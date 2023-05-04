import Image from 'next/image';

import styles from './SocialItem.module.scss';

export default function SocialItem({ iconSrc, href, children, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.item}>
      <Image src={iconSrc} alt={alt} width={32} height={32} />
      {children}
      <Image src="./icons/open-outline.svg" alt="open link" width={16} height={16} />
    </a>
  );
}
