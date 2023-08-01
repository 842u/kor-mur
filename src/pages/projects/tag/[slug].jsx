import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import TagsContainer from '@/components/ui/TagsContainer/TagsContainer';
import allTagMock from '@/utils/mocks';

import apolloClient from '../../../../graphql/apolloClient';
import gqlQueryAllProjects from '../../../../graphql/queryAllProjects';
import gqlQueryAllTags from '../../../../graphql/queryAllTags';
import gqlQueryProjectByTagId from '../../../../graphql/queryProjectByTagId';
import styles from './[slug].module.scss';

export default function SpecificTagPage({ projectsWithQueryTag, tags }) {
  return (
    <section className={styles['page-section']}>
      <h1 className={`${styles['page-title']}`}>Projects Page Title</h1>
      <TagsContainer className={styles['tags-container']} tags={tags} />
      <div className={styles['projects-container']}>
        {projectsWithQueryTag.map((project, index) => (
          <ProjectCard
            key={project._id}
            className={styles['project-card']}
            priority={index === 0}
            project={project}
            sizes="(max-width: 810px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ))}
      </div>
    </section>
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

  const isAllTag = tagFromQuery?._id === allTagMock._id;

  const query = isAllTag ? gqlQueryAllProjects : gqlQueryProjectByTagId;
  const variables = isAllTag ? {} : { where: { _: { references: tagFromQuery?._id || null } } };

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
