const tagMock = {
  _id: 'all',
  name: 'All',
  slug: {
    current: 'all',
  },
};

export default tagMock;

export function getImageMockData() {
  return {
    asset: {
      _id: 'Mock ID',
      url: '/mock/url',
    },
  };
}

export function getHeroSectionMockData() {
  return {
    text: 'Mock Text',
    images: [getImageMockData()],
  };
}

export function getMottoSectionMockData() {
  return {
    titles: ['Mock Title 1', 'Mock Title 2'],
    text: 'Mock Text',
    image: getImageMockData(),
  };
}
