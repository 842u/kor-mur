import { useContext, useEffect } from 'react';

import ProjectSection from '@/components/sections/ProjectSection/ProjectSection';
import DraftModeContext from '@/context/DraftModeContext';

import getGqlAllProjectsSlugsData from '../../../graphql/queryAllProjectsSlugs';
import getGqlProjecBySlugData from '../../../graphql/queryProjectDataBySlug';

export default function ProjectPage({ draftMode, project }) {
  const { setIsDraftMode } = useContext(DraftModeContext);

  useEffect(() => {
    setIsDraftMode(draftMode);
  }, []);

  return <ProjectSection settings={project} />;
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
