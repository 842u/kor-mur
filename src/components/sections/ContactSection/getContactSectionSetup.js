import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  title: 'Default Contact Section Title',
  description: 'Default Contact Section Description',
  image: {
    asset: {
      url: placeholderImage,
    },
  },
};

export default function getContactSectionSetup(settings) {
  return {
    title: settings?.[0]?.title || defaultSettings.title,
    description: settings?.[0]?.description || defaultSettings.description,
    image: settings?.[0]?.image || defaultSettings.image,
  };
}

export function getDefaultContactSectionSettings() {
  return defaultSettings;
}
