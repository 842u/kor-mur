import Iframe from 'sanity-plugin-iframe-pane';

const defaultDocumentNode = (S, { schemaType }) => {
  if (schemaType === 'mottoSectionSettings') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: `http://localhost:3000/api/enable-draft`,
        })
        .title('Preview'),
    ]);
  }
  return S.document().views([S.view.form()]);
};

export default defaultDocumentNode;
