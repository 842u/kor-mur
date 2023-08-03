import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  _id: 'Default Featured Project _id',
  name: 'Default Featured Project Name',
  descriptionFirst: 'Default Featured Project First Description',
  descriptionSecond: 'Default Featured Project Second Description',
  slug: {
    current: 'default-featured-project-slug',
  },
  tags: {
    name: 'Default Featured Project Tag Name',
    slug: {
      current: 'default-featured-project-tag-slug',
    },
  },
  mainImage: {
    asset: {
      url: placeholderImage,
    },
  },
};

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