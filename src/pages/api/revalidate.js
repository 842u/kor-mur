/* eslint-disable no-promise-executor-return */
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

import apolloClient from '../../../graphql/apolloClient';
import gqlQueryAllTags from '../../../graphql/queryAllTags';
// import gqlQueryProjectSlugAndTagsById from '../../../graphql/queryProjectSlugAndTagsById';
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

async function handleRevalidate(type, id, projectSlug, projectTagsBefore, projectTagsAfter, res) {
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
      console.log(type, id);
      const {
        data: { allTag },
      } = await apolloClient.query({
        query: gqlQueryAllTags,
      });

      const tagsPaths = allTag.map((tag) => `/projects/tag/${tag.slug.current}`);
      tagsPaths.push('/projects/tag/all');
      console.log('tags paths \n', tagsPaths);

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
      console.log('projects paths with tag id \n', projectsPathsWithTagId);

      await revalidatePaths(['/', ...tagsPaths, ...projectsPathsWithTagId], res);

      break;
    }

    case 'project': {
      // console.log(type, id);
      // const {
      //   data: { Project },
      // } = await apolloClient.query({
      //   query: gqlQueryProjectSlugAndTagsById,
      //   variables: {
      //     projectId: id,
      //   },
      // });

      // console.log('Project', Project);
      const tagsBefore = projectTagsBefore || [];
      const tagsAfter = projectTagsAfter || [];
      const tags = [...new Set([...tagsBefore, ...tagsAfter])];
      tags.push('all');
      const tagsPaths = tags.map((tag) => `/projects/tag/${tag}`);
      const projectPath = `/projects/${projectSlug}`;

      console.log('tags paths', tagsPaths);
      console.log('project path', projectPath);

      // const tagsPaths = Project?.tags?.map((tag) => `/projects/tag/${tag.slug.current}`) || [];
      // tagsPaths.push('/projects/tag/all');
      // console.log('tags paths', tagsPaths);

      // if (!Project) {
      //   await revalidatePaths(['/', ...tagsPaths], res);
      //   break;
      // }
      // const projectPath = `/projects/${Project.slug.current}`;
      // console.log('project path', projectPath);

      await revalidatePaths(['/', projectPath, ...tagsPaths], res);
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

  const { _type, _id, projectSlug, projectTagsBefore, projectTagsAfter } = req.body;

  // Sanity webhook is triggered too fast before dataset is updated so delay revalidation a bit to get fresh data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await handleRevalidate(_type, _id, projectSlug, projectTagsBefore, projectTagsAfter, res);
}
