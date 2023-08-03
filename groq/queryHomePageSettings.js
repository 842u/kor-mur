const { groq } = require('next-sanity');

const groqQueryHomePageData = groq`{
  "heroSectionSettings": *[_type == 'heroSectionSettings']{
    text,
    images[]{
      asset->{
        _id,
        url
      }
    }
  },

  "mottoSectionSettings": *[_type == 'mottoSectionSettings']{
    titles,
    text,
    image{
      asset->{
        url
      }
    }
  }
}`;

export default groqQueryHomePageData;
