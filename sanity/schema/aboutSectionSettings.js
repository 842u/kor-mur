import { defineField, defineType } from 'sanity';

/**
 * ! Remember to deploy graphql api after changing any schemas
 */

const aboutSectionSettings = defineType({
  name: 'aboutSectionSettings',
  title: 'About Section Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'imageFirst',
      title: 'About Section First Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageSecond',
      title: 'About Section Second Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'About Section Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default aboutSectionSettings;
