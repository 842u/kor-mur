import { gql } from '@apollo/client';

const GET_ALL_PROJECTS_SLUGS = gql`
  query AllProjectsSlugs {
    allProject {
      slug {
        current
      }
    }
  }
`;

export default GET_ALL_PROJECTS_SLUGS;
