import { getFeaturedProjectSchema } from '@/utils/createData/dataSchemas/featuredProject';
import { defaultType } from '@/utils/createData/dataTypes';

const defaultSettings = getFeaturedProjectSchema(defaultType);

export default function getFeaturedProjectSetup(featuredProject) {
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
