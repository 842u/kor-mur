import SocialItem from './SocialItem/SocialItem';
import styles from './Socials.module.scss';

const socials = [
  {
    text: 'Facebook',
    iconSrc: './icons/logo-facebook.svg',
    alt: 'facebook icon',
    href: 'https://www.facebook.com/',
  },
  {
    text: 'Instagram',
    iconSrc: './icons/logo-instagram.svg',
    alt: 'instagram icon',
    href: 'https://www.instagram.com/',
  },
  {
    text: 'test@test.com',
    iconSrc: './icons/mail-outline.svg',
    alt: 'mail icon',
    href: 'mailto:test@test.com',
  },
  {
    text: '555-555-555',
    iconSrc: './icons/call-outline.svg',
    alt: 'phone icon',
    href: 'tel:555-555-555',
  },
];

export default function Socials() {
  return (
    <address className={styles.socials}>
      {socials.map((social) => (
        <SocialItem key={social.text} iconSrc={social.iconSrc} alt={social.alt} href={social.href}>
          {social.text}
        </SocialItem>
      ))}
    </address>
  );
}
