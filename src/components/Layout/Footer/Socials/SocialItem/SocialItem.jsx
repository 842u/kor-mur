import Image from 'next/image';

import styles from './SocialItem.module.scss';

const defaultImgSrc = './icons/image-outline.svg';

export default function SocialItem({
  iconSrc = defaultImgSrc,
  href,
  children = 'default text',
  alt,
}) {
  return (
    <a className={styles.item} href={href} rel="noreferrer" target="_blank">
      <Image alt={alt} height={32} src={iconSrc} width={32} />
      {children}
      <Image alt="open link" height={16} src="/icons/open-outline.svg" width={16} />
    </a>
  );
}
