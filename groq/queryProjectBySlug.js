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

  secondaryImage{
    asset->{
      url
    }
  },

  images[]{
    asset->{
      url
    }
  },

  tags[]->{
    name,
    slug{
      current
    }
  },

  slug{
    current
  }
}[slug.current == $slug][0]`;

export default groqQueryProjectBySlug;
