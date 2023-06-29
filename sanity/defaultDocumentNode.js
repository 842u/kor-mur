import Iframe from 'sanity-plugin-iframe-pane';

function enableDraftView(S) {
  return S.document().views([
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
    case 'mottoSectionSettings':
      return enableDraftView(S);
    case 'featuredProjectsSectionSettings':
      return enableDraftView(S);
    case 'contactSectionSettings':
      return enableDraftView(S);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defaultDocumentNode;
