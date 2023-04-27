import styles from './HamburgerButton.module.scss';

export default function HamburgerButton({ isMenuActive, onClick }) {
  // const activeClass = isMenuActive ? 'hamburger-button--active' : 'hamburger-button';

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isMenuActive && styles['button--active']}`}
      type="button"
      aria-label="Hamburger Menu Button"
    >
      <div />
      <div />
      <div />
    </button>
  );
}
