import { gql } from '@apollo/client';

const gqlQueryAllTags = gql`
  query AllTags {
    allTag {
      _id
      name
      slug {
        current
      }
    }
  }
`;

export default gqlQueryAllTags;
