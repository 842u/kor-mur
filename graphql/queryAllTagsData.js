import { gql } from '@apollo/client';

const GET_ALL_TAGS_DATA = gql`
  query AllTagsData {
    allTag {
      _id
      name
      slug {
        current
      }
    }
  }
`;

export default GET_ALL_TAGS_DATA;
