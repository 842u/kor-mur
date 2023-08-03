import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useCallback, useContext, useEffect } from 'react';

import HeroSection from '@/components/sections/HeroSection/HeroSection';
import DraftModeContext from '@/context/DraftModeContext';

import getGqlHomePageData from '../../graphql/queryHomePageSettings';
import groqQueryHomePageData from '../../groq/queryHomePageSettings';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function HomePage({ draftMode, data }) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  const { heroSectionSettings } = data;

  const renderItem = useCallback(
    (draftData) => <HeroSection data={draftData[0]?.heroSectionSettings} />,
    []
  );

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, []);

  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      {draftMode ? (
        <DraftProvider query={groqQueryHomePageData} renderItem={renderItem} />
      ) : (
        <HeroSection data={heroSectionSettings} />
      )}
    </>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const data = await getGqlHomePageData();

  return {
    props: {
      draftMode,
      data,
    },
  };
}
