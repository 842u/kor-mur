/* eslint-disable no-promise-executor-return */
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

import tagMock from '@/utils/mocks';

import getGqlProjectsSlugsByTagIdData from '../../../graphql/queryProjectsSlugsByTagId';
import getGqlTagsData from '../../../graphql/queryTags';

const secret = process.env.SANITY_WEBHOOK_SECRET;

async function getPathsToRevalidate(webhookBody) {
  const { _type } = webhookBody;

  switch (_type) {
    case 'heroSectionSettings':
    case 'featuredProjectsSectionSettings':
    case 'contactSectionSettings':
      return ['/'];

    case 'aboutPageSettings':
      return ['/about'];

    case 'mottoSectionSettings':
      return ['/', '/about'];

    case 'tag': {
      const { _id } = webhookBody;

      const { tags } = getGqlTagsData();

      const { slugs } = getGqlProjectsSlugsByTagIdData(_id);

      const tagsPaths = tags.map((tag) => `/projects/tag/${tag.slug.current}`);

      const projectsPaths = slugs.map((slug) => `/projects/${slug}`);

      return ['/', ...tagsPaths, ...projectsPaths];
    }

    case 'project': {
      const projectSlug = webhookBody.projectSlug || '';
      const tagsSlugsBefore = webhookBody.tagsSlugsBefore || [];
      const tagsSlugsAfter = webhookBody.tagsSlugsAfter || [];

      const tagsSlugs = [...new Set([...tagsSlugsBefore, ...tagsSlugsAfter])];
      tagsSlugs.push(`${tagMock.slug.current}`);

      const tagsPaths = tagsSlugs.map((tag) => `/projects/tag/${tag}`);
      const projectPath = `/projects/${projectSlug}`;

      return ['/', projectPath, ...tagsPaths];
    }

    default:
      return [];
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

  // Sanity webhook is triggered too fast before dataset is updated so delay revalidation a bit to get fresh data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const paths = await getPathsToRevalidate(req.body);

    const revalidatePaths = paths.map((path) => res.revalidate(path));

    await Promise.all(revalidatePaths);

    res.status(200).send('Revalidation done');
    return;
  } catch (error) {
    res.status(500).send(`${error.message}`);
  }
}
