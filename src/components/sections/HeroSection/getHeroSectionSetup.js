import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
  imageLeft: placeholderImage,
  imageMiddleTop: placeholderImage,
  imageMiddleBottom: placeholderImage,
  imageRightTop: placeholderImage,
  imageRightBottom: placeholderImage,
};

export default function getHeroSectionSetup(settings) {
  return {
    imageLeft: settings?.[0]?.imageLeft?.asset?.url || defaultSettings.imageLeft,
    imageMiddleTop: settings?.[0]?.imageMiddleTop?.asset?.url || defaultSettings.imageMiddleTop,
    imageMiddleBottom:
      settings?.[0]?.imageMiddleBottom?.asset?.url || defaultSettings.imageMiddleBottom,
    imageRightTop: settings?.[0]?.imageRightTop?.asset?.url || defaultSettings.imageRightTop,
    imageRightBottom:
      settings?.[0]?.imageRightBottom?.asset?.url || defaultSettings.imageRightBottom,
  };
}
