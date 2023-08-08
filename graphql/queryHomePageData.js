import { gql } from '@apollo/client';

import apolloClient from './apolloClient';

const query = gql`
  query HomePageData($where: ProjectFilter) {
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
      titles
      text
      image {
        asset {
          url
        }
      }
    }

    allProject(where: $where) {
      _id
      name
      descriptionFirst
      descriptionSecond
      tags {
        _id
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

export default async function getGqlHomePageData() {
  const { data } = await apolloClient.query({
    query,
    variables,
  });

  return {
    heroSectionSettings: data.allHeroSectionSettings[0],
    mottoSectionSettings: data.allMottoSectionSettings[0],
    featuredProjects: data.allProject,
    contactSectionSettings: data.allContactSectionSettings[0],
  };
}
