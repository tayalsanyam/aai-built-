import type { Metadata } from 'next';
import { EMAIL, PHONE } from '@/lib/brand';

export const SITE_NAME = 'AAI Built';
export const SITE_TAGLINE = 'Your next chapter. Built in.';
const DEFAULT_SITE_URL = 'https://www.aaibuilt.com';

function normalizeSiteUrl(raw?: string): string {
  if (!raw?.trim()) return DEFAULT_SITE_URL;

  let url = raw.trim().replace(/\/$/, '');

  // Common copy/paste typo in env vars.
  if (url.startsWith('ttps://')) url = `h${url}`;
  if (url.startsWith('tps://')) url = `ht${url}`;

  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url.replace(/^\/+/, '')}`;
  }

  try {
    const parsed = new URL(url);
    return parsed.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.SITE_URL);

export const DEFAULT_DESCRIPTION =
  'Custom software for ambitious SMEs. Human business expertise, augmented by AI. CRM, sales, operations, lead generation and team tools built around your business.';

export const DEFAULT_KEYWORDS = [
  'AAI Built',
  'custom software for SMEs',
  'business software India',
  'custom CRM development',
  'operational CRM',
  'lead generation software',
  'sales pipeline software',
  'AI business software',
  'SME technology',
  'workflow automation',
  'Sanyam Tayal',
  'augmented AI',
];

export const SHARE_IMAGE = {
  url: '/og/aaibuilt-share.png',
  width: 1200,
  height: 630,
  alt: 'AAI Built — Custom software for ambitious SMEs. Your next chapter. Built in.',
};

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  absoluteTitle?: string;
};

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  keywords,
  noIndex = false,
  absoluteTitle,
}: PageMetadataInput): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
  const socialTitle = absoluteTitle ?? `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    authors: [{ name: 'Sanyam Tayal', url: `${SITE_URL}/about` }],
    creator: 'AAI Built',
    publisher: 'AAI Built',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

export const rootMetadata: Metadata = {
  ...createPageMetadata({
    title: SITE_TAGLINE,
    description: DEFAULT_DESCRIPTION,
    path: '/',
    absoluteTitle: `${SITE_NAME} — ${SITE_TAGLINE}`,
  }),
  category: 'technology',
  applicationName: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: true,
  },
  other: {
    'contact:email': EMAIL,
    'contact:phone_number': PHONE,
  },
};

export const siteRoutes = [
  '/',
  '/solutions',
  '/lead-engine',
  '/projects',
  '/projects/fusion-algo',
  '/projects/olready',
  '/projects/crew',
  '/approach',
  '/about',
  '/contact',
] as const;
