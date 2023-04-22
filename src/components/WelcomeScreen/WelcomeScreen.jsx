import CircleLogo from '../CircleLogo/CircleLogo.jsx';
import styles from './WelcomeScreen.module.scss';

export default function WelcomeScreen() {
  return (
    <div className={styles.loader}>
      <CircleLogo text="murawska.studio" className={styles['brand-logo']} />
    </div>
  );
}
