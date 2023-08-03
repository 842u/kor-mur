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
  },

  "featuredProjects": *[_type == "project" && featured == true]{
    _id,
    name,
    descriptionFirst,
    descriptionSecond,
    tags[]->{
      name,
      slug{
        current
      }
    },

    mainImage{
      asset->{
        url
      }
    },

    slug{
      current
    }
  },
}`;

export default groqQueryHomePageData;
