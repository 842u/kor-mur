/* eslint-disable no-promise-executor-return */
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

import apolloClient from '../../../graphql/apolloClient';
import gqlQueryAllTags from '../../../graphql/queryAllTags';
import gqlQueryProjectSlugByTagId from '../../../graphql/queryProjectSlugByTagId';

const secret = process.env.SANITY_WEBHOOK_SECRET;

async function revalidatePaths(pathsArray, res) {
  try {
    const revalidatePromises = pathsArray.map((path) => res.revalidate(path));

    await Promise.all(revalidatePromises);

    res.status(200).send('Revalidation done');
    return;
  } catch (error) {
    res.status(500).send(`${error.message}`);
  }
}

async function handleRevalidate(type, id, res) {
  switch (type) {
    case 'heroSectionSettings':
    case 'mottoSectionSettings':
    case 'featuredProjectsSectionSettings':
    case 'contactSectionSettings':
      await revalidatePaths(['/'], res);
      break;

    case 'aboutPageSettings':
      await revalidatePaths(['/about'], res);
      break;

    case 'tag': {
      const {
        data: { allTag },
      } = await apolloClient.query({
        query: gqlQueryAllTags,
      });

      const tagsPaths = allTag.map((tag) => `/projects/tag/${tag.slug.current}`);
      tagsPaths.push('/projects/tag/all');

      const {
        data: { allProject },
      } = await apolloClient.query({
        query: gqlQueryProjectSlugByTagId,
        variables: {
          where: {
            _: {
              references: id,
            },
          },
        },
      });
      const projectsPathsWithTagId = allProject.map(
        (project) => `/projects/${project.slug.current}`
      );

      await revalidatePaths(['/', ...tagsPaths, ...projectsPathsWithTagId], res);

      break;
    }

    case 'project': {
      await revalidatePaths(['/'], res);
      break;
    }

    default:
      res.status(400).send(`Unknown revalidation type: ${type}`);
      break;
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

  const { _type, _id } = req.body;

  // Sanity webhook is triggered too fast before dataset is updated so delay revalidation a bit to get fresh data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await handleRevalidate(_type, _id, res);
}
