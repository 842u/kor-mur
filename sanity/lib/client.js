import { createClient } from 'next-sanity';

import { apiVersion, projectId, useCdn } from '../env';

const client = createClient({
  apiVersion,
  projectId,
  useCdn,
});

export default client;
