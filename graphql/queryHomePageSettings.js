import { gql } from '@apollo/client';

const gqlQueryHomePageSettings = gql`
  query HomePageSettings {
    allHeroSectionSettings {
      heroSectionImages {
        asset {
          _id
          url
        }
      }
      heroSectionText
    }

    allMottoSectionSettings {
      mottoSectionTitles
      mottoSectionText
      mottoSectionImage {
        asset {
          url
        }
      }
    }

    allFeaturedProjectsSectionSettings {
      title
      description
    }

    allContactSectionSettings {
      title
      description
    }
  }
`;

export default gqlQueryHomePageSettings;
