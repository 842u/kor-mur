export default function contactEmailTemplate(name, email, phone, message) {
  return {
    to: 'admin@murawska.studio',
    from: 'kontakt@murawska.studio',
    subject: `Cześć Kornelia! Masz nową wiadomość od ${name} z formularza kontaktowego!`,
    html: `<h2>Cześć Kornelia! Ktoś wysłał do Ciebie wiadomość z formularza kontaktowego. Oto jej treść:</h2>
    <p><strong>Imię:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>Wiadomość:</strong> ${message}</p>`,
  };
}
