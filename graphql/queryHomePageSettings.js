import { gql } from '@apollo/client';

const GET_HOME_PAGE_SETTINGS = gql`
  query HomePageSettings {
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

export default GET_HOME_PAGE_SETTINGS;
