import { EMAIL, PHONE, whatsapp } from '@/lib/brand';
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/seo';

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    alternateName: 'Augmented AI Built',
    url: SITE_URL,
    logo: `${SITE_URL}/brand/aai-built-logo.png`,
    image: `${SITE_URL}/og/aaibuilt-share.png`,
    description: DEFAULT_DESCRIPTION,
    slogan: SITE_TAGLINE,
    email: EMAIL,
    telephone: PHONE,
    founder: {
      '@type': 'Person',
      name: 'Sanyam Tayal',
      url: `${SITE_URL}/about`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: [
      'Custom software development',
      'CRM development',
      'Lead generation systems',
      'Business workflow software',
      'Applied AI consulting',
    ],
    sameAs: [whatsapp()],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}/brand/aai-built-logo.png`,
    },
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE_URL,
      name: SITE_NAME,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
