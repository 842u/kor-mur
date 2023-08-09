import { getImageSchema } from './image';

export function getContactSectionSchema(dataType) {
  return {
    title: `${dataType} title`,
    description: `${dataType} description`,
    image: getImageSchema(dataType),
  };
}
