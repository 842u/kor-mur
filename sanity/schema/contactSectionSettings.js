import { defineField, defineType } from 'sanity';

/**
 * ! Remember to deploy graphql api after changing any schemas
 */

const contactSectionSettings = defineType({
  name: 'contactSectionSettings',
  title: 'Contact Section Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Contact Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Contact Section Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Contact Section Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    title: 'Contact Section Title',
    description: 'Contact Section Description',
  },
});

export default contactSectionSettings;
