"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  Briefcase,
  PartyPopper,
  Sun,
  Moon,
  CloudSun,
  Snowflake,
  Leaf,
  Wind,
  Flame,
  Zap,
  ArrowLeft,
  Sparkles,
  ArrowRight,
  User,
} from 'lucide-react'
import PrestigeShowcase from '@/components/prestige-showcase'
import { perfumes, type Perfume, type MatchResult } from '@/lib/perfumes'

// ─────────────────────────────────────────────────────────────────────────────
// Quiz option definitions
// ─────────────────────────────────────────────────────────────────────────────

const genderOptions = [
  {
    id: 'masculino' as const,
    label: 'Para Él',
    icon: User,
    color: '#a8d4e6',
    bgImage:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'femenino' as const,
    label: 'Para Ella',
    icon: Heart,
    color: '#e6a8d7',
    bgImage:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80&auto=format&fit=crop',
  },
]

const occasionOptions = [
  {
    id: 'cita_nocturna' as const,
    label: 'Cita Nocturna',
    icon: Moon,
    color: '#c0c0c0',
    bgImage:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'oficina_diario' as const,
    label: 'Oficina / Diario',
    icon: Briefcase,
    color: '#f4d58d',
    bgImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'evento_especial' as const,
    label: 'Evento Especial',
    icon: PartyPopper,
    color: '#d4af37',
    bgImage:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'deporte_aire_libre' as const,
    label: 'Casual / Sport',
    icon: Zap,
    color: '#a8e6cf',
    bgImage:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80&auto=format&fit=crop',
  },
]

const seasonOptions = [
  {
    id: 'summer' as const,
    label: 'Verano',
    icon: Sun,
    color: '#f4d58d',
    bgImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'winter' as const,
    label: 'Invierno',
    icon: Snowflake,
    color: '#a8d4e6',
    bgImage:
      'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'spring' as const,
    label: 'Primavera',
    icon: Leaf,
    color: '#90b77d',
    bgImage:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'fall' as const,
    label: 'Otoño',
    icon: CloudSun,
    color: '#cd7f32',
    bgImage:
      'https://images.unsplash.com/photo-1507371341162-763b5e419408?w=1600&q=80&auto=format&fit=crop',
  },
]

const scentStyleOptions = [
  {
    id: 'dulce' as const,
    label: 'Dulces y Adictivos',
    description: 'Vainilla, Postres, Dulzor',
    icon: Heart,
    color: '#e6a8d7',
    bgImage:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'fresco' as const,
    label: 'Frescos y Limpios',
    description: 'Cítricos, Mar, Energía',
    icon: Wind,
    color: '#a8e6cf',
    bgImage:
      'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'maderoso' as const,
    label: 'Maderosos y Elegantes',
    description: 'Bosque, Cuero, Autoridad',
    icon: Briefcase,
    color: '#cda97f',
    bgImage:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'especiado' as const,
    label: 'Especiados y Misteriosos',
    description: 'Pimienta, Canela, Árabe',
    icon: Flame,
    color: '#d48a37',
    bgImage:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80&auto=format&fit=crop',
  },
]

const projectionOptions = [
  {
    id: 'moderate' as const,
    label: 'Moderada',
    icon: Wind,
    description: 'Discreta e íntima. Se percibe en la cercanía — perfecta para la oficina y el día a día.',
    color: '#a8d4e6',
    bgImage:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'high' as const,
    label: 'Alta',
    icon: Flame,
    description: 'Equilibrio ideal. Deja una estela elegante que te acompaña durante horas.',
    color: '#d4af37',
    bgImage:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'beast' as const,
    label: 'Beast Mode',
    icon: Zap,
    description: 'Proyección extrema. Tu aroma llena el ambiente y entra a la sala antes que vos.',
    color: '#c0394b',
    bgImage:
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1600&q=80&auto=format&fit=crop',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Filtering engine — score-based
// ─────────────────────────────────────────────────────────────────────────────
type Gender    = typeof genderOptions[number]['id']
type Occasion  = typeof occasionOptions[number]['id']
type Season    = typeof seasonOptions[number]['id']
type ScentStyle= typeof scentStyleOptions[number]['id']
type Projection = typeof projectionOptions[number]['id']

interface Selection {
  gender: Gender | null
  occasion: Occasion | null
  season: Season | null
  scentStyle: ScentStyle[]
  projection: Projection | null
}

// La proyección es una escala ordinal: pedir "Alta" y recibir "Beast Mode" es un
// acierto parcial, no un fallo. Sin esto, elegir "Moderada" no puntuaba a casi
// ningún perfume y el paso 5 quedaba sin efecto sobre el resultado.
const PROJECTION_RANK: Record<Projection, number> = { moderate: 0, high: 1, beast: 2 }

function scorePerfume(p: Perfume, sel: Selection): MatchResult {
  let score = 0
  // El máximo depende solo de lo que respondió el usuario (no del perfume), así
  // que el porcentaje mide afinidad real y es comparable entre resultados.
  let maxScore = 0
  const reasons: string[] = []

  // Estilo olfativo (multi-select) — el criterio de mayor peso
  if (sel.scentStyle.length > 0) {
    // Ningún perfume declara más de 2 estilos: ese es el techo alcanzable
    maxScore += sel.scentStyle.length > 1 ? 12 : 13
    const matchedStyles = sel.scentStyle.filter(s => p.scentStyle?.includes(s))
    if (matchedStyles.length > 0) {
      score += 10
      if (sel.scentStyle.length > 1) {
        score += 2 * (Math.min(matchedStyles.length, 2) - 1)
        reasons.push(
          matchedStyles.length > 1
            ? `Combina ${matchedStyles.join(' y ')} perfectamente`
            : `Perfil ${matchedStyles[0]} confirmado`
        )
      } else if (p.scentStyle.length === 1) {
        score += 3
        reasons.push(`Especialista en aroma ${matchedStyles[0]}`)
      } else {
        reasons.push(`Perfil ${matchedStyles[0]} confirmado`)
      }
    }
  }

  if (sel.occasion) {
    maxScore += 6
    if (p.occasions?.includes(sel.occasion)) {
      score += 6
      const occasionLabels: Record<string, string> = {
        cita_nocturna: 'ideal para salidas nocturnas',
        oficina_diario: 'perfecto para el día a día',
        evento_especial: 'diseñado para ocasiones especiales',
        deporte_aire_libre: 'ideal para salidas casuales y sport',
      }
      reasons.push(occasionLabels[sel.occasion] || 'ocasión compatible')
    }
  }

  if (sel.projection) {
    maxScore += 7
    const target = PROJECTION_RANK[sel.projection]
    const distance = Math.min(
      ...(p.projections ?? []).map(l => Math.abs(PROJECTION_RANK[l] - target))
    )
    if (distance === 0) {
      score += 7
      const projectionLabels: Record<Projection, string> = {
        beast: 'Beast Mode real — proyección extrema garantizada',
        high: 'Proyección alta con estela envolvente',
        moderate: 'Proyección íntima y elegante',
      }
      reasons.push(projectionLabels[sel.projection])
    } else if (distance === 1) {
      score += 3
      reasons.push('Proyección cercana a la que buscás')
    }
  }

  if (sel.season) {
    maxScore += 4
    if (p.seasons?.includes(sel.season)) {
      score += 3
      if (p.seasons.length === 4) score += 1
      const seasonLabels: Record<string, string> = {
        summer: 'verano', winter: 'invierno',
        spring: 'primavera', fall: 'otoño',
      }
      reasons.push(`Recomendado para ${seasonLabels[sel.season] || sel.season}`)
    }
  }

  // Afinidad de género: exacto por encima de unisex (desempate silencioso)
  if (sel.gender) {
    maxScore += 2
    if (p.gender === sel.gender) score += 2
    else if (p.gender === 'unisex') score += 1
  }

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
  return { perfume: p, score, percentage, matchReasons: reasons }
}

function findTop3Matches(sel: Selection): MatchResult[] {
  // Gender hard filter: exclude opposite gender, keep same gender + unisex
  const compatible = perfumes.filter(p => {
    if (!sel.gender) return true
    if (sel.gender === 'masculino') return p.gender !== 'femenino'
    if (sel.gender === 'femenino') return p.gender !== 'masculino'
    return true
  })

  const scored = compatible
    .map(p => scorePerfume(p, sel))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      // El stock desempata, pero no infla el % — ese mide afinidad, no disponibilidad
      if (a.perfume.inStock !== b.perfume.inStock) return a.perfume.inStock ? -1 : 1
      if (b.matchReasons.length !== a.matchReasons.length)
        return b.matchReasons.length - a.matchReasons.length
      const aSpec = a.perfume.occasions.length
      const bSpec = b.perfume.occasions.length
      if (aSpec !== bSpec) return aSpec - bSpec
      return a.perfume.name.localeCompare(b.perfume.name)
    })

  if (scored.length > 0 && scored[0].score === 0) {
    console.warn('[Aromatch] Warning: ningún perfume matcheó con la selección', sel)
  }

  return scored.slice(0, 3)
}

// ─────────────────────────────────────────────────────────────────────────────
// Main AroMatchApp component
// ─────────────────────────────────────────────────────────────────────────────
const TOTAL_STEPS = 5

export default function AroMatchApp() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [capturedEmail, setCapturedEmail] = useState<string>('')
  const [hoveredBg, setHoveredBg] = useState<string | null>(null)
  const [selection, setSelection] = useState<Selection>({
    gender: null, occasion: null, season: null, scentStyle: [], projection: null,
  })
  const [matchResults, setMatchResults] = useState<MatchResult[]>([])

  const handleSelect = <K extends 'gender' | 'occasion' | 'season' | 'projection'>(
    type: K,
    value: NonNullable<Selection[K]>
  ) => {
    const updated = { ...selection, [type]: value }
    setSelection(updated)

    setTimeout(() => {
      if (type === 'gender')         setStep(2)
      else if (type === 'occasion')  setStep(3)
      else if (type === 'season')    setStep(4)
      else if (type === 'projection') runMatch(updated)
    }, 300)
  }

  const handleScentStyleToggle = (style: ScentStyle) => {
    setSelection(prev => ({
      ...prev,
      scentStyle: prev.scentStyle.includes(style)
        ? prev.scentStyle.filter(s => s !== style)
        : [...prev.scentStyle, style],
    }))
  }

  const handleScentStyleContinue = () => {
    setTimeout(() => setStep(5), 300)
  }

  const handleEmailOptIn = (email: string) => {
    setCapturedEmail(email)
    try { localStorage.setItem('aromatch_lead_email', email) } catch {}
    console.log('[AroMatch Lead]', email, new Date().toISOString())
  }

  const runMatch = (finalSel: Selection) => {
    setIsLoading(true)
    setTimeout(() => {
      setMatchResults(findTop3Matches(finalSel))
      setIsLoading(false)
      setShowResult(true)
    }, 2200)
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleReset = () => {
    setStep(1)
    setSelection({ gender: null, occasion: null, season: null, scentStyle: [], projection: null })
    setMatchResults([])
    setShowResult(false)
    setHoveredBg(null)
    setCapturedEmail('')
  }

  const stepTitles = [
    '¿Para quién es la fragancia?',
    '¿Para qué ocasión?',
    '¿Para qué estación del año?',
    '¿Qué estilo te representa?',
    '¿Qué proyección buscás?',
  ]

  const activeBg = hoveredBg

  const showProgressBar = !showResult && !isLoading

  return (
    <section
      id="aromatch"
      className={`relative px-6 overflow-hidden transition-all duration-500 ${
        showResult ? 'py-16 md:py-24' : 'py-20 md:py-32'
      }`}
    >
      <AnimatePresence>
        {activeBg && (
          <motion.div
            key={activeBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={activeBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/72" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`relative z-10 mx-auto transition-all duration-500 ${
        showResult ? 'max-w-6xl' : 'max-w-4xl'
      }`}>

        {!showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-eyebrow mb-4 block">
              Experiencia Interactiva
            </span>
            <hr className="divider-gold max-w-20 mx-auto mb-6" />
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-white"
            >
              AroMatch
            </h2>
            <p className="body-text text-white/45 max-w-lg mx-auto text-sm">
              Cinco preguntas de instinto para hallar el perfume perfecto.
            </p>
          </motion.div>
        )}

        {showResult && matchResults.length > 0 && (
          <motion.div
            key="showcase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PrestigeShowcase
              results={matchResults}
              onReset={handleReset}
              capturedEmail={capturedEmail}
              onEmailSubmit={handleEmailOptIn}
            />
          </motion.div>
        )}

        {!showResult && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-6 md:p-10 min-h-130 relative overflow-hidden border border-[#d4af37]/15 hover:border-[#d4af37]/30 transition-colors duration-500"
        >

          {showProgressBar && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="p-2 -ml-2 text-white/50 hover:text-white transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <span className="text-sm text-white/50">Paso {step} de {TOTAL_STEPS}</span>
                </div>
                <span className="text-sm text-[#d4af37]">{Math.round((step / TOTAL_STEPS) * 100)}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-linear-to-r from-[#d4af37] to-[#f4d58d]"
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">

            {!isLoading && !showResult && (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
              >
                <h3
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-xl md:text-2xl font-bold uppercase tracking-widest text-center mb-8 text-white"
                >
                  {stepTitles[step - 1]}
                </h3>

                {/* STEP 1 – Gender */}
                {step === 1 && (
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    {genderOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('gender', opt.id)}
                        onMouseEnter={() => setHoveredBg(opt.bgImage)}
                        onMouseLeave={() => setHoveredBg(null)}
                        className={`p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/4 backdrop-blur-xl border ${
                          selection.gender === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/8 hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-8 h-8" style={{ color: opt.color }} />
                        <span
                          className="label-eyebrow text-center leading-tight"
                          style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.10em', fontSize: '0.65rem' }}
                        >{opt.label}</span>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* STEP 2 – Occasion */}
                {step === 2 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {occasionOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('occasion', opt.id)}
                        onMouseEnter={() => setHoveredBg(opt.bgImage)}
                        onMouseLeave={() => setHoveredBg(null)}
                        className={`p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/4 backdrop-blur-xl border ${
                          selection.occasion === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/8 hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-8 h-8" style={{ color: opt.color }} />
                        <span
                          className="label-eyebrow text-center leading-tight"
                          style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.12em', fontSize: '0.65rem' }}
                        >{opt.label}</span>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* STEP 3 – Season */}
                {step === 3 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {seasonOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('season', opt.id)}
                        onMouseEnter={() => setHoveredBg(opt.bgImage)}
                        onMouseLeave={() => setHoveredBg(null)}
                        className={`p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/4 backdrop-blur-xl border ${
                          selection.season === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/8 hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-8 h-8" style={{ color: opt.color }} />
                        <span className="text-sm text-white/90 text-center font-medium">{opt.label}</span>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* STEP 4 – Scent Style (multi-select) */}
                {step === 4 && (
                  <div>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {scentStyleOptions.map((opt) => {
                        const isSelected = selection.scentStyle.includes(opt.id)
                        return (
                          <motion.button
                            key={opt.id}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleScentStyleToggle(opt.id)}
                            onMouseEnter={() => setHoveredBg(opt.bgImage)}
                            onMouseLeave={() => setHoveredBg(null)}
                            className={`p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 relative
                                       bg-white/4 backdrop-blur-xl border ${
                              isSelected
                                ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                : 'border-white/8 hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                            }`}
                          >
                            {isSelected && (
                              <div
                                className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                                style={{ background: '#d4af37' }}
                              >
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            )}
                            <opt.icon className="w-10 h-10 mb-1" style={{ color: opt.color }} />
                            <span className="text-lg text-white font-medium text-center">{opt.label}</span>
                            <span className="text-xs text-white/50 text-center uppercase tracking-widest">{opt.description}</span>
                          </motion.button>
                        )
                      })}
                    </div>

                    <AnimatePresence>
                      {selection.scentStyle.length > 0 && (
                        <motion.button
                          key="continuar-btn"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.25 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={handleScentStyleContinue}
                          className="btn-gold w-full flex items-center justify-center gap-3"
                        >
                          <Sparkles className="w-4 h-4" />
                          Continuar
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* STEP 5 – Longevity */}
                {step === 5 && (
                  <div className="grid md:grid-cols-3 gap-4">
                    {projectionOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('projection', opt.id)}
                        onMouseEnter={() => setHoveredBg(opt.bgImage)}
                        onMouseLeave={() => setHoveredBg(null)}
                        className={`p-8 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/4 backdrop-blur-xl border ${
                          selection.projection === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/8 hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-10 h-10" style={{ color: opt.color }} />
                        <span className="text-lg text-white font-medium">{opt.label}</span>
                        <span className="text-xs md:text-sm text-white/55 text-center leading-relaxed max-w-50">{opt.description}</span>
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* ── Loading ───────────────────────────────────────────────── */}
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full border-2 border-white/10" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="absolute inset-0 w-20 h-20 rounded-full border-2 border-transparent border-t-[#d4af37]"
                  />
                  <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-[#d4af37]" />
                </div>
                <p className="text-xl font-serif text-white mb-2">Analizando tu perfil...</p>
                <p className="text-sm text-white/40">Explorando nuestra colección de perfumes</p>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
        )}
      </div>
    </section>
  )
}
