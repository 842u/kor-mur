import { gql } from '@apollo/client';

const GET_PROJECT_DATA_BY_TAG_ID = gql`
  query ProjectByTagId($where: ProjectFilter) {
    allProject(where: $where) {
      _id
      name
      description
      slug {
        current
      }
      tags {
        name
      }
      mainImage {
        asset {
          url
        }
      }
      images {
        asset {
          url
        }
      }
    }
  }
`;

export default GET_PROJECT_DATA_BY_TAG_ID;
