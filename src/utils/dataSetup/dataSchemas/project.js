import { defaultType } from '../dataTypes';
import { getImageSchema } from './image';
import { getTagSchema } from './tag';

export function getProjectSchema(dataType) {
  return {
    name: `${dataType} name`,
    descriptionFirst: `${dataType} descriptionFirst`,
    descriptionSecond: `${dataType} descriptionSecond`,
    year: '2000',
    location: `${dataType} location`,
    area: `${dataType} area`,
    budget: `${dataType} budget`,
    mainImage: getImageSchema(dataType),
    secondaryImage: getImageSchema(dataType),
    images: dataType === defaultType ? [] : [getImageSchema(dataType)],
    tags: dataType === defaultType ? [] : [getTagSchema(dataType)],
    slug: {
      current: `${dataType}-slug`,
    },
  };
}

export default function getProjectSetup(data) {
  const defaultData = getProjectSchema(defaultType);

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
