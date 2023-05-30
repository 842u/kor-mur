/**
 * ! Remember to deploy graphql api after changing any schemas
 */

import featuredProjects from './schema/featuredProjects';
import mottoSectionSettings from './schema/mottoSectionSettings';
import project from './schema/project';
import tag from './schema/tag';

const schema = {
  types: [project, featuredProjects, tag, mottoSectionSettings],
};

export default schema;
