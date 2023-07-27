import styles from './NavList.module.scss';
import NavListItem from './NavListItem/NavListItem';

const links = [
  {
    href: '/',
    text: 'STRONA GŁÓWNA',
  },
  {
    href: '/projects/tag/all',
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

export default function NavList({ isMenuActive, className, onMenuItemClick, menuItems = links }) {
  const styleClass = `${styles.menu} ${isMenuActive && styles['menu--active']} ${className}`;

  return (
    <ul className={styleClass}>
      {menuItems.map((item) => (
        <NavListItem key={item.href} href={item.href} onClick={onMenuItemClick}>
          {item.text}
        </NavListItem>
      ))}
    </ul>
  );
}
