import Image from 'next/image';
import { useState } from 'react';

import styles from './InteractiveImage.module.scss';

export default function InteractiveImage({ fill, src, className, sizes = '' }) {
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => {
    return setIsActive((currentState) => !currentState);
  };

  const style = `${className} ${styles['image-container']} ${isActive ? styles.active : ''}`;

  return (
    <button className={style} type="button" onClick={onClickHandler}>
      <Image className={styles.image} fill={fill} sizes={sizes} src={src} />
    </button>
  );
}
