import { groq } from 'next-sanity';

const groqQueryProjectBySlug = groq`*[_type == "project"]{
  name,
  descriptionFirst,
  descriptionSecond,
  year,
  location,
  area,
  budget,
  mainImage{
    asset->{
      url
    }
  },
  tags[]->{
    name
    },
  slug{
    current
  }
}[slug.current == $slug]`;

export default groqQueryProjectBySlug;
