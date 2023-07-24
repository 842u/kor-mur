import { CogIcon, DashboardIcon, MasterDetailIcon } from '@sanity/icons';

import { singletonTypes } from './singleton';

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
                      S.documentListItem()
                        .schemaType('aboutSectionSettings')
                        .id('aboutSectionSettings')
                        .title('About Section Settings')
                        .icon(sectionSettingsIcon),
                    ])
                ),
            ])
        ),
      // hide singleton types from base menu
      ...S.documentTypeListItems().filter((listItem) => !singletonTypes.has(listItem.getId())),
    ]);

export default deskToolStructureBuilder;
