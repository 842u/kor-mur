/**
 * ! Remember to deploy graphql api after changing any schemas
 */

import aboutSectionSettings from '../schema/aboutSectionSettings';
import contactSectionSettings from '../schema/contactSectionSettings';
import featuredProjectsSectionSettings from '../schema/featuredProjectsSectionSettings';
import heroSectionSettings from '../schema/heroSectionSettings';
import mottoSectionSettings from '../schema/mottoSectionSettings';
import project from '../schema/project';
import tag from '../schema/tag';
import { singletonTypes } from './singleton';

const schema = {
  types: [
    project,
    tag,
    heroSectionSettings,
    mottoSectionSettings,
    featuredProjectsSectionSettings,
    contactSectionSettings,
    aboutSectionSettings,
  ],

  // disable 'New document' option for singleton types
  templates: (templates) => {
    return templates.filter(({ schemaType }) => !singletonTypes.has(schemaType));
  },
};

export default schema;
