import placeholderImage from 'public/default-image-placeholder.png';

import { defaultType } from '../dataTypes';

export function getImageSchema(dataType) {
  return {
    asset: {
      _id: `${dataType} _id`,
      url: dataType === defaultType ? placeholderImage : `/${dataType}/url`,
    },
  };
}
