/**
 * Constantes de layout compartidas entre Server y Client Components.
 *
 * Ojo: esto NO puede vivir en `navigation.tsx`. Ese módulo es `"use client"`, y
 * al importarlo desde un Server Component (page.tsx) el valor no llega como
 * número sino como una referencia de cliente, rompiendo el `padding-top`.
 */

/** Alto del nav fijo, en px. */
export const NAV_HEIGHT = 80
