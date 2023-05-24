import { gql } from '@apollo/client';

const GET_ALL_FEATURED_PROJECTS = gql`
  query AllFeaturedProjects($limit: Int) {
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
            metadata {
              lqip
            }
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
