/**
 * ! Remember to deploy graphql api after changing any schemas
 */

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
  ],
};

export default schema;
