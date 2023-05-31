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
      name: 'title',
      title: 'About Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'firstParagraph',
      title: 'About Section First Paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondParagraph',
      title: 'About Section Second Paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    title: 'About Section Title',
    firstParagraph: 'About Section First Paragraph',
    secondParagraph: 'About Section Second Paragraph',
  },
});

export default aboutSectionSettings;
