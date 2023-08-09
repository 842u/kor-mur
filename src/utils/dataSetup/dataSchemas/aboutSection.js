import { defaultType } from '../dataTypes';
import { getImageSchema } from './image';

export function getAboutSectionSchema(dataType) {
  return {
    imageFirst: getImageSchema(dataType),
    imageSecond: getImageSchema(dataType),
    description: `${dataType} description`,
  };
}

export default function getAboutSectionSetup(data) {
  const defaultData = getAboutSectionSchema(defaultType);

  return {
    imageFirst: data?.imageFirst || defaultData.imageFirst,
    imageSecond: data?.imageSecond || defaultData.imageSecond,
    description: data?.description || defaultData.description,
  };
}
