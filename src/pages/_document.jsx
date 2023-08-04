import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <meta content="Murawska Studio" name="author" />
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
