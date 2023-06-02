import { CogIcon, DashboardIcon, MasterDetailIcon } from '@sanity/icons';

const settingsIcon = CogIcon;
const pageSettingsIcon = MasterDetailIcon;
const sectionSettingsIcon = DashboardIcon;

const deskToolStructureBuilder = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .icon(settingsIcon)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Home Page Settings')
                .icon(pageSettingsIcon)
                .child(
                  S.list()
                    .title('Home Page Settings')
                    .items([
                      S.listItem()
                        .title('Motto Section Settings')
                        .icon(sectionSettingsIcon)
                        .child(
                          S.document()
                            .schemaType('mottoSectionSettings')
                            .documentId('mottoSectionSettings')
                        ),
                      S.listItem()
                        .title('Featured Projects Section Settings')
                        .icon(sectionSettingsIcon)
                        .child(
                          S.document()
                            .schemaType('featuredProjectsSectionSettings')
                            .documentId('featuredProjectsSectionSettings')
                        ),
                      S.listItem()
                        .title('Contact Section Settings')
                        .icon(sectionSettingsIcon)
                        .child(
                          S.document()
                            .schemaType('contactSectionSettings')
                            .documentId('contactSectionSettings')
                        ),
                    ])
                ),
              S.listItem()
                .title('About Page Settings')
                .icon(pageSettingsIcon)
                .child(
                  S.list()
                    .title('About Page Settings')
                    .items([
                      S.listItem()
                        .title('About Section Settings')
                        .icon(sectionSettingsIcon)
                        .child(
                          S.document()
                            .schemaType('aboutSectionSettings')
                            .documentId('aboutSectionSettings')
                        ),
                    ])
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'mottoSectionSettings',
            'featuredProjectsSectionSettings',
            'contactSectionSettings',
            'aboutSectionSettings',
          ].includes(listItem.getId())
      ),
    ]);

export default deskToolStructureBuilder;
