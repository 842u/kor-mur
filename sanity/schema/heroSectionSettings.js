import { defineField, defineType } from 'sanity';

/**
 * ! Remember to deploy graphql api after changing any schemas
 */

const heroSectionSettings = defineType({
  name: 'heroSectionSettings',
  title: 'Hero Section Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'imageLeft',
      title: 'Hero Image Left',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageMiddleTop',
      title: 'Hero Image Middle Top',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageMiddleBottom',
      title: 'Hero Image Middle Bottom',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageRightTop',
      title: 'Hero Image Right Top',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageRightBottom',
      title: 'Hero Image Right Bottom',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default heroSectionSettings;
