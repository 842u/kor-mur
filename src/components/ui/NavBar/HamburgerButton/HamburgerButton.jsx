import styles from './HamburgerButton.module.scss';

export default function HamburgerButton({ isMenuActive, onClick, className }) {
  return (
    <button
      aria-label="menu"
      className={`${styles.button} ${isMenuActive && styles['button--active']} ${className}`}
      type="button"
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </button>
  );
}
