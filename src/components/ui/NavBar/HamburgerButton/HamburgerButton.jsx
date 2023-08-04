import styles from './HamburgerButton.module.scss';

export default function HamburgerButton({ isActive, onClick, className }) {
  const style = `${styles['hamburger-button']} ${
    isActive && styles['hamburger-button--active']
  } ${className}`;

  return (
    <button aria-label="menu" className={style} type="button" onClick={onClick}>
      <div aria-hidden />
      <div aria-hidden />
      <div aria-hidden />
    </button>
  );
}
