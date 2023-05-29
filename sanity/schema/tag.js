import { defineField, defineType } from 'sanity';

const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tag Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Tag Slug',
      description:
        'This is used to generate the url for filtering projects byt tag name e.g. "tag-1" will generate the url "https://www.example.com/projects/tag/tag-1" where all projects with that tag will aperear.',
      type: 'slug',
      options: {
        source: (doc) => {
          return `${doc.name}`;
        },
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default tag;
