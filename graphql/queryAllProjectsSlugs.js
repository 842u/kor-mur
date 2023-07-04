import { gql } from '@apollo/client';

const gqlQueryAllProjectsSlugs = gql`
  query AllProjectsSlugs {
    allProject {
      slug {
        current
      }
    }
  }
`;

export default gqlQueryAllProjectsSlugs;
