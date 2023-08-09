import { defaultType } from '../dataTypes';
import { getImageSchema } from './image';
import { getTagSchema } from './tag';

export function getFeaturedProjectSchema(dataType) {
  return {
    _id: `${dataType} _id`,
    name: `${dataType} name`,
    descriptionFirst: `${dataType} descriptionFirst`,
    descriptionSecond: `${dataType} descriptionSecond`,
    slug: {
      current: `${dataType}-slug`,
    },
    tags: dataType === defaultType ? [] : [getTagSchema(dataType)],
    mainImage: getImageSchema(dataType),
  };
}
