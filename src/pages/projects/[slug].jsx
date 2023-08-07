import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect } from 'react';

import ProjectSection from '@/components/sections/ProjectSection/ProjectSection';
import DraftModeContext from '@/context/DraftModeContext';

import getGqlProjecBySlugData from '../../../graphql/queryProjectBySlug';
import getGqlProjectsSlugsData from '../../../graphql/queryProjectsSlugs';
import groqQueryProjectBySlug from '../../../groq/queryProjectBySlug';
import HeadProjectPage from './HeadProjectPage';

const DraftProvider = dynamic(() => import('@/components/providers/DraftProvider'), {
  loading: () => <p>Loading...</p>,
});

export default function ProjectPage({ draftMode, project }) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  const router = useRouter();

  const renderItem = useCallback((draftData) => <ProjectSection data={draftData} />, []);

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, []);

  const querySlug = router.query;

  return (
    <>
      <HeadProjectPage project={project} />

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
  const slugs = await getGqlProjectsSlugsData();

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
