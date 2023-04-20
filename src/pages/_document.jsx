import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        <meta name="description" content="Projektowanie wnętrz, ogrodów..." />
        <meta name="author" content="MURAWSKA.STUDIO" />
        <meta
          name="keywords"
          content="projektowanie, design, wnętrze, interior, ogród, garden, architektura"
        />
        <body>
          <div id="overlay" />
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
}
