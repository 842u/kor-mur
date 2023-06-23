import { definePreview } from 'next-sanity/preview';

import { dataset, projectId } from '../env';

function onPublicAccessOnly() {
  throw new Error('Please login to view preview content');
}

const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly });

export default usePreview;
