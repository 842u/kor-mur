import { groq } from 'next-sanity';

const groqQueryFeaturedProjects = groq`*[_type == "project" && featured == true]{
  name,
  descriptionFirst,
  descriptionSecond,
  tags[]->{
    name,
    slug{
      current
    }
  },
  mainImage{
    asset->{
      url
    }
  }
}`;

export default groqQueryFeaturedProjects;
