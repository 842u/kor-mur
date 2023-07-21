import { defineField, defineType } from 'sanity';

/**
 * ! Remember to deploy graphql api after changing any schemas
 */

const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'featured',
      title: 'Display Project as Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'descriptionFirst',
      title: 'First Project Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'descriptionSecond',
      title: 'Second Project Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Project Year',
      type: 'date',
      options: { dateFormat: 'YYYY' },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Project Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'area',
      title: 'Project Area [ m² ]',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'budget',
      title: 'Project Budget [ PLN ]',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Project Slug',
      type: 'slug',
      options: {
        source: (doc) => {
          return `${doc.name}`;
        },
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tags',
      title: 'Project Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' }, options: { disableNew: true } }],
      validation: (Rule) => Rule.unique(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Project Main Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
});

export default project;
