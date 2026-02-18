import Head from 'next/head';
import { metadata, NextStudio } from 'next-sanity/studio';

import config from '../../../sanity.config';

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} content={value} name={key} />
        ))}
      </Head>
      <NextStudio config={config} />
    </>
  );
}

StudioPage.getLayout = (page) => page;
