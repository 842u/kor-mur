const { groq } = require('next-sanity');

const groqQueryHomePageData = groq`{
  "heroSectionSettings": *[_type == 'heroSectionSettings'][0]{
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
      _id,
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

  "contactSectionSettings": *[_type == "contactSectionSettings"]{
    title,
    description,
    image{
      asset->{
        url
      }
    }
  },
}`;

export default groqQueryHomePageData;
