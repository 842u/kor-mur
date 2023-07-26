import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  name: 'Default Project Name',
  descriptionFirst: 'Default Project First Description',
  descriptionSecond: 'Default Project Second Description',
  year: new Date(),
  location: 'Default Project location',
  area: 'Default Project Area',
  budget: 'Default Project Budget',
  mainImage: {
    asset: {
      url: placeholderImage,
    },
  },
  secondaryImage: {
    asset: {
      url: placeholderImage,
    },
  },
  images: [],
  tags: [],
  slug: {
    current: 'default-project-slug',
  },
};

export default function getProjectSectionSetup(settings) {
  return {
    name: settings?.[0]?.name || defaultSettings.name,
    descriptionFirst: settings?.[0]?.descriptionFirst || defaultSettings.descriptionFirst,
    descriptionSecond: settings?.[0]?.descriptionSecond || defaultSettings.descriptionSecond,
    year: settings?.[0]?.year || defaultSettings.year,
    location: settings?.[0]?.location || defaultSettings.location,
    area: settings?.[0]?.area || defaultSettings.area,
    budget: settings?.[0]?.budget || defaultSettings.budget,
    mainImage: settings?.[0]?.mainImage || defaultSettings.mainImage,
    secondaryImage: settings?.[0]?.secondaryImage || defaultSettings.secondaryImage,
    images: settings?.[0]?.images || defaultSettings.images,
    tags: settings?.[0]?.tags || defaultSettings.tags,
    slug: settings?.[0]?.slug || defaultSettings.slug,
  };
}
