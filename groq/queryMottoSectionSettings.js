import { groq } from 'next-sanity';

const groqQueryMottoSectionSettings = groq`*[_type == "mottoSectionSettings"]{
  _id,
  text,
  title,
  description,
  "image": {
    "asset": {
      "url": image.asset->url
    }
  }
}`;

export default groqQueryMottoSectionSettings;
