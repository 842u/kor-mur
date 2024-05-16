const RECIPENT_EMAIL = 'admin@murawska.studio';
const SENDER_EMAIL = 'kontakt@murawska.studio';

export default function contactEmailTemplate(name, email, phone, message) {
  return {
    to: RECIPENT_EMAIL,
    from: SENDER_EMAIL,
    subject: `Cześć Kornelia! Masz nową wiadomość od ${name} z formularza kontaktowego!`,
    html: `<h2>Cześć Kornelia! Ktoś wysłał do Ciebie wiadomość z formularza kontaktowego. Oto jej treść:</h2>
    <p><strong>Imię:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>Wiadomość:</strong> ${message}</p>`,
  };
}
