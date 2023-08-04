import Link from 'next/link';

import styles from './index.module.scss';

export default function Custom404() {
  return (
    <section className={styles['page-404']}>
      <h1>404 - Nie odnaleziono strony.</h1>

      <p>
        Przepraszamy ale strona której szukasz nie została odnaleziona. Być może nazwa została
        zmieniona, usunięta lub jest tymczasowo niedostępna. <br /> ☹️
      </p>

      <ul className={styles.instructions}>
        <li>Upewnij się, że podany adres URL jest prawidłowy.</li>

        <li>
          Wróć na <Link href="/">stronę główną</Link> i stamtąd wyszukaj interesującą Cię stronę.
        </li>

        <li>
          <Link href="/#contact">Skontaktuj się</Link> z nami jeśli potrzebujesz pomocy.
        </li>
      </ul>
    </section>
  );
}
