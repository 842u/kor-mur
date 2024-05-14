import SocialItem from './SocialItem/SocialItem';
import styles from './Socials.module.scss';

const socials = [
  {
    iconSrc: '/icons/logo-facebook.svg',
    alt: 'facebook icon',
    href: 'https://www.facebook.com/',
  },
  {
    iconSrc: '/icons/logo-instagram.svg',
    alt: 'instagram icon',
    href: 'https://www.instagram.com/',
  },
  {
    text: 'test@test.com',
    iconSrc: '/icons/mail-outline.svg',
    alt: 'mail icon',
    href: 'mailto:test@test.com',
  },
  {
    text: '555-555-555',
    iconSrc: '/icons/call-outline.svg',
    alt: 'phone icon',
    href: 'tel:555-555-555',
  },
];

export default function Socials({ className, socialItems = socials }) {
  const style = `${className} ${styles.socials}`;

  return (
    <address className={style}>
      {socialItems.map((item) => (
        <SocialItem
          key={item.text || crypto.randomUUID()}
          alt={item.alt}
          href={item.href}
          iconSrc={item.iconSrc}
        >
          {item.text}
        </SocialItem>
      ))}
    </address>
  );
}
