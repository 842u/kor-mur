import { groq } from 'next-sanity';

const groqQueryContactSectionSettings = groq`*[_type == "contactSectionSettings"]{
  title,
  description,
}`;

export default groqQueryContactSectionSettings;
