const sendgridMail = require('@sendgrid/mail');

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line
export default async function sendMail(req, res) {
  console.log(req.body);

  const mail = {
    to: 'admin@murawska.studio',
    from: 'kontakt@murawska.studio',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  try {
    const response = await sendgridMail.send(mail);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
