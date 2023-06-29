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
                      S.documentListItem()
                        .schemaType('heroSectionSettings')
                        .id('heroSectionSettings')
                        .title('Hero Section Settings')
                        .icon(sectionSettingsIcon),
                      S.documentListItem()
                        .schemaType('mottoSectionSettings')
                        .id('mottoSectionSettings')
                        .title('Motto Section Settings')
                        .icon(sectionSettingsIcon),
                      S.documentListItem()
                        .schemaType('featuredProjectsSectionSettings')
                        .id('featuredProjectsSectionSettings')
                        .title('Featured Projects Section Settings')
                        .icon(sectionSettingsIcon),
                      S.documentListItem()
                        .schemaType('contactSectionSettings')
                        .id('contactSectionSettings')
                        .title('Contact Section Settings')
                        .icon(sectionSettingsIcon),
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
            'heroSectionSettings',
            'mottoSectionSettings',
            'featuredProjectsSectionSettings',
            'contactSectionSettings',
            'aboutSectionSettings',
          ].includes(listItem.getId())
      ),
    ]);

export default deskToolStructureBuilder;
