/* eslint-disable */
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function revalidate(req, res) {
  const signature = req.headers[SIGNATURE_HEADER_NAME];

  console.log(signature);
  
  const body = await readBody(req);

  if (!isValidSignature(signature, body, secret)) {
    console.log('wtfffff')
    return res.status(444).send('Invalid signature');
  }

  const jsonBody = JSON.parse(body);
  console.log(jsonBody);

  res.json({ succes: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks).toString('utf8');
}
