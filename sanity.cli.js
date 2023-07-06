import { defineCliConfig } from 'sanity/cli';

import { dataset, projectId } from './sanity/lib/client';

export default defineCliConfig({
  api: { projectId, dataset },
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
