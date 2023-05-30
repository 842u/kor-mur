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
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['mottoSectionSettings'].includes(listItem.getId())
      ),
    ]);

export default deskToolStructureBuilder;
