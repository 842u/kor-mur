import { defaultType } from '../dataTypes';
import { getImageSchema } from './image';
import { getTagSchema } from './tag';

export function getFeaturedProjectSchema(dataType) {
  return {
    _id: `${dataType} _id`,
    name: `${dataType} name`,
    descriptionFirst: `${dataType} descriptionFirst`,
    descriptionSecond: `${dataType} descriptionSecond`,
    slug: {
      current: `${dataType}-slug`,
    },
    tags: dataType === defaultType ? [] : [getTagSchema(dataType)],
    mainImage: getImageSchema(dataType),
  };
}

export default function getFeaturedProjectSetup(featuredProject) {
  const defaultSettings = getFeaturedProjectSchema(defaultType);

  return {
    _id: featuredProject?._id || defaultSettings._id,
    name: featuredProject?.name || defaultSettings.name,
    descriptionFirst: featuredProject?.descriptionFirst || defaultSettings.descriptionFirst,
    descriptionSecond: featuredProject?.descriptionSecond || defaultSettings.descriptionSecond,
    slug: featuredProject?.slug || defaultSettings.slug,
    tags: featuredProject?.tags || defaultSettings.tags,
    mainImage: featuredProject?.mainImage || defaultSettings.mainImage,
  };
}
