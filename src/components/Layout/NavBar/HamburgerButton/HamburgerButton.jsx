import styles from './HamburgerButton.module.scss';

export default function HamburgerButton({ isMenuActive, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isMenuActive && styles['button--active']} ${className}`}
      type="button"
      aria-label="Hamburger Menu Button"
    >
      <div />
      <div />
      <div />
    </button>
  );
}
