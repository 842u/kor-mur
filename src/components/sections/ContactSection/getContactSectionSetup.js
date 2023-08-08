import { getContactSectionSchema } from '@/utils/createData/dataSchemas/contactSection';
import { defaultType } from '@/utils/createData/dataTypes';

const defaultData = getContactSectionSchema(defaultType);

export default function getContactSectionSetup(settings) {
  return {
    title: settings?.title || defaultData.title,
    description: settings?.description || defaultData.description,
    image: settings?.image || defaultData.image,
  };
}
