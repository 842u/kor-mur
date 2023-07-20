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
      title
      text
      description
      image {
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
