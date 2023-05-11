import { gql } from '@apollo/client';

const GET_ALL_FEATURED_PROJECTS = gql`
  query RootQuery($limit: Int) {
    allFeaturedProjects(limit: $limit) {
      projects {
        _id
        projectName
        projectDescription
        projectSlug {
          current
        }
        projectMainImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default GET_ALL_FEATURED_PROJECTS;
