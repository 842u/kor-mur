const { groq } = require('next-sanity');

const groqQueryHomePageSettings = groq`{
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

export default groqQueryHomePageSettings;
