import { gql } from '@apollo/client';

const gqlQueryAllProjects = gql`
  query AllProjects {
    allProject {
      _id
      slug {
        current
      }
      name
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;

export default gqlQueryAllProjects;
