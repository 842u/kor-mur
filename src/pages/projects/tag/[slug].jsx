import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import TagLabel from '@/components/ui/TagLabel/TagLabel';
import { secondaryFont } from '@/utils/fonts';
import allTagMock from '@/utils/mocks';

import apolloClient from '../../../../graphql/apolloClient';
import gqlQueryAllProjects from '../../../../graphql/queryAllProjects';
import gqlQueryAllTags from '../../../../graphql/queryAllTags';
import gqlQueryProjectByTagId from '../../../../graphql/queryProjectByTagId';
import styles from './[slug].module.scss';

export default function SpecificTagPage({ projectsWithQueryTag, tags }) {
  return (
    <>
      <h1 className={`${styles['page-title']} ${secondaryFont.className}`}>Projects Page Title</h1>
      <div className={styles['tag-container']}>
        {tags.map((tag) => (
          <TagLabel key={tag._id} tag={tag} />
        ))}
      </div>
      <div className={styles['projects-container']}>
        {projectsWithQueryTag.map((project) => (
          <ProjectCard
            key={project._id}
            className={styles['project-card']}
            project={project}
            sizes="(max-width: 810px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ))}
      </div>
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
