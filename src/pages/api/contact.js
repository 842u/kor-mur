import { Resend } from 'resend';

import getFormValidationInfo from '@/utils/validation/getFormValidationInfo';

import ContactEmail from '../../../emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.json({ message: 'Only POST requests allowed' }, { status: 405 });
    return;
  }

  const formData = JSON.parse(req.body);
  const { name, email, message, phone } = formData;

  const { hasError, errorMessage } = getFormValidationInfo(formData);

  if (hasError) {
    res.json({ message: errorMessage }, { status: 200 });
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: 'kamil.bazanow@contact.842u.dev',
      to: 'kamil.bazanow@gmail.com',
      subject: `New contact form submission from ${name}`,
      react: ContactEmail({ name, email, message, phone }),
    });

    if (error) {
      return res.json(
        { message: 'Failed to send email. Please try again later.' },
        { status: 502 }
      );
    }

    res.json(
      { message: 'Otrzymaliśmy Twoją wiadomość i wkrótce się z Tobą skontaktujemy.' },
      { status: 200 }
    );
  } catch {
    res.json({ message: `Coś poszło nie tak. Spróbuj ponownie.` }, { status: 400 });
  }
}
