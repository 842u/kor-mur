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
  }
}`;

export default groqQueryHomePageData;
