import sendgridMail from '@sendgrid/mail';

import contactEmailTemplate from '@/utils/emailTemplate';
import getFormValidationInfo from '@/utils/validation/getFormValidationInfo';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendMail(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Only POST requests allowed' });
    return;
  }

  const formData = JSON.parse(req.body);
  const { name, email, phone, message } = formData;

  const { hasError, errorMessage } = getFormValidationInfo(formData);

  if (hasError) {
    res.status(400).json({ message: errorMessage });
    return;
  }

  try {
    await sendgridMail.send(contactEmailTemplate(name, email, phone, message));

    res
      .status(200)
      .json({ message: 'Otrzymaliśmy Twoją wiadomość i wkrótce się z Tobą skontaktujemy.' });
  } catch (error) {
    res.status(400).json({ message: `Coś poszło nie tak. Spróbuj ponownie.` });
  }
}
