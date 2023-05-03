import styles from './NavMenu.module.scss';
import NavMenuItem from './NavMenuItem/NavMenuItem';

const links = [
  {
    href: '/',
    text: 'STRONA GŁÓWNA',
  },
  {
    href: '/services',
    text: 'OFERTA',
  },
  {
    href: '/projects',
    text: 'PROJEKTY',
  },
  {
    href: '/about',
    text: 'O MNIE',
  },
  {
    href: '#contact',
    text: 'KONTAKT',
  },
];

export default function NavMenu({ isMenuActive, className, onMenuItemClick, menuItems = links }) {
  const styleClass = `${styles.menu} ${isMenuActive && styles['menu--active']} ${className}`;

  return (
    <ul className={styleClass}>
      {menuItems.map((item) => (
        <NavMenuItem key={item.href} onClick={onMenuItemClick} href={item.href}>
          {item.text}
        </NavMenuItem>
      ))}
    </ul>
  );
}
