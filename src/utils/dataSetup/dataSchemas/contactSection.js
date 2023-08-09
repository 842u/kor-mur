import { defaultType } from '../dataTypes';
import { getImageSchema } from './image';

export function getContactSectionSchema(dataType) {
  return {
    title: `${dataType} title`,
    description: `${dataType} description`,
    image: getImageSchema(dataType),
  };
}

export default function getContactSectionSetup(settings) {
  const defaultData = getContactSectionSchema(defaultType);

  return {
    title: settings?.title || defaultData.title,
    description: settings?.description || defaultData.description,
    image: settings?.image || defaultData.image,
  };
}
