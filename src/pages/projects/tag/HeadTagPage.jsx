import Head from 'next/head';

export default function HeadTagPage({ tag }) {
  return (
    <Head>
      <title key="title">{`Projekty - ${tag?.name}`}</title>
      <meta
        key="description"
        content={`Tutaj znajdziesz moje projekty z kategorii ${tag?.name}.`}
        name="description"
      />
    </Head>
  );
}
