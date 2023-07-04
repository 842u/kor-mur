import placeholderImage from 'public/default-image-placeholder.png';

export default function getDefaultProjectSectionSettings() {
  return {
    name: 'Default project name',
    description: 'Default project description',
    year: new Date(),
    location: 'Default project location',
    area: 'Default project area',
    budget: 'Default project budget',
    mainImage: placeholderImage,
  };
}
