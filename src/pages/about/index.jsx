import dynamic from 'next/dynamic';
import { useCallback, useContext, useEffect } from 'react';

import AboutSection from '@/components/sections/AboutSection/AboutSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';
import DraftModeContext from '@/context/DraftModeContext';

import getGqlAboutPageData from '../../../graphql/queryAboutPageSettings';
import groqQueryAboutPageData from '../../../groq/queryAboutPageSettings';
import styles from './index.module.scss';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider/DraftProvider'), {
  loading: () => <p>loading...</p>,
});

export default function AboutPage({ draftMode, data }) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  const renderItem = useCallback(
    (draftData) => (
      <>
        <MottoSection data={draftData?.[0]?.mottoSectionSettings} />
        <AboutSection data={draftData?.[0]?.aboutSectionSettings} />
      </>
    ),
    []
  );

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, []);

  const { mottoSectionSettings, aboutSectionSettings } = data;

  return (
    <>
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
