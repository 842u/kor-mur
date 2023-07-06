import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  title: 'Default motto title',
  text: 'Default motto text',
  description: 'Default motto description',
  image: placeholderImage,
};

export default function getMottoSectionSetup(settings) {
  return {
    title: settings?.[0]?.title || defaultSettings.title,
    text: settings?.[0]?.text || defaultSettings.text,
    description: settings?.[0]?.description || defaultSettings.description,
    image: settings?.[0]?.image?.asset?.url || defaultSettings.image,
  };
}

export function getDefaultMottoSectionSettings() {
  return defaultSettings;
}
