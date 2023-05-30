const deskToolStructureBuilder = (s) =>
  s
    .list()
    .title('Base')
    .items([...s.documentTypeListItems().reverse()]);

export default deskToolStructureBuilder;
