import dynamic from 'next/dynamic';
import { useCallback } from 'react';

import AboutSection from '@/components/sections/AboutSection/AboutSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';

import getGqlAboutPageData from '../../../graphql/queryAboutPageData';
import groqQueryAboutPageData from '../../../groq/queryAboutPageData';
import HeadAboutPage from './HeadAboutPage';
import styles from './index.module.scss';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>loading...</p>,
});

export default function AboutPage({ draftMode, data }) {
  const renderItem = useCallback(
    (draftData) => (
      <>
        <MottoSection data={draftData?.[0]?.mottoSectionSettings} />
        <AboutSection data={draftData?.[0]?.aboutSectionSettings} />
      </>
    ),
    []
  );

  const { mottoSectionSettings, aboutSectionSettings } = data;

  return (
    <>
      <HeadAboutPage />

      <h1 className={styles['page-title']}>About Me Page Title</h1>

      {draftMode ? (
        <DraftProvider query={groqQueryAboutPageData} renderItem={renderItem} />
      ) : (
        <>
          <MottoSection data={mottoSectionSettings} />
          <AboutSection data={aboutSectionSettings} />
        </>
      )}
    </>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const data = await getGqlAboutPageData();

  return {
    props: {
      draftMode,
      data,
    },
  };
}
