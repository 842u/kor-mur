import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import TagsContainer from '@/components/ui/TagsContainer/TagsContainer';
import tagMock from '@/utils/dataMocks';

import getGqlProjectsData from '../../../../graphql/queryProjects';
import getGqlProjectsByTagIdData from '../../../../graphql/queryProjectsByTagId';
import getGqlTagsData from '../../../../graphql/queryTags';
import styles from './[slug].module.scss';
import HeadTagPage from './HeadTagPage';

export default function TagPage({ projects, tags, tag }) {
  return (
    <>
      <HeadTagPage tag={tag} />

      <section className={styles['page-section']}>
        <h1>Projects Page Title</h1>

        <TagsContainer className={styles['tags-container']} tags={tags} />

        <div className={styles['projects-container']}>
          {projects?.map((project) => (
            <ProjectCard
              key={project._id}
              className={styles['project-card']}
              project={project}
              sizes="(max-width: 810px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const { tags } = await getGqlTagsData();

  const paths = tags.map((tag) => ({
    params: { slug: tag.slug.current },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { tags } = await getGqlTagsData();
  let projects = [];

  const tagWithQuerySlug = tags.find((tag) => tag.slug.current === params.slug);

  const isAllTag = tagWithQuerySlug?._id === tagMock._id;

  if (isAllTag) {
    projects = await getGqlProjectsData();
  } else {
    projects = await getGqlProjectsByTagIdData(tagWithQuerySlug?._id);
  }

  return {
    props: {
      tags,
      projects,
      tag: tagWithQuerySlug,
    },
  };
}
