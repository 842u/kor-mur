import apolloClient from '../../../../graphql/apolloClient';
import GET_ALL_TAGS_DATA from '../../../../graphql/queryAllTagsData';
import GET_PROJECT_DATA_BY_TAG_ID from '../../../../graphql/queryProjectDataByTagId';

export default function SpecificTagPage() {
  return <h1>tag page</h1>;
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
      projectsWithTag: projectsWithQueryTag,
    },
  };
}
