import { getImageSchema } from './image';

export function getHeroSectionSchema(dataType) {
  return {
    text: `${dataType} text`,
    images: [getImageSchema(dataType)],
  };
}
