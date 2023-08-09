import { defaultType } from '../dataTypes';
import { getImageSchema } from './image';

export function getMottoSectionSchema(dataType) {
  return {
    titles: [`${dataType} title 1`, `${dataType} title 2`],
    text: `${dataType} text`,
    image: getImageSchema(dataType),
  };
}

export default function getMottoSectionSetup(data) {
  const defaultData = getMottoSectionSchema(defaultType);

  return {
    titles: data?.titles || defaultData.titles,
    text: data?.text || defaultData.text,
    image: data?.image?.asset?.url || defaultData.image.asset.url,
  };
}
