const defaultSettings = {
  title: 'Default Contact Section Title',
  description: 'Default Contact Section Description',
};

export default function getContactSectionSetup(settings) {
  return {
    title: settings?.[0]?.title || defaultSettings.title,
    description: settings?.[0]?.description || defaultSettings.description,
  };
}

export function getDefaultContactSectionSettings() {
  return defaultSettings;
}
