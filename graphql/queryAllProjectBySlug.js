import { gql } from '@apollo/client';

const GET_ALL_PROJECT_BY_SLUG = gql`
  query RootQuery($where: ProjectFilter) {
    allProject(where: $where) {
      _id
      name
      description
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;

export default GET_ALL_PROJECT_BY_SLUG;
