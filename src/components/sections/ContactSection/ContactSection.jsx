import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';

import ContactSectionDefault from './ContactSectionDefault';

const ContactSectionDraft = lazy(() => import('./ContactSectionDraft'));

const query = groq`*[_type == "contactSectionSettings"]{
  title,
  description,
}`;

export default function ContactSection({ draftMode, contactSectionSettings }) {
  return draftMode ? (
    <PreviewSuspense>
      <ContactSectionDraft query={query} />
    </PreviewSuspense>
  ) : (
    <ContactSectionDefault contactSectionSettings={contactSectionSettings} />
  );
}
