import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  text: 'Default Hero Section Text',
  images: [
    {
      asset: {
        _id: 'default-image-placeholder',
        url: placeholderImage,
      },
    },
  ],
};

export default function getHeroSectionSetup(settings) {
  return {
    text: settings?.[0]?.text || defaultSettings.text,
    images: settings?.[0]?.images || defaultSettings.images,
  };
}
