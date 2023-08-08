import placeholderImage from 'public/default-image-placeholder.png';

const defaultData = {
  titles: ['Default Title 1', 'Default Title 2'],
  text: 'Default Text',
  image: {
    asset: {
      url: placeholderImage,
    },
  },
};

export default function getMottoSectionSetup(data) {
  return {
    titles: data?.titles || defaultData.titles,
    text: data?.text || defaultData.text,
    image: data?.image?.asset?.url || defaultData.image.asset.url,
  };
}

export function getMottoSectionDefaultData() {
  return defaultData;
}
