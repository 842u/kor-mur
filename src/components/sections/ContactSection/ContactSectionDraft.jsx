import { useLiveQuery } from 'next-sanity/preview';

import ContactSectionDefault from './ContactSectionDefault';

export default function ContactSectionDraft({ query }) {
  const [data] = useLiveQuery(null, query);

  return <ContactSectionDefault contactSectionSettings={data} />;
}
