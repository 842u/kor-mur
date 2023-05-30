import { gql } from '@apollo/client';

const GET_MOTTO_SECTION_SETTINGS = gql`
  query MottoSectionSettings {
    allMottoSectionSettings {
      title
      text
      description
      image {
        asset {
          url
        }
      }
    }
  }
`;

export default GET_MOTTO_SECTION_SETTINGS;
