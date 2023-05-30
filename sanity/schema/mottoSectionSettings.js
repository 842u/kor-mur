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
      title: 'Motto Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Motto Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Motto Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Motto Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    title: 'Motto Section Title',
    text: 'Motto Section Text',
    description: 'Motto Section Description',
  },
});

export default mottoSectionSettings;
