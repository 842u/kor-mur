import CircleLogo from '../CircleLogo/CircleLogo';
import styles from './LogoButton.module.scss';

export default function LogoButton({ onClick, className, children }) {
  const buttonStyle = `${styles['logo-button']} ${className}`;

  return (
    <button aria-label="home page" className={buttonStyle} type="button" onClick={onClick}>
      <span className={styles['logo-text']}>{children}</span>
      <CircleLogo className={styles['logo-circle']} text="MURAWSKA.STUDIO" />
    </button>
  );
}
