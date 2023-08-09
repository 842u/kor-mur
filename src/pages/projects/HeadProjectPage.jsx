import Head from 'next/head';

export default function HeadProjectPage({ project }) {
  return (
    <Head>
      <title key="title">{`Projekt - ${project?.name}`}</title>
      <meta
        key="description"
        content={`Tutaj znajdziesz opis mojego projektu ${project?.name}.`}
        name="description"
      />
    </Head>
  );
}
