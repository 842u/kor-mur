import { defineField, defineType } from 'sanity';

const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
    }),

    defineField({
      name: 'slug',
      title: 'Project Slug',
      description:
        'This is used to generate the url for this project e.g. "my-project" will generate the url "https://www.example.com/projects/my-project"',
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
      of: [{ type: 'reference', weak: true, to: { type: 'tag' }, options: { disableNew: true } }],
      validation: (Rule) => Rule.unique(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Project Main Image',
      type: 'image',
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
