import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import SelectFilter from '@/components/ui/SelectFilter/SelectFilter';

import apolloClient from '../../../../graphql/apolloClient';
import GET_ALL_PROJECTS_DATA from '../../../../graphql/queryAllProjectsData';
import GET_ALL_TAGS_DATA from '../../../../graphql/queryAllTagsData';
import GET_PROJECT_DATA_BY_TAG_ID from '../../../../graphql/queryProjectDataByTagId';
import styles from './[slug].module.scss';

const allTagMock = {
  _id: 'all',
  name: 'All',
  slug: {
    current: 'all',
  },
};

export default function SpecificTagPage({ projectsWithQueryTag, tags }) {
  return (
    <>
      <h1 className={styles['page-title']}>Projects Page</h1>
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

  const allTagsData = data.allTag;

  const tags = [allTagMock, ...allTagsData];

  const paths = tags.map((tag) => ({
    params: { slug: tag.slug.current },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const allTagsData = await apolloClient.query({
    query: GET_ALL_TAGS_DATA,
  });

  const tags = [allTagMock, ...allTagsData.data.allTag];

  const tagFromQuery = tags.find((tag) => tag.slug.current === params.slug);

  if (tagFromQuery._id === allTagMock._id) {
    const allProjectsData = await apolloClient.query({ query: GET_ALL_PROJECTS_DATA });

    const projectsWithQueryTag = allProjectsData.data.allProject;

    return {
      props: {
        tags,
        projectsWithQueryTag,
      },
    };
  }

  const projectByTagIdData = await apolloClient.query({
    query: GET_PROJECT_DATA_BY_TAG_ID,
    variables: {
      where: {
        _: {
          references: tagFromQuery._id,
        },
      },
    },
  });

  const projectsWithQueryTag = projectByTagIdData.data.allProject;

  return {
    props: {
      tags,
      projectsWithQueryTag,
    },
  };
}
