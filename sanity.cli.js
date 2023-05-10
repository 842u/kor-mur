import { defineCliConfig } from 'sanity/cli';

import { projectId } from './sanity/env';

export default defineCliConfig({
  api: { projectId },
  graphql: [
    {
      playground: false,
      tag: 'default',
      workspace: 'production-workspace',
      id: 'default-production',
    },
    {
      playground: false,
      tag: 'default',
      workspace: 'development-workspace',
      id: 'default-development',
    },
  ],
});
