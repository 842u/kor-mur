import { gql } from '@apollo/client';

const GET_CONTACT_SECTION_SETTINGS = gql`
  query ContactSectionSettings {
    allContactSectionSettings {
      title
      description
    }
  }
`;

export default GET_CONTACT_SECTION_SETTINGS;
