import { gql } from '@apollo/client';

const gqlQueryAboutSectionSettings = gql`
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

export default gqlQueryAboutSectionSettings;
