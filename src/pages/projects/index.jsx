import ProjectCard from '@/components/ProjectCard/ProjectCard';

import apolloClient from '../../../graphql/apolloClient';
import GET_ALL_PROJECTS_DATA from '../../../graphql/queryAllProjectsData';

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <>
      <h1>Projects Page</h1>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} sizes="100vw" />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await apolloClient.query({ query: GET_ALL_PROJECTS_DATA });

  const projects = data.allProject;

  return {
    props: {
      projects,
    },
  };
}
