/* eslint-disable no-console */
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

import { getStaticPaths as getTagsPath } from '../projects/tag/[slug]';

const secret = process.env.SANITY_WEBHOOK_SECRET;

async function handleRevalidate(type, res) {
  switch (type) {
    case 'heroSectionSettings':
      await res.revalidate('/');
      break;

    case 'mottoSectionSettings':
      await res.revalidate('/');
      break;

    case 'featuredProjectsSectionSettings':
      await res.revalidate('/');
      break;

    case 'contactSectionSettings':
      await res.revalidate('/');
      break;

    case 'aboutPageSettings':
      await res.revalidate('/about');
      break;

    case 'tag': {
      const { paths } = await getTagsPath();
      console.log('tag slugs from static paths', paths);

      const revalidateTagPaths = paths.map((tag) => {
        console.log('revalidating tag slug', tag.params.slug);
        return res.revalidate(`/projects/tag/${tag.params.slug}`);
      });

      await Promise.all([res.revalidate('/'), ...revalidateTagPaths]);

      console.log('revalidation complete');
      res.status(200).json({ revalidated: true });
      break;
    }

    default:
      throw new Error(`Unknown type "${type}"`);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }

  const signature = req.headers[SIGNATURE_HEADER_NAME];
  const jsonBody = JSON.stringify(req.body);

  if (!isValidSignature(jsonBody, signature, secret)) {
    res.status(401).send('Invalid signature');
    return;
  }

  console.log('body', req.body);

  const { type } = req.body;

  setTimeout(() => handleRevalidate(type, res), 2000);
}
