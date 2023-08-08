import { getImageSchema } from './image';

export function getAboutSectionSchema(dataType) {
  return {
    imageFirst: getImageSchema(dataType),
    imageSecond: getImageSchema(dataType),
    description: `${dataType} description`,
  };
}
