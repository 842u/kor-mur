import Head from 'next/head';

export default function HeadProjectPage({ project }) {
  return (
    <Head>
      <title>Projekt - {project?.[0]?.name}</title>
      <meta
        key="description"
        content={`Tutaj znajdziesz opis mojego projektu ${project?.[0]?.name}.`}
        name="description"
      />
    </Head>
  );
}
