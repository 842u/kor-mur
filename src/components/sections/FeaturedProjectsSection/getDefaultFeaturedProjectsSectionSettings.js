import placeholderImage from 'public/default-image-placeholder.png';

export default function getDefaultFeaturedProjectsSettings() {
  return {
    _id: 'defaultId',
    title: 'Default featured projects title',
    description: 'Default featured projects description',
    featuredProjects: [
      {
        name: 'Default featured project name',
        description: 'Default featured project description',
        slug: {
          current: 'default-featured-project-slug',
        },
        mainImage: {
          asset: {
            url: placeholderImage,
          },
        },
      },
    ],
  };
}
