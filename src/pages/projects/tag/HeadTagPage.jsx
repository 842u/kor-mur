import Head from 'next/head';

export default function HeadTagPage({ tag, tags }) {
  const categories = tags?.map((element) => element.name).join(', ');

  return (
    <Head>
      <title key="title">{`Projekty - ${tag?.name} | Murawska Studio`}</title>
      <meta
        key="description"
        content={`Tutaj znajdziesz projekty z kategorii ${tag?.name}. Odkryj również inne projekty z kategorii takich jak: ${categories}. Zainspiruj się moimi realizacjami i znajdź pomysły na własne wnętrza.`}
        name="description"
      />
    </Head>
  );
}
