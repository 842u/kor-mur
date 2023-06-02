import { gql } from '@apollo/client';

const GET_ABOUT_SECTION_SETTINGS = gql`
  query AboutSectionSettings {
    allAboutSectionSettings {
      title
      firstParagraph
      secondParagraph
      image {
        asset {
          url
        }
      }
    }
  }
`;

export default GET_ABOUT_SECTION_SETTINGS;
