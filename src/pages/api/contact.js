import sendgridMail from '@sendgrid/mail';

import getFormValidationInfo from '@/utils/validation/getFormValidationInfo';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

function mailTemplate(name, email, phone, message) {
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

export default async function sendMail(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Only POST requests allowed' });
    return;
  }

  const formData = JSON.parse(req.body);

  const { hasError, errorMessage } = getFormValidationInfo(formData);

  if (hasError) {
    res.status(400).json({ message: errorMessage });
    return;
  }

  try {
    await sendgridMail.send(
      mailTemplate(formData.name, formData.email, formData.phone, formData.message)
    );

    res
      .status(200)
      .json({ message: 'We recived your message and will contact you as soon as possible.' });
  } catch (error) {
    res.status(400).json({ message: `Something went wrong!` });
  }
}
