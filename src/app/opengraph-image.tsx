import { ImageResponse } from 'next/og'

// Next detecta este archivo y emite og:image (y twitter:image) automáticamente.
export const alt = 'AroMatch — Perfumes Árabes Originales'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          // Gradiente dorado sutil: halo cálido arriba al centro que cae a negro.
          backgroundImage:
            'radial-gradient(ellipse 80% 65% at 50% 30%, rgba(212,175,55,0.22) 0%, rgba(10,10,10,0) 70%)',
          position: 'relative',
        }}
      >
        {/* Filete dorado superior */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 4,
            backgroundImage:
              'linear-gradient(90deg, rgba(212,175,55,0) 0%, #d4af37 50%, rgba(212,175,55,0) 100%)',
          }}
        />

        <div
          style={{
            fontSize: 132,
            fontFamily: 'serif',
            fontWeight: 700,
            color: '#d4af37',
            letterSpacing: '0.02em',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          AroMatch
        </div>

        {/* Divisor fino */}
        <div
          style={{
            width: 220,
            height: 1,
            marginTop: 36,
            marginBottom: 36,
            backgroundImage:
              'linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.75) 50%, rgba(212,175,55,0) 100%)',
          }}
        />

        <div
          style={{
            fontSize: 42,
            fontFamily: 'serif',
            color: '#ffffff',
            letterSpacing: '0.06em',
            display: 'flex',
          }}
        >
          Perfumes Árabes Originales
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 56,
            fontSize: 24,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          auradecant.ar
        </div>
      </div>
    ),
    size
  )
}
