import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import TagsContainer from '@/components/ui/TagsContainer/TagsContainer';
import tagMock from '@/utils/mocks';

import getGqlAllProjectsData from '../../../../graphql/queryAllProjects';
import getGqlAllTagsData from '../../../../graphql/queryAllTags';
import getGqlProjectsByTagIdData from '../../../../graphql/queryProjectByTagId';
import styles from './[slug].module.scss';

export default function TagPage({ projects, tags }) {
  return (
    <section className={styles['page-section']}>
      <h1>Projects Page Title</h1>
      <TagsContainer className={styles['tags-container']} tags={tags} />
      <div className={styles['projects-container']}>
        {projects.map((project, index) => (
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
  const { tags } = await getGqlAllTagsData();

  const paths = tags.map((tag) => ({
    params: { slug: tag.slug.current },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { tags } = await getGqlAllTagsData();
  let projects = [];

  const tagWithQuerySlug = tags.find((tag) => tag.slug.current === params.slug);

  const isAllTag = tagWithQuerySlug?._id === tagMock._id;

  if (isAllTag) {
    projects = await getGqlAllProjectsData();
  } else {
    projects = await getGqlProjectsByTagIdData(tagWithQuerySlug?._id);
  }

  return {
    props: {
      tags,
      projects,
    },
  };
}
