import { gql } from '@apollo/client';

const qglQueryAboutPageSettings = gql`
  query AboutPageSettings {
    allMottoSectionSettings {
      mottoSectionTitles
      mottoSectionText
      mottoSectionImage {
        asset {
          url
        }
      }
    }

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

export default qglQueryAboutPageSettings;
