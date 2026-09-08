import type { MetadataRoute } from 'next';
import { SITE_URL, siteRoutes } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return siteRoutes.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/contact' ? 0.9 : 0.8,
  }));
}
