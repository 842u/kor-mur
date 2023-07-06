import placeholderImage from 'public/default-image-placeholder.png';

const defaultSettings = {
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

export default function getFeaturedProjectsSetup(settings) {
  return {
    title: settings?.[0]?.title || defaultSettings.title,
    description: settings?.[0]?.description || defaultSettings.description,
    featuredProjects: settings?.[0]?.featuredProjects || defaultSettings.featuredProjects,
  };
}
export function getDefaultFeaturedProjectsSettings() {
  return defaultSettings;
}
