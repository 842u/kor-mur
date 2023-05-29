import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import SelectFilter from '@/components/ui/SelectFilter/SelectFilter';

import apolloClient from '../../../../graphql/apolloClient';
import GET_ALL_TAGS_DATA from '../../../../graphql/queryAllTagsData';
import GET_PROJECT_DATA_BY_TAG_ID from '../../../../graphql/queryProjectDataByTagId';

export default function SpecificTagPage({ projectsWithQueryTag, tags }) {
  return (
    <>
      <h1>Projects Page</h1>
      <SelectFilter options={tags} />
      {projectsWithQueryTag.map((project) => (
        <ProjectCard key={project._id} project={project} sizes="100vw" />
      ))}
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: GET_ALL_TAGS_DATA,
  });

  const paths = data.allTag.map((tag) => ({
    params: { slug: tag.slug.current },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let data;

  ({ data } = await apolloClient.query({
    query: GET_ALL_TAGS_DATA,
  }));
  const tags = data.allTag;

  const tagFromQuery = data.allTag.find((tag) => tag.slug.current === params.slug);

  ({ data } = await apolloClient.query({
    query: GET_PROJECT_DATA_BY_TAG_ID,
    variables: {
      where: {
        _: {
          references: tagFromQuery._id,
        },
      },
    },
  }));

  const projectsWithQueryTag = data.allProject;

  return {
    props: {
      projectsWithQueryTag,
      tags,
    },
  };
}
