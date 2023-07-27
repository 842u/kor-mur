import styles from './HamburgerButton.module.scss';

export default function HamburgerButton({ isActive, onClick, className }) {
  return (
    <button
      aria-label="menu"
      type="button"
      className={`${styles['hamburger-button']} ${
        isActive && styles['hamburger-button--active']
      } ${className}`}
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </button>
  );
}
