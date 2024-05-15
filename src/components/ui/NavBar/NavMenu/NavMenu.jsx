import styles from './NavMenu.module.scss';
import NavMenuItem from './NavMenuItem/NavMenuItem';

const links = [
  {
    href: '/',
    text: 'STRONA GŁÓWNA',
  },
  {
    href: '/projects/tag/wszystkie',
    text: 'PROJEKTY',
  },
  {
    href: '/about',
    text: 'O MNIE',
  },
  {
    href: '/#contact',
    text: 'KONTAKT',
  },
];

export default function NavMenu({ isMenuActive, className, onMenuItemClick, menuItems = links }) {
  const style = `${styles.menu} ${isMenuActive && styles['menu--active']} ${className}`;

  return (
    <ul className={style}>
      {menuItems.map((item) => (
        <NavMenuItem key={item.href} href={item.href} onClick={onMenuItemClick}>
          {item.text}
        </NavMenuItem>
      ))}
    </ul>
  );
}
