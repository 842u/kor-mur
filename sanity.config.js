import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import defaultDocumentNode from './sanity/defaultDocumentNode';
import deskToolStructureBuilder from './sanity/deskToolStructureBuilder';
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
    plugins: [deskTool({ structure: deskToolStructureBuilder }), visionTool()],
  },
  {
    basePath: '/studio/development',
    projectId,
    dataset: 'development',
    name: 'development-workspace',
    title: 'Development workspace',
    schema,
    plugins: [
      deskTool({
        defaultDocumentNode,
        structure: deskToolStructureBuilder,
      }),
      visionTool(),
    ],
  },
]);
