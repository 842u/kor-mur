import { createClient } from 'next-sanity';

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-09';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const useCdn = false;

export default function getClient(draftMode = false) {
  const client = createClient({
    apiVersion,
    projectId,
    useCdn,
    dataset,
  });

  return draftMode
    ? client.withConfig({
        perspective: 'previewDrafts',
      })
    : client;
}
