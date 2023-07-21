import { groq } from 'next-sanity';

const groqQueryFeaturedProjectsSection = groq`*[_type == "featuredProjectsSectionSettings"]{
  title,
  description,
}`;

export default groqQueryFeaturedProjectsSection;
