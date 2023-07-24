import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  name: 'Default project name',
  descriptionFirst: 'Default project first description',
  descriptionSecond: 'Default project second description',
  year: new Date(),
  location: 'Default project location',
  area: 'Default project area',
  budget: 'Default project budget',
  mainImage: {
    asset: {
      url: placeholderImage,
    },
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
  };
}
