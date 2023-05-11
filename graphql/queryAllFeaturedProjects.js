import { gql } from '@apollo/client';

const GET_ALL_FEATURED_PROJECTS = gql`
  query RootQuery($limit: Int) {
    allFeaturedProjects(limit: $limit) {
      projects {
        _id
        name
        description
        slug {
          current
        }
        mainImage {
          asset {
            url
          }
        }
        tags {
          name
        }
      }
    }
  }
`;

export default GET_ALL_FEATURED_PROJECTS;
