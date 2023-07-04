import Iframe from 'sanity-plugin-iframe-pane';

function enableDraftView(S, documentTitle) {
  return S.document()
    .title(documentTitle)
    .views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: `${window.location.origin}/api/enable-draft`,
        })
        .title('Preview'),
    ]);
}
const defaultDocumentNode = (S, { schemaType }) => {
  switch (schemaType) {
    case 'heroSectionSettings':
      return enableDraftView(S, schemaType);

    case 'project':
      return enableDraftView(S, schemaType);

    case 'mottoSectionSettings':
      return enableDraftView(S, schemaType);

    case 'featuredProjectsSectionSettings':
      return enableDraftView(S, schemaType);

    case 'contactSectionSettings':
      return enableDraftView(S, schemaType);

    case 'aboutSectionSettings':
      return enableDraftView(S, schemaType);

    default:
      return S.document().views([S.view.form()]);
  }
};

export default defaultDocumentNode;
