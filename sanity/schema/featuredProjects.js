import { defineField, defineType } from 'sanity';

const featuredProjects = defineType({
  name: 'featuredProjects',
  title: 'Featured Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        { type: 'reference', weak: true, to: { type: 'project' }, options: { disableNew: true } },
      ],
      validation: (Rule) => Rule.unique().max(3),
    }),
  ],
});

export default featuredProjects;
