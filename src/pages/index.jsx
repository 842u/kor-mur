import Head from 'next/head';
import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';

import apolloClient from '@/../graphql/apolloClient';
import GET_CONTACT_SECTION_SETTINGS from '@/../graphql/queryContactSectionSettings';
import GET_FEATURED_PROJECTS_SECTION_SETTINGS from '@/../graphql/queryFeaturedProjectsSectionSettings';
import GET_MOTTO_SECTION_SETTINGS from '@/../graphql/queryMottoSectionSettings';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import ProjectsSection from '@/components/sections/FeaturedProjectsSection/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import MottoSection from '@/components/sections/MottoSection/MottoSection';

const MottoSectionPreview = lazy(() =>
  import('@/components/sections/MottoSection/MottoSectionPreview')
);

const query = groq`*[_type == "mottoSectionSettings"]{
  _id,
  text,
  title,
  description,
  "imgUrl": image.asset->url
}`;

export default function HomePage({
  preview,
  mottoSectionSettings,
  featuredProjectsSectionSettings,
  contactSectionSettings,
}) {
  return (
    <>
      <Head>
        <title>Murawska Studio</title>
      </Head>
      <HeroSection />
      {preview ? (
        <PreviewSuspense>
          <MottoSectionPreview query={query} />
        </PreviewSuspense>
      ) : (
        <MottoSection mottoSectionSettings={mottoSectionSettings} />
      )}
      <ProjectsSection featuredProjectsSectionSettings={featuredProjectsSectionSettings} />
      <ContactSection contactSectionSettings={contactSectionSettings} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return {
      props: { preview },
    };
  }

  let data;

  ({ data } = await apolloClient.query({
    query: GET_MOTTO_SECTION_SETTINGS,
  }));
  const mottoSectionSettings = data.allMottoSectionSettings || [];

  ({ data } = await apolloClient.query({
    query: GET_FEATURED_PROJECTS_SECTION_SETTINGS,
  }));
  const featuredProjectsSectionSettings = data.allFeaturedProjectsSectionSettings[0] || [];

  ({ data } = await apolloClient.query({
    query: GET_CONTACT_SECTION_SETTINGS,
  }));
  const contactSectionSettings = data.allContactSectionSettings[0] || [];

  return {
    props: {
      mottoSectionSettings,
      featuredProjectsSectionSettings,
      contactSectionSettings,
    },
  };
}
