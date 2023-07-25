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
      imageFirst {
        asset {
          url
        }
      }
      imageSecond {
        asset {
          url
        }
      }
      description
    }
  }
`;

export default qglQueryAboutPageSettings;
