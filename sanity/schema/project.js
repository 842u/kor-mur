import { defineField, defineType } from 'sanity';

const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),

    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
    }),

    defineField({
      name: 'projectSlug',
      title: 'Project Slug',
      description:
        'This is used to generate the url for this project e.g. "my-project" will generate the url "https://www.example.com/projects/my-project"',
      type: 'slug',
      options: {
        source: (doc) => {
          return `${doc.projectName}`;
        },
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'projectMainImage',
      title: 'Project Main Image',
      type: 'image',
    }),

    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
});

export default project;
