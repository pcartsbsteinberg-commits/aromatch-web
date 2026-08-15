"use client"

import { useEffect, useState } from 'react'

const POSTER = '/videos/poster.jpg'

/**
 * Fondo global del sitio.
 *
 * En mobile (<768px) NO se descarga el video: se muestra sólo el poster. Ojo que
 * `display:none` sobre un <video> no evita la descarga — por eso la decisión se
 * toma con matchMedia y el <video> ni siquiera se monta.
 *
 * Sólo se ve detrás del hero: el resto de las secciones tienen fondo sólido.
 */
export default function BackgroundVideo() {
  const [playVideo, setPlayVideo] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    const sync = () => setPlayVideo(mql.matches)
    sync()
    mql.addEventListener('change', sync)
    return () => mql.removeEventListener('change', sync)
  }, [])

  return (
    <>
      {playVideo ? (
        <video
          poster={POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          {/* El webm pesa menos; el mp4 queda de fallback para Safari viejo. */}
          <source src="/videos/fondoaura.webm" type="video/webm" />
          <source src="/videos/fondoaura.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${POSTER})` }}
        />
      )}
    </>
  )
}
