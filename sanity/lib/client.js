import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export default function getClient({ readToken }) {
  const client = createClient({
    apiVersion,
    projectId,
    useCdn,
    dataset,
  });

  return readToken
    ? client.withConfig({
        token: readToken,
        ignoreBrowserTokenWarning: true,
        perspective: 'previewDraft',
      })
    : client;
}
