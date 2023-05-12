import { gql } from '@apollo/client';

const GET_ALL_PROJECT = gql`
  query RootQuery {
    allProject {
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

export default GET_ALL_PROJECT;
