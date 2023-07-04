import { groq } from 'next-sanity';

const groqQueryFeaturedProjectsSection = groq`*[_type == "featuredProjectsSectionSettings"]{
  _id,
  title,
  description,
  "featuredProjects": 
    featuredProjects[]-> {
      _id,
      name,
      description,
      slug,
      "tags": tags[]-> {
        name
      },
      "mainImage": {
        "asset": {
          "url" : mainImage.asset->url
        }
      },
    }
}`;

export default groqQueryFeaturedProjectsSection;
