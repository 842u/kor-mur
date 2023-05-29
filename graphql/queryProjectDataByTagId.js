import { gql } from '@apollo/client';

const GET_PROJECT_DATA_BY_TAG_ID = gql`
  query RootQuery($where: ProjectFilter) {
    allProject(where: $where) {
      name
    }
  }
`;

export default GET_PROJECT_DATA_BY_TAG_ID;
