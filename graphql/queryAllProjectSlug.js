import { gql } from '@apollo/client';

const GET_ALL_PROJECT_SLUG = gql`
  query RootQuery {
    allProject {
      slug {
        current
      }
    }
  }
`;

export default GET_ALL_PROJECT_SLUG;
