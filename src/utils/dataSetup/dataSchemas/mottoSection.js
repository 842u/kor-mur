import { getImageSchema } from './image';

export function getMottoSectionSchema(dataType) {
  return {
    titles: [`${dataType} title 1`, `${dataType} title 2`],
    text: `${dataType} text`,
    image: getImageSchema(dataType),
  };
}
