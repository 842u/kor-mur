/**
 * ! Remember to deploy graphql api after changing any schemas
 */

import aboutSectionSettings from './schema/aboutSectionSettings';
import contactSectionSettings from './schema/contactSectionSettings';
import featuredProjectsSectionSettings from './schema/featuredProjectsSectionSettings';
import mottoSectionSettings from './schema/mottoSectionSettings';
import project from './schema/project';
import tag from './schema/tag';

const schema = {
  types: [
    project,
    tag,
    mottoSectionSettings,
    featuredProjectsSectionSettings,
    contactSectionSettings,
    aboutSectionSettings,
  ],
};

export default schema;
