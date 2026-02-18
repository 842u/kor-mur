import { defaultType } from '../dataTypes';

const placeholderImage = '/default-image-placeholder.png';

export function getImageSchema(dataType) {
  return {
    asset: {
      _id: `${dataType} _id`,
      url: dataType === defaultType ? placeholderImage : `/${dataType}/url`,
    },
  };
}
