import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { projectId } from './sanity/env';
import schema from './sanity/schema';

export default defineConfig([
  {
    basePath: '/studio/production',
    projectId,
    dataset: 'production',
    name: 'production-workspace',
    title: 'Production workspace',
    schema,
    plugins: [deskTool()],
  },
  {
    basePath: '/studio/development',
    projectId,
    dataset: 'development',
    name: 'development-workspace',
    title: 'Development workspace',
    schema,
    plugins: [deskTool()],
  },
]);
