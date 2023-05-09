import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};

export default urlForImage;
