import { DashboardIcon } from '@sanity/icons';

const sectionSettingsIcon = DashboardIcon;

const deskToolStructureBuilder = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Motto Section Settings')
                .icon(sectionSettingsIcon)
                .child(
                  S.document().schemaType('mottoSectionSettings').documentId('mottoSectionSettings')
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
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'mottoSectionSettings',
            'featuredProjectsSectionSettings',
            'contactSectionSettings',
          ].includes(listItem.getId())
      ),
    ]);

export default deskToolStructureBuilder;
