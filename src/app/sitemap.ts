import { MetadataRoute } from 'next'
import { perfumes } from '@/lib/perfumes'
import { SITE_INDEXABLE, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  // Mientras el sitio no sea indexable no publicamos URLs para rastrear.
  if (!SITE_INDEXABLE) return []

  const lastModified = new Date()

  const routes = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ]

  // Dynamic products (Perfumes)
  // Note: While we are a single-page app, listing these as distinct paths
  // (e.g. via deep linking or future detail pages) aids indexing of the catalog.
  const productRoutes = perfumes.map((perfume) => ({
    url: `${SITE_URL}/?perfume=${encodeURIComponent(perfume.name.toLowerCase().replace(/\s+/g, '-'))}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...productRoutes]
}
