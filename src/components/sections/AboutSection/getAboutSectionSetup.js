import { getAboutSectionSchema } from '@/utils/createData/dataSchemas/aboutSection';
import { defaultType } from '@/utils/createData/dataTypes';

const defaultData = getAboutSectionSchema(defaultType);

export default function getAboutSectionSetup(settings) {
  return {
    imageFirst: settings?.imageFirst || defaultData.imageFirst,
    imageSecond: settings?.imageSecond || defaultData.imageSecond,
    description: settings?.description || defaultData.description,
  };
}
