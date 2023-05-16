import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <meta content="Murawska Studio" name="author" />
        <meta
          content="Cześć!  Jesteś zainteresowany stworzeniem wyjątkowego i funkcjonalnego projektu wnętrza, balkonu lub tarasu, ale nie wiesz od czego zacząć? Chętnie porozmawiam z Tobą o Twoich potrzebach i stworzę dla Ciebie projekt, który spełni Twoje marzenia.  Skontaktuj się ze mną!"
          name="description"
        />
        <link href="/favicon/favicon.ico" rel="icon" type="image/x-icon" />
        <link href="/favicon/favicon.svg" rel="icon" type="image/svg+xml" />
      </Head>
      <body>
        <div id="overlay" role="dialog" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
