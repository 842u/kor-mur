import ProjectCard from '@/components/ProjectCard/ProjectCard';
import SelectFilter from '@/components/SelectFilter/SelectFilter';

import apolloClient from '../../../graphql/apolloClient';
import GET_ALL_PROJECTS_DATA from '../../../graphql/queryAllProjectsData';

function getProjectsTags(projects) {
  const tags = new Set();

  projects.forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => {
        tags.add(tag.name);
      });
    }
  });

  return Array.from(tags);
}

export default function Projects({ projects, tags }) {
  return (
    <>
      <h1>Projects Page</h1>
      <SelectFilter options={tags} />
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} sizes="100vw" />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await apolloClient.query({ query: GET_ALL_PROJECTS_DATA });

  const projects = data.allProject;
  const tags = getProjectsTags(projects);

  return {
    props: {
      projects,
      tags,
    },
  };
}
