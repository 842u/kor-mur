import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  title: 'Default About Section Title',
  firstParagraph: 'Default About Section First Paragraph',
  secondParagraph: 'Default About Section Second Paragraph',
  image: placeholderImage,
};

export default function getAboutSectionSetup(settings) {
  return {
    title: settings?.[0]?.title || defaultSettings.title,
    firstParagraph: settings?.[0]?.firstParagraph || defaultSettings.firstParagraph,
    secondParagraph: settings?.[0]?.secondParagraph || defaultSettings.secondParagraph,
    image: settings?.[0]?.image?.asset?.url || defaultSettings.image,
  };
}

export function getDefaultAboutSectionSettings() {
  return defaultSettings;
}
