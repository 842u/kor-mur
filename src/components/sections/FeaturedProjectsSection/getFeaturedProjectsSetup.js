const defaultSettings = {
  title: 'Default featured projects title',
  description: 'Default featured projects description',
};

export default function getFeaturedProjectsSetup(settings) {
  return {
    title: settings?.[0]?.title || defaultSettings.title,
    description: settings?.[0]?.description || defaultSettings.description,
  };
}
export function getDefaultFeaturedProjectsSettings() {
  return defaultSettings;
}
