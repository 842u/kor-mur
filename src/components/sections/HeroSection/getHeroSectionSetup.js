import placeholderImage from 'public/default-image-placeholder.png';

const defaultData = {
  text: 'Default Text',
  images: [
    {
      asset: {
        _id: 'Default ID',
        url: placeholderImage,
      },
    },
  ],
};

export default function getHeroSectionSetup(data) {
  return {
    text: data?.text || defaultData.text,
    images: data?.images || defaultData.images,
  };
}

export function getHeroSectionDefaultData() {
  return defaultData;
}
