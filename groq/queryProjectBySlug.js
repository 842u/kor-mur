import { groq } from 'next-sanity';

const groqQueryProjectBySlug = groq`*[_type == "project"]{
  name,
  description,
  year,
  location,
  area,
  budget,
  "mainImage": {
    "asset": {
      "url": mainImage.asset->url
    }
  },
  "tags": tags[]->{name},
  "slug": {
    "current": slug.current
  }
}[slug.current == $slug]`;

export default groqQueryProjectBySlug;
