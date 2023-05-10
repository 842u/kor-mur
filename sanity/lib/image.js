import createImageUrlBuilder from '@sanity/image-url';

import { projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
});

const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};

export default urlForImage;
