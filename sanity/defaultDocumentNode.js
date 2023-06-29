import Iframe from 'sanity-plugin-iframe-pane';

const defaultDocumentNode = (S, { schemaType }) => {
  switch (schemaType) {
    case 'mottoSectionSettings':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `${window.location.origin}/api/enable-draft`,
          })
          .title('Preview'),
      ]);
    case 'featuredProjectsSectionSettings':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `${window.location.origin}/api/enable-draft`,
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defaultDocumentNode;
