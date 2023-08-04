import { groq } from 'next-sanity';

const groqQueryAboutPageData = groq`{
  "aboutSectionSettings": *[_type == "aboutSectionSettings"]{
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
  },

  "mottoSectionSettings": *[_type == 'mottoSectionSettings']{
    titles,
    text,
    image{
      asset->{
        url
      }
    }
  },
}
`;

export default groqQueryAboutPageData;
