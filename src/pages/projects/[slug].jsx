import ProjectSection from '@/components/sections/ProjectSection/ProjectSection';

import apolloClient from '../../../graphql/apolloClient';
import GET_ALL_PROJECTS_SLUGS from '../../../graphql/queryAllProjectsSlugs';
import GET_PROJECT_DATA_BY_SLUG from '../../../graphql/queryProjectDataBySlug';

export default function SpecificProjectPage({ readToken, draftMode, projectData }) {
  return (
    <ProjectSection
      draftMode={draftMode}
      projectSectionSettings={projectData}
      readToken={readToken}
    />
  );
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: GET_ALL_PROJECTS_SLUGS,
  });

  const paths = data.allProject.map((project) => ({
    params: { slug: project.slug.current },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, draftMode = false }) {
  const readToken = draftMode ? process.env.SANITY_READ_TOKEN : '';

  const { data } = await apolloClient.query({
    query: GET_PROJECT_DATA_BY_SLUG,
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

  const projectData = data.allProject;

  return {
    props: {
      readToken,
      draftMode,
      projectData,
    },
  };
}
