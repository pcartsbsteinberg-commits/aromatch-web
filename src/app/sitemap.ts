import { MetadataRoute } from 'next'
import { perfumes } from '@/lib/perfumes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://auradecant.ar'
  const lastModified = new Date()

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/coleccion`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic products (Perfumes)
  // Note: While we are a single-page app, listing these as distinct paths 
  // (e.g. via deep linking or future detail pages) aids indexing of the catalog.
  const productRoutes = perfumes.map((perfume) => ({
    url: `${baseUrl}/?perfume=${encodeURIComponent(perfume.name.toLowerCase().replace(/\s+/g, '-'))}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...productRoutes]
}
