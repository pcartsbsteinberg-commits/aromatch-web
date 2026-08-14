/**
 * Configuración central del sitio.
 *
 * SITE_INDEXABLE es el interruptor único de indexación. Mientras esté en `false`:
 *   - robots.txt devuelve `Disallow: /` para todos los bots
 *   - el <head> emite `noindex, nofollow`
 *   - el sitemap se sirve vacío
 *
 * Cuando quieras que Google indexe el sitio, poné `true`, commiteá y pusheá.
 * No hace falta tocar nada más.
 */
export const SITE_INDEXABLE = false

/** Dominio de producción. Usado por sitemap, robots, Open Graph y JSON-LD. */
export const SITE_URL = 'https://auradecant.ar'
