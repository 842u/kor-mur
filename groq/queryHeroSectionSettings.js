import { groq } from 'next-sanity';

const groqQueryHeroSectionSettings = groq`*[_type == "heroSectionSettings"]{
  "imageLeft": {
    "asset": {
      "url": imageLeft.asset->url
    }
  },
  
  "imageMiddleTop": {
    "asset": {
      "url": imageMiddleTop.asset->url
    }
  },
  
  "imageMiddleBottom": {
    "asset": {
      "url": imageMiddleBottom.asset->url
    }
  },
  
  "imageRightTop": {
    "asset": {
      "url": imageRightTop.asset->url
    }
  },
  
  "imageRightBottom": {
    "asset": {
      "url": imageRightBottom.asset->url
    }
  },
}`;

export default groqQueryHeroSectionSettings;
