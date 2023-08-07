import Image from 'next/image';

import styles from './SocialItem.module.scss';

export default function SocialItem({ iconSrc, href, children, alt }) {
  return (
    <a className={styles.item} href={href} rel="noreferrer" target="_blank">
      <Image alt={alt} height={32} src={iconSrc} width={32} />
      {children}
      <Image alt="open link" height={16} src="/icons/open-outline.svg" width={16} />
    </a>
  );
}
