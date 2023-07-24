import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  heroSectionText: 'Default Hero Section Text',
  heroSectionImages: [
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
    heroSectionText: settings?.[0]?.heroSectionText || defaultSettings.heroSectionText,
    heroSectionImages: settings?.[0]?.heroSectionImages || defaultSettings.heroSectionImages,
  };
}
