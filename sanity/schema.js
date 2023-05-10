/*
 * ! Remember to deploy graphql api after changing any schemas !
 */

import project from './schema/Project';

const schema = {
  types: [project],
};

export default schema;
