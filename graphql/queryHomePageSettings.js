import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query HomePageSettings($where: ProjectFilter) {
    allHeroSectionSettings {
      text
      images {
        asset {
          _id
          url
        }
      }
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
      slug {
        current
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

const variables = {
  where: {
    featured: {
      eq: true,
    },
  },
};

export default async function getHomePageSettings() {
  const { data } = await apolloClient.query({
    query,
    variables,
  });

  return {
    heroSectionSettings: data.allHeroSectionSettings,
    mottoSectionSettings: data.allMottoSectionSettings,
    featuredProjects: data.allProject,
    contactSectionSettings: data.allContactSectionSettings,
  };
}
