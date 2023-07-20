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
      featuredProjects {
        _id
        name
        description
        mainImage {
          asset {
            url
          }
        }
        tags {
          name
        }
        slug {
          current
        }
      }
    }

    allContactSectionSettings {
      title
      description
    }
  }
`;

export default gqlQueryHomePageSettings;
