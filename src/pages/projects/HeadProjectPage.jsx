import Head from 'next/head';

export default function HeadProjectPage({ project }) {
  return (
    <Head>
      <title key="title">{`Projekt - ${project?.name} | Murawska Studio`}</title>
      <meta
        key="description"
        content={`Zobacz mój projekt architektury krajobrazu/wnętrz: ${project?.name}. Przekształciłam przestrzeń w funkcjonalne i stylowe miejsce, które łączy estetykę z praktycznymi rozwiązaniami. Odkryj szczegóły projektu, zastosowane materiały i inspiracje, które doprowadziły do jego realizacji.`}
        name="description"
      />
    </Head>
  );
}
