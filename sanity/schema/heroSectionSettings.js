import { defineField, defineType } from 'sanity';

/**
 * ! Remember to deploy graphql api after changing any schemas
 */

const heroSectionSettings = defineType({
  name: 'heroSectionSettings',
  title: 'Hero Section Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Hero Section Text',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Hero Section Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.unique().min(1).required(),
    }),
  ],
});

export default heroSectionSettings;
