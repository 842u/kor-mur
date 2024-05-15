import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <meta content="Kornelia Murawska | Murawska Studio" name="author" />
        <meta
          content="architekt krajobrazu, architekt wnętrz, projektowanie wnętrz, projektowanie krajobrazu, aranżacja wnętrz, design wnętrz, inspiracje wnętrzarskie, projekt kuchni, projekt salonu, projekt łazienki, projekt ogrodu, projekt tarasu, projekt balkonu, projekt pokoju, projekt gabinetu, projekt biura, stylowe wnętrza, funkcjonalne wnętrza, nowoczesne wnętrza, kreatywne aranżacje"
          name="keywords"
        />
        <link href="/favicon/favicon.ico" rel="icon" type="image/x-icon" />
        <link href="/favicon/favicon.svg" rel="icon" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
