import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles['logo-container']} aria-hidden>
      <div className={styles['logo-outline']} aria-hidden />
      {/* M U R A W S K A . S T U D I O    15 */}
      <span className={styles['logo-letter']}>M</span>
      <span className={styles['logo-letter']}>U</span>
      <span className={styles['logo-letter']}>R</span>
      <span className={styles['logo-letter']}>A</span>
      <span className={styles['logo-letter']}>W</span>
      <span className={styles['logo-letter']}>S</span>
      <span className={styles['logo-letter']}>K</span>
      <span className={styles['logo-letter']}>A</span>
      <span className={styles['logo-letter']}>.</span>
      <span className={styles['logo-letter']}>S</span>
      <span className={styles['logo-letter']}>T</span>
      <span className={styles['logo-letter']}>U</span>
      <span className={styles['logo-letter']}>D</span>
      <span className={styles['logo-letter']}>I</span>
      <span className={styles['logo-letter']}>O</span>
    </div>
  );
}
