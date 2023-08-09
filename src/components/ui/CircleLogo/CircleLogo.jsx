/* eslint react/no-array-index-key: 0 */
/*
  Customizable circle logo component with text inside it.
  To set text inside pass it as a string text prop.
  On choosen className use mixin to fully customize it.
  Check @mixin configure() from './_mixinss.scss' file for more info.
*/

import styles from './CircleLogo.module.scss';

export default function Logo({ text = 'default text', className }) {
  const textCharacters = text.split('');

  const style = `${styles['logo-outline']} ${className}`;

  return (
    <div aria-hidden className={style}>
      {textCharacters.map((character, index) => (
        <span key={`char-${index}`} className={styles['logo-character']}>
          {character}
        </span>
      ))}
    </div>
  );
}
