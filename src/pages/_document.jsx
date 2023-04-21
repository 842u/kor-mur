import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <meta
          name="description"
          content="Cześć!  Jesteś zainteresowany stworzeniem wyjątkowego i funkcjonalnego projektu wnętrza, balkonu lub tarasu, ale nie wiesz od czego zacząć? Chętnie porozmawiam z Tobą o Twoich potrzebach i stworzę dla Ciebie projekt, który spełni Twoje marzenia.  Skontaktuj się ze mną!"
        />
        <meta name="author" content="Murawska Studio" />
        <body>
          <div id="overlay" role="dialog" />
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
}
