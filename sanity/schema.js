/*
 * ! Remember to deploy graphql api after changing any schemas !
 */

import featuredProjects from './schema/featuredProjects';
import project from './schema/project';

const schema = {
  types: [project, featuredProjects],
};

export default schema;
