export function getTagSchema(dataType) {
  return {
    _id: `${dataType} _id`,
    name: `${dataType} name`,
    slug: {
      current: `${dataType}-slug`,
    },
  };
}
