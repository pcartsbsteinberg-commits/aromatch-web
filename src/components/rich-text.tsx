import React from 'react'

/**
 * Resalta en dorado los **términos técnicos** marcados con dobles asteriscos.
 * Sin "use client": lo usan tanto las páginas de artículo (server) como las
 * tarjetas de la home (client).
 */
export function renderRich(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="edu-term">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}
