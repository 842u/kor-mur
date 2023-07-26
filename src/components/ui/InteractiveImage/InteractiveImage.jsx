import Image from 'next/image';

import styles from './InteractiveImage.module.scss';

export default function InteractiveImage({ fill, src, className, sizes = '' }) {
  const style = `${className} ${styles['image-container']}`;

  return (
    <button className={style} type="button">
      <Image className={styles.image} fill={fill} sizes={sizes} src={src} />
    </button>
  );
}
