import { gql } from '@apollo/client';

const gqlQueryHomePageSettings = gql`
  query HomePageSettings($where: ProjectFilter) {
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

    allProject(where: $where) {
      name
      descriptionFirst
      descriptionSecond
      tags {
        name
        slug {
          current
        }
      }
      mainImage {
        asset {
          url
        }
      }
    }

    allContactSectionSettings {
      title
      description
      image {
        asset {
          url
        }
      }
    }
  }
`;

export default gqlQueryHomePageSettings;
