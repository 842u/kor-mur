import Image from 'next/image';

import apolloClient from '../../../graphql/apolloClient';
import GET_ALL_PROJECTS_SLUGS from '../../../graphql/queryAllProjectsSlugs';
import GET_PROJECT_BY_SLUG from '../../../graphql/queryProjectBySlug';

export default function Project({ project }) {
  return (
    <>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <Image alt={`${project.name}`} height={400} src={project.mainImage.asset.url} width={400} />
    </>
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

export async function getStaticProps({ params }) {
  const { data } = await apolloClient.query({
    query: GET_PROJECT_BY_SLUG,
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

  const project = data.allProject[0];

  return {
    props: {
      project,
    },
  };
}
