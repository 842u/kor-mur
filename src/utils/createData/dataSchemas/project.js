import { defaultType } from '../dataTypes';
import { getImageSchema } from './image';
import { getTagSchema } from './tag';

export function getProjectSchema(dataType) {
  return {
    name: `${dataType} name`,
    descriptionFirst: `${dataType} descriptionFirst`,
    descriptionSecond: `${dataType} descriptionSecond`,
    year: '2000',
    location: `${dataType} location`,
    area: `${dataType} area`,
    budget: `${dataType} budget`,
    mainImage: getImageSchema(dataType),
    secondaryImage: getImageSchema(dataType),
    images: dataType === defaultType ? [] : [getImageSchema(dataType)],
    tags: dataType === defaultType ? [] : [getTagSchema(dataType)],
    slug: {
      current: `${dataType}-slug`,
    },
  };
}
