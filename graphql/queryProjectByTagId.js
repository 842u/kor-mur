import { gql } from '@apollo/client';

const gqlQueryProjectByTagId = gql`
  query ProjectByTagId($where: ProjectFilter) {
    allProject(where: $where) {
      _id
      name
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;

export default gqlQueryProjectByTagId;
