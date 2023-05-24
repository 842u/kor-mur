import { gql } from '@apollo/client';

const GET_ALL_PROJECTS_DATA = gql`
  query AllProjectsData {
    allProject {
      _id
      slug {
        current
      }
      name
      description
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
      tags {
        name
      }
    }
  }
`;

export default GET_ALL_PROJECTS_DATA;
