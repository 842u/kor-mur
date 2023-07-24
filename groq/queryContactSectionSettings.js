import { groq } from 'next-sanity';

const groqQueryContactSectionSettings = groq`*[_type == "contactSectionSettings"]{
  title,
  description,
  image{
    asset->{
      url
    }
  }
}`;

export default groqQueryContactSectionSettings;
