import { useContext, useEffect } from 'react';

import ProjectSection from '@/components/sections/ProjectSection/ProjectSection';
import DraftModeContext from '@/context/DraftModeContext';
import SanityReadTokenContext from '@/context/SanityReadTokenContext';

import apolloClient from '../../../graphql/apolloClient';
import gqlQueryAllProjectsSlugs from '../../../graphql/queryAllProjectsSlugs';
import gqlQueryProjectBySlug from '../../../graphql/queryProjectDataBySlug';

export default function SpecificProjectPage({ readToken, draftMode, project }) {
  const { setIsDraftMode } = useContext(DraftModeContext);
  const { setSanityReadToken } = useContext(SanityReadTokenContext);

  useEffect(() => {
    setIsDraftMode(draftMode);
    setSanityReadToken(readToken);
  }, []);

  return <ProjectSection settings={project} />;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gqlQueryAllProjectsSlugs,
  });

  const paths = data.allProject.map((project) => ({
    params: { slug: project.slug.current },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, draftMode = false }) {
  const readToken = draftMode ? process.env.SANITY_READ_TOKEN : '';

  const { data } = await apolloClient.query({
    query: gqlQueryProjectBySlug,
    variables: {
      where: {
        slug: {
          current: {
            eq: params.slug,
          },
        },
      },
    },
  });

  const project = data.allProject;

  return {
    props: {
      readToken,
      draftMode,
      project,
    },
  };
}
