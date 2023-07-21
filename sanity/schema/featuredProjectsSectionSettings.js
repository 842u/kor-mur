import { defineField, defineType } from 'sanity';

/**
 * ! Remember to deploy graphql api after changing any schemas
 */

const featuredProjectsSectionSettings = defineType({
  name: 'featuredProjectsSectionSettings',
  title: 'Featured Projects Section Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Featured Projects Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Featured Projects Section description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    title: 'Featured Projects Section Title',
    description: 'Featured Projects Section Description',
  },
});

export default featuredProjectsSectionSettings;
