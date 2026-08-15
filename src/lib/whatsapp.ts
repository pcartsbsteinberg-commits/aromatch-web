import type { Perfume } from './perfumes'

export const WHATSAPP_NUMBER = '5491162066609'

/** Línea de confianza que va debajo del botón principal de compra. */
export const TRUST_LINE =
  'Frasco sellado · Entrega en 24-48h CABA y GBA · Envío con seguimiento'

interface PurchaseOptions {
  /** Email capturado en el quiz, si el usuario lo dejó. */
  email?: string
  /**
   * Precio ya formateado (ej. `'$55.000'`). Todavía no se usa en ningún call
   * site — los precios no están definidos. Cuando lo estén, alcanza con pasarlo
   * acá y el mensaje lo incluye solo.
   */
  price?: string
}

/**
 * Arma el mensaje prellenado del CTA de WhatsApp.
 *
 *   "Hola! Quiero comprar el Lattafa Perfumes Khamrah 100ml. ¿Coordinamos?"
 */
export function buildPurchaseMessage(perfume: Perfume, opts: PurchaseOptions = {}): string {
  const producto = `${perfume.brand} ${perfume.name} 100ml`
  const precio = opts.price ? ` (${opts.price})` : ''
  const email = opts.email ? ` Mi email: ${opts.email}` : ''
  return `Hola! Quiero comprar el ${producto}${precio}. ¿Coordinamos?${email}`
}

/** URL completa de wa.me con el mensaje de compra ya codificado. */
export function buildPurchaseUrl(perfume: Perfume, opts: PurchaseOptions = {}): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildPurchaseMessage(perfume, opts)
  )}`
}
