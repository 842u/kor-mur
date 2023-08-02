import { groq } from 'next-sanity';

const groqQueryHeroSectionSettings = groq`*[_type == "heroSectionSettings"]{
  text,
  images[]{
    asset->{
      _id,
      url
    }
  }
}`;

export default groqQueryHeroSectionSettings;
