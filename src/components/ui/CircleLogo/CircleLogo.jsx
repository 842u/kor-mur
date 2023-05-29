/* 
  Customizable circle logo component with text inside it. To set text inside pass it as a string text prop. On choosen className use mixin to fully customize it. Check @mixin configure() from './_mixinss.scss' file for more info.
*/
import styles from './CircleLogo.module.scss';

export default function Logo({ text = 'default text', className }) {
  const textCharacters = text.split('');

  return (
    <div aria-hidden className={`${styles['logo-outline']} ${className}`}>
      {textCharacters.map((character, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`char-${index}`} className={styles['logo-character']}>
          {character}
        </span>
      ))}
    </div>
  );
}
