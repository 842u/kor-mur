import { groq } from 'next-sanity';

const groqQueryAboutPageData = groq`{
  "aboutSectionSettings": *[_type == "aboutSectionSettings"][0]{
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

  "mottoSectionSettings": *[_type == 'mottoSectionSettings'][0]{
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
