import { defineField, defineType } from 'sanity';

/**
 * ! Remember to deploy graphql api after changing any schemas
 */

const mottoSectionSettings = defineType({
  name: 'mottoSectionSettings',
  title: 'Motto Section Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Motto Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Motto Description',
      type: 'text',
    }),
  ],
});

export default mottoSectionSettings;
