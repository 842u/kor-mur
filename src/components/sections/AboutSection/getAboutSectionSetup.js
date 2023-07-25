import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  imageFirst: {
    asset: {
      url: placeholderImage,
    },
  },
  imageSecond: {
    asset: {
      url: placeholderImage,
    },
  },
  description: 'Default About Section Description',
};

export default function getAboutSectionSetup(settings) {
  return {
    imageFirst: settings?.[0]?.imageFirst || defaultSettings.imageFirst,
    imageSecond: settings?.[0]?.imageSecond || defaultSettings.imageSecond,
    description: settings?.[0]?.description || defaultSettings.description,
  };
}

export function getDefaultAboutSectionSettings() {
  return defaultSettings;
}
