import ProjectCard from '@/components/ProjectCard/ProjectCard';
import SelectFilter from '@/components/SelectFilter/SelectFilter';

import apolloClient from '../../../graphql/apolloClient';
import GET_ALL_PROJECTS_DATA from '../../../graphql/queryAllProjectsData';
import GET_ALL_TAGS_DATA from '../../../graphql/queryAllTags';
import styles from './index.module.scss';

export default function Projects({ projects, tags }) {
  return (
    <>
      <h1 className={styles['page-title']}>Projects Page</h1>
      <SelectFilter options={tags} />
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} sizes="100vw" />
      ))}
    </>
  );
}

export async function getStaticProps() {
  let data;

  ({ data } = await apolloClient.query({ query: GET_ALL_PROJECTS_DATA }));
  const projects = data.allProject;

  ({ data } = await apolloClient.query({ query: GET_ALL_TAGS_DATA }));
  const tags = data.allTag;

  return {
    props: {
      projects,
      tags,
    },
  };
}
