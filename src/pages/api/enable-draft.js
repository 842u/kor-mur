export default function handler(req, res) {
  res.setDraftMode({ enable: true });
  res.redirect(307, '/');
}
