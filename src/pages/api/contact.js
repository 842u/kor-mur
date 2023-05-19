// const sendgridMail = require('@sendgrid/mail');
import sendgridMail from '@sendgrid/mail';

import getValidationInfo from '@/utils/validation';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendMail(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Only POST requests allowed' });
    return;
  }

  const formData = JSON.parse(req.body);

  // formData.name = 'a';

  const { hasErrorInfo: nameHasError, errorMessageInfo: nameErrorMessage } = getValidationInfo(
    formData.name,
    'text',
    3,
    30,
    true
  );

  if (nameHasError) {
    res.status(400).json({ message: nameErrorMessage });
    return;
  }

  const mailTemplate = {
    to: 'admin@murawska.studio',
    from: 'kontakt@murawska.studio',
    subject: `Cześć Kornelia! Masz nową wiadomość od ${formData.name} z formularza kontaktowego!`,
    html: `<h2>Cześć Kornelia! Ktoś wysłał do Ciebie wiadomość z formularza kontaktowego. Oto jej treść:</h2>
    <p><strong>Imię:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Telefon:</strong> ${formData.phone}</p>
    <p><strong>Wiadomość:</strong> ${formData.message}</p>`,
  };

  try {
    await sendgridMail.send(mailTemplate);

    res
      .status(200)
      .json({ message: 'We recived your message and will contact you as soon as possible.' });
  } catch (error) {
    res.status(400).json({ message: `Something went wrong!` });
  }
}
