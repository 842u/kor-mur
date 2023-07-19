import { useContext, useEffect } from 'react';

import ProjectSection from '@/components/sections/ProjectSection/ProjectSection';
import DraftModeContext from '@/context/DraftModeContext';

import apolloClient from '../../../graphql/apolloClient';
import gqlQueryAllProjectsSlugs from '../../../graphql/queryAllProjectsSlugs';
import gqlQueryProjectBySlug from '../../../graphql/queryProjectDataBySlug';

export default function SpecificProjectPage({ draftMode, project }) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  useEffect(() => {
    setIsDraftMode(draftMode);
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

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, draftMode = false }) {
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

  const project = data?.allProject;

  return {
    props: {
      project,
      draftMode,
    },
  };
}
