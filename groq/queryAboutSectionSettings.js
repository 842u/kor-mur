import { groq } from 'next-sanity';

const groqQueryAboutSectionSettings = groq`*[_type == "aboutSectionSettings"]{
  title,
  firstParagraph,
  secondParagraph,
  "image": {
    "asset": {
      "url": image.asset->url
    }
  }
}`;

export default groqQueryAboutSectionSettings;
