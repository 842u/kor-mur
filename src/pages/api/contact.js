const sendgridMail = require('@sendgrid/mail');

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line
export default async function sendMail(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Only POST requests allowed' });
    return;
  }

  console.log(req.body);

  const mail = {
    to: 'admin@murawska.studio',
    from: 'kontakt@murawska.studio',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>test</strong>',
  };

  try {
    const response = await sendgridMail.send(mail);
    console.log(response);
    res.status(200).json({ message: 'email send' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: `${error.message}` });
  }
}
