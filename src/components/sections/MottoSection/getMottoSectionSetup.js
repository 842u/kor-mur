import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  titles: ['Default Motto Section Title 1', 'Default Motto Section Title 2'],
  text: 'Default Motto Section Text',
  image: {
    asset: {
      url: placeholderImage,
    },
  },
};

export default function getMottoSectionSetup(settings) {
  return {
    titles: settings?.[0]?.titles || defaultSettings.titles,
    text: settings?.[0]?.text || defaultSettings.text,
    image: settings?.[0]?.image?.asset?.url || defaultSettings.image.asset.url,
  };
}

export function getDefaultMottoSectionSettings() {
  return defaultSettings;
}
