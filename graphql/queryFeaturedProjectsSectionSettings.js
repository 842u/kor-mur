import { gql } from '@apollo/client';

const GET_FEATURED_PROJECTS_SECTION_SETTINGS = gql`
  query FeaturedProjectsSectionSettings {
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
  }
`;

export default GET_FEATURED_PROJECTS_SECTION_SETTINGS;
