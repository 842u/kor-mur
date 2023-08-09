import { defaultType } from '../dataTypes';
import { getImageSchema } from './image';

export function getHeroSectionSchema(dataType) {
  return {
    text: `${dataType} text`,
    images: [getImageSchema(dataType)],
  };
}

export default function getHeroSectionSetup(data) {
  const defaultData = getHeroSectionSchema(defaultType);

  return {
    text: data?.text || defaultData.text,
    images: data?.images || defaultData.images,
  };
}
