import { gql } from '@apollo/client';

const gqlQueryHomePageSettings = gql`
  query HomePageSettings {
    allHeroSectionSettings {
      imageLeft {
        asset {
          url
        }
      }

      imageMiddleTop {
        asset {
          url
        }
      }

      imageMiddleBottom {
        asset {
          url
        }
      }

      imageRightTop {
        asset {
          url
        }
      }

      imageRightBottom {
        asset {
          url
        }
      }
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
