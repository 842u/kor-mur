import { MasterDetailIcon } from '@sanity/icons';

const deskToolStructureBuilder = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Motto Section Settings')
        .icon(MasterDetailIcon)
        .child(S.document().schemaType('mottoSectionSettings').documentId('mottoSectionSettings')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['mottoSectionSettings'].includes(listItem.getId())
      ),
    ]);

export default deskToolStructureBuilder;
