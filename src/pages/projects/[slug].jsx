import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect } from 'react';

import ProjectSection from '@/components/sections/ProjectSection/ProjectSection';
import DraftModeContext from '@/context/DraftModeContext';

import getGqlAllProjectsSlugsData from '../../../graphql/queryAllProjectsSlugs';
import getGqlProjecBySlugData from '../../../graphql/queryProjectDataBySlug';
import groqQueryProjectBySlug from '../../../groq/queryProjectBySlug';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ProjectPage({ draftMode, project }) {
  const { setIsDraftMode } = useContext(DraftModeContext);
  const router = useRouter();

  const querySlug = router.query;

  const renderItem = useCallback((draftData) => <ProjectSection data={draftData} />, []);

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, []);

  return (
    <>
      <Head>
        <title>Project Page</title>
      </Head>
      {draftMode ? (
        <DraftProvider
          query={groqQueryProjectBySlug}
          queryParams={querySlug}
          renderItem={renderItem}
        />
      ) : (
        <ProjectSection data={project} />
      )}
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getGqlAllProjectsSlugsData();

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, draftMode = false }) {
  const { project } = await getGqlProjecBySlugData(params.slug);

  return {
    props: {
      draftMode,
      project,
    },
  };
}
