import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  mottoSectionTitles: ['Default Motto Section Title 1', 'Default Motto Section Title 2'],
  mottoSectionText: 'Default Motto Section Text',
  mottoSectionImage: {
    asset: {
      url: placeholderImage,
    },
  },
};

export default function getMottoSectionSetup(settings) {
  return {
    mottoSectionTitles: settings?.[0]?.mottoSectionTitles || defaultSettings.mottoSectionTitles,
    mottoSectionText: settings?.[0]?.mottoSectionText || defaultSettings.mottoSectionText,
    mottoSectionImage:
      settings?.[0]?.mottoSectionImage?.asset?.url || defaultSettings.mottoSectionImage.asset.url,
  };
}

export function getDefaultMottoSectionSettings() {
  return defaultSettings;
}
