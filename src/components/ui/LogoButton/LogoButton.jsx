import CircleLogo from '../CircleLogo/CircleLogo';
import styles from './LogoButton.module.scss';

export default function LogoButton({ onClick }) {
  return (
    <button
      aria-label="home page"
      className={styles['logo-button']}
      type="button"
      onClick={onClick}
    >
      <span className={styles['logo-text']}>MURAWSKA.STUDIO</span>
      <CircleLogo className={styles['logo-circle']} text="MURAWSKA.STUDIO" />
    </button>
  );
}
