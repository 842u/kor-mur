/**
 * ! Remember to deploy graphql api after changing any schemas
 */

export default {
  name: 'mottoSectionSettings',
  title: 'Motto Section Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Motto Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Motto Description',
      type: 'text',
    },
  ],
};
