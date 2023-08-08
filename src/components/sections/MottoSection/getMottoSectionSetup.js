import { getMottoSectionSchema } from '@/utils/createData/dataSchemas/mottoSection';
import { defaultType } from '@/utils/createData/dataTypes';

const defaultData = getMottoSectionSchema(defaultType);

export default function getMottoSectionSetup(data) {
  return {
    titles: data?.titles || defaultData.titles,
    text: data?.text || defaultData.text,
    image: data?.image?.asset?.url || defaultData.image.asset.url,
  };
}
