import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <meta name="author" content="Murawska Studio" />
        <meta
          name="description"
          content="Cześć!  Jesteś zainteresowany stworzeniem wyjątkowego i funkcjonalnego projektu wnętrza, balkonu lub tarasu, ale nie wiesz od czego zacząć? Chętnie porozmawiam z Tobą o Twoich potrzebach i stworzę dla Ciebie projekt, który spełni Twoje marzenia.  Skontaktuj się ze mną!"
        />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <div id="overlay" role="dialog" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
