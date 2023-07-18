import { gql } from '@apollo/client';

const gqlQueryProjectSlugByTagId = gql`
  query ProjectSlugByTagId($where: ProjectFilter) {
    allProject(where: $where) {
      slug {
        current
      }
    }
  }
`;

export default gqlQueryProjectSlugByTagId;
