import { getProjectSchema } from '@/utils/createData/dataSchemas/project';
import { defaultType } from '@/utils/createData/dataTypes';

const defaultData = getProjectSchema(defaultType);

export default function getProjectSectionSetup(data) {
  return {
    name: data?.name || defaultData.name,
    descriptionFirst: data?.descriptionFirst || defaultData.descriptionFirst,
    descriptionSecond: data?.descriptionSecond || defaultData.descriptionSecond,
    year: data?.year || defaultData.year,
    location: data?.location || defaultData.location,
    area: data?.area || defaultData.area,
    budget: data?.budget || defaultData.budget,
    mainImage: data?.mainImage || defaultData.mainImage,
    secondaryImage: data?.secondaryImage || defaultData.secondaryImage,
    images: data?.images || defaultData.images,
    tags: data?.tags || defaultData.tags,
    slug: data?.slug || defaultData.slug,
  };
}
