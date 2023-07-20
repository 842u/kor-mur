import { groq } from 'next-sanity';

const groqQueryHeroSectionSettings = groq`*[_type == "heroSectionSettings"]{
  heroSectionText,
  "heroSectionImages": heroSectionImages[]{
    asset->{
      _id,
      url
    }
  }
}`;

export default groqQueryHeroSectionSettings;
