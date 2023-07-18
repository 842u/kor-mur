import { useRouter } from 'next/router';
import { useEffect } from 'react';

import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import SelectFilter from '@/components/ui/SelectFilter/SelectFilter';

import apolloClient from '../../../../graphql/apolloClient';
import gqlQueryAllProjects from '../../../../graphql/queryAllProjects';
import gqlQueryAllTags from '../../../../graphql/queryAllTags';
import gqlQueryProjectByTagId from '../../../../graphql/queryProjectByTagId';
import styles from './[slug].module.scss';

const allTagMock = {
  _id: 'all',
  name: 'All',
  slug: {
    current: 'all',
  },
};

export default function SpecificTagPage({ projectsWithQueryTag, tags }) {
  const router = useRouter();

  useEffect(() => {
    tags.forEach((tag) => router.prefetch(`/projects/tag/${tag.slug.current}`));
  }, []);

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
  const allTagsData = await apolloClient.query({
    query: gqlQueryAllTags,
  });

  const tags = [allTagMock, ...allTagsData.data.allTag];

  const paths = tags.map((tag) => ({
    params: { slug: tag.slug.current },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const allTagsData = await apolloClient.query({
    query: gqlQueryAllTags,
  });
  const tags = [allTagMock, ...allTagsData.data.allTag];

  const tagFromQuery = tags.find((tag) => tag.slug.current === params.slug);

  const isAllTag = tagFromQuery._id === allTagMock._id;

  const query = isAllTag ? gqlQueryAllProjects : gqlQueryProjectByTagId;
  const variables = isAllTag ? {} : { where: { _: { references: tagFromQuery._id } } };

  const allProjectsByTagData = await apolloClient.query({
    query,
    variables,
  });

  const projectsWithQueryTag = allProjectsByTagData.data.allProject;

  return {
    props: {
      tags,
      projectsWithQueryTag,
    },
  };
}
