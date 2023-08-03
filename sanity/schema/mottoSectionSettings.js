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
      name: 'titles',
      title: 'Motto Section Titles',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: 'text',
      title: 'Motto Section Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Motto Section Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    mottoSectionTitles: ['Motto title 1', 'Motto title 2'],
    mottoSectionText: 'Motto Section Text',
  },
});

export default mottoSectionSettings;
