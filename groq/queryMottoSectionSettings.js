import { groq } from 'next-sanity';

const groqQueryMottoSectionSettings = groq`*[_type == "mottoSectionSettings"]{
  _id,
  mottoSectionTitles,
  mottoSectionText,
  "mottoSectionImage": mottoSectionImage{
    asset->{
      url
    }
  }
}`;

export default groqQueryMottoSectionSettings;
