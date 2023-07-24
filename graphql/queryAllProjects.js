import { gql } from '@apollo/client';

const gqlQueryAllProjects = gql`
  query AllProjects {
    allProject {
      _id
      slug {
        current
      }
      name
      descriptionFirst
      descriptionSecond
      mainImage {
        asset {
          url
        }
      }
      images {
        asset {
          url
        }
      }
      tags {
        name
        slug {
          current
        }
      }
    }
  }
`;

export default gqlQueryAllProjects;
