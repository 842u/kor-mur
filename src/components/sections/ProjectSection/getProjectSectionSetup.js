import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  name: 'Default project name',
  description: 'Default project description',
  year: new Date(),
  location: 'Default project location',
  area: 'Default project area',
  budget: 'Default project budget',
  mainImage: placeholderImage,
};

export default function getProjectSectionSetup(settings) {
  return {
    name: settings?.[0]?.name || defaultSettings.name,
    description: settings?.[0]?.description || defaultSettings.description,
    year: settings?.[0]?.year || defaultSettings.year,
    location: settings?.[0]?.location || defaultSettings.location,
    area: settings?.[0]?.area || defaultSettings.area,
    budget: settings?.[0]?.budget || defaultSettings.budget,
    mainImage: settings?.[0]?.mainImage?.asset?.url || defaultSettings.mainImage,
  };
}
