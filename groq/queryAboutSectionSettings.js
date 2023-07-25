import { groq } from 'next-sanity';

const groqQueryAboutSectionSettings = groq`*[_type == "aboutSectionSettings"]{
  imageFirst{
    asset->{
      url
    }
  },
  imageSecond{
    asset->{
      url
    }
  },
  description
}
`;

export default groqQueryAboutSectionSettings;
