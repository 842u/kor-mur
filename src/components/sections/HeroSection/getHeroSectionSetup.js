import { getHeroSectionSchema } from '@/utils/createData/dataSchemas/heroSection';
import { defaultType } from '@/utils/createData/dataTypes';

const defaultData = getHeroSectionSchema(defaultType);

export default function getHeroSectionSetup(data) {
  return {
    text: data?.text || defaultData.text,
    images: data?.images || defaultData.images,
  };
}
