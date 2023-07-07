import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { dataset, projectId } from './sanity/lib/client';
import defaultDocumentNode from './sanity/lib/defaultDocumentNode';
import deskToolStructureBuilder from './sanity/lib/deskToolStructureBuilder';
import schema from './sanity/lib/schema';
import { singletonActions, singletonTypes } from './sanity/lib/singleton';

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'Production workspace',
    basePath: '/studio/production',
    projectId,
    dataset,
    schema,
    document: {
      actions: (prev, context) =>
        singletonTypes.has(context.schemaType)
          ? prev.filter(({ action }) => action && singletonActions.has(action))
          : prev,
    },
    plugins: [
      deskTool({
        defaultDocumentNode,
        structure: deskToolStructureBuilder,
      }),
      visionTool(),
    ],
  },
  {
    name: 'development-workspace',
    title: 'Development workspace',
    basePath: '/studio/development',
    projectId,
    dataset,
    schema,
    document: {
      actions: (prev, context) =>
        singletonTypes.has(context.schemaType)
          ? prev.filter(({ action }) => action && singletonActions.has(action))
          : prev,
    },
    plugins: [
      deskTool({
        defaultDocumentNode,
        structure: deskToolStructureBuilder,
      }),
      visionTool(),
    ],
  },
]);
