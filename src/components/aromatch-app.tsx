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
  AlertCircle,
  Mail,
  ArrowRight,
} from 'lucide-react'
import PrestigeShowcase from '@/components/prestige-showcase'
import { perfumes, type Perfume, type MatchResult } from '@/lib/perfumes'

// ─────────────────────────────────────────────────────────────────────────────
// Quiz option definitions
// ─────────────────────────────────────────────────────────────────────────────

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
    label: 'Deporte / Aire Libre',
    icon: Zap,
    color: '#a8d4e6',
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

const longevityOptions = [
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
type Occasion  = typeof occasionOptions[number]['id']
type Season    = typeof seasonOptions[number]['id']
type ScentStyle= typeof scentStyleOptions[number]['id']
type Longevity = typeof longevityOptions[number]['id']

interface Selection {
  occasion: Occasion | null
  season: Season | null
  scentStyle: ScentStyle | null
  longevity: Longevity | null
}

function scorePerfume(p: Perfume, sel: Selection): MatchResult {
  let score = 0
  const reasons: string[] = []

  if (sel.scentStyle && p.scentStyle?.includes(sel.scentStyle)) {
    score += 10
    if (p.scentStyle.length === 1) {
      score += 4
      reasons.push(`Especialista en aromas ${sel.scentStyle}s`)
    } else {
      reasons.push(`Perfil ${sel.scentStyle} confirmado`)
    }
  }

  if (sel.occasion && p.occasions?.includes(sel.occasion)) {
    score += 6
    const occasionLabels: Record<string, string> = {
      cita_nocturna: 'ideal para salidas nocturnas',
      oficina_diario: 'perfecto para el día a día',
      evento_especial: 'diseñado para ocasiones especiales',
      deporte_aire_libre: 'formulado para actividad al aire libre',
    }
    reasons.push(occasionLabels[sel.occasion] || 'ocasión compatible')
  }

  if (sel.longevity && p.longevities?.includes(sel.longevity)) {
    score += 4
    if (sel.longevity === 'beast' && p.longevities.length === 1) {
      score += 3
      reasons.push('Beast Mode real — proyección extrema garantizada')
    } else if (sel.longevity === 'beast') {
      reasons.push('Alta proyección y duración')
    } else if (sel.longevity === 'high') {
      reasons.push('Duración de 8–12 horas en piel')
    } else {
      reasons.push('Proyección íntima y elegante')
    }
  }

  if (sel.season && p.seasons?.includes(sel.season)) {
    score += 2
    if (p.seasons.length === 4) score += 1
    const seasonLabels: Record<string, string> = {
      summer: 'verano', winter: 'invierno',
      spring: 'primavera', fall: 'otoño',
    }
    reasons.push(`Recomendado para ${seasonLabels[sel.season] || sel.season}`)
  }

  const MAX_SCORE = 30
  const percentage = Math.round((score / MAX_SCORE) * 100)
  return { perfume: p, score, percentage, matchReasons: reasons }
}

function findTop3Matches(sel: Selection): MatchResult[] {
  const scored = perfumes
    .map(p => scorePerfume(p, sel))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      if (b.matchReasons.length !== a.matchReasons.length)
        return b.matchReasons.length - a.matchReasons.length
      const aSpec = a.perfume.occasions.length
      const bSpec = b.perfume.occasions.length
      if (aSpec !== bSpec) return aSpec - bSpec
      return a.perfume.name.localeCompare(b.perfume.name)
    })

  if (scored[0].score === 0) {
    console.warn('[Aromatch] Warning: ningún perfume matcheó con la selección', sel)
  }

  return scored.slice(0, 3)
}

// ─────────────────────────────────────────────────────────────────────────────
// Lead Capture Screen
// ─────────────────────────────────────────────────────────────────────────────
function LeadCaptureScreen({ onSubmit }: { onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor ingresá un correo válido.')
      return
    }
    setError('')
    onSubmit(email)
  }

  return (
    <motion.div
      key="lead-capture"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.38 }}
      className="flex flex-col items-center justify-center py-8 text-center"
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          border: '1px solid rgba(212,175,55,0.30)',
        }}
      >
        <Mail className="w-7 h-7 text-[#d4af37]" />
      </div>

      <h3
        style={{ fontFamily: 'var(--font-display)' }}
        className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight max-w-sm"
      >
        Tu esencia ideal está lista
      </h3>

      <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-4 opacity-50" />

      <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-xs" style={{ fontFamily: 'var(--font-body)' }}>
        ¿A dónde te enviamos tu perfil olfativo?
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError('') }}
            placeholder="tu@correo.com"
            className="w-full px-5 py-4 rounded-xl bg-white/[0.04] backdrop-blur-sm
                        text-white placeholder-white/25
                        transition-all duration-300
                        outline-none focus:ring-0"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              letterSpacing: '0.02em',
              border: '1px solid rgba(212,175,55,0.35)',
              boxShadow: email ? '0 0 16px rgba(212,175,55,0.15)' : 'none',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(212,175,55,0.7)'
              e.target.style.boxShadow = '0 0 20px rgba(212,175,55,0.2)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(212,175,55,0.35)'
              e.target.style.boxShadow = email ? '0 0 16px rgba(212,175,55,0.15)' : 'none'
            }}
          />
        </div>

        {error && (
          <p className="text-red-400/80 text-xs flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)' }}>
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {error}
          </p>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="btn-gold w-full flex items-center justify-center gap-3"
        >
          <Sparkles className="w-4 h-4" />
          Ver mi Match
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </form>

      <p className="text-white/20 text-xs mt-5 max-w-xs" style={{ fontFamily: 'var(--font-body)' }}>
        Solo usamos tu correo para enviarte tu perfil olfativo. Sin spam.
      </p>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main AroMatchApp component
// ─────────────────────────────────────────────────────────────────────────────
const TOTAL_STEPS = 4

export default function AroMatchApp() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [capturedEmail, setCapturedEmail] = useState<string>('')
  const [hoveredBg, setHoveredBg] = useState<string | null>(null)
  const [selection, setSelection] = useState<Selection>({
    occasion: null, season: null, scentStyle: null, longevity: null,
  })
  const [matchResults, setMatchResults] = useState<MatchResult[]>([])
  const [savedFinalSel, setSavedFinalSel] = useState<Selection | null>(null)

  const handleSelect = <K extends keyof Selection>(type: K, value: Selection[K]) => {
    const updated = { ...selection, [type]: value }
    setSelection(updated)

    setTimeout(() => {
      if (type === 'occasion')  setStep(2)
      else if (type === 'season') setStep(3)
      else if (type === 'scentStyle') setStep(4)
      else if (type === 'longevity') {
        setSavedFinalSel(updated)
        setShowLeadCapture(true)
      }
    }, 300)
  }

  const handleLeadSubmit = (email: string) => {
    setCapturedEmail(email)
    try { localStorage.setItem('aromatch_lead_email', email) } catch {}
    console.log('[AroMatch Lead]', email, new Date().toISOString())
    setShowLeadCapture(false)
    runMatch(savedFinalSel!)
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
    if (showLeadCapture) {
      setShowLeadCapture(false)
      setStep(4)
    } else if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleReset = () => {
    setStep(1)
    setSelection({ occasion: null, season: null, scentStyle: null, longevity: null })
    setMatchResults([])
    setShowResult(false)
    setShowLeadCapture(false)
    setSavedFinalSel(null)
    setHoveredBg(null)
    setCapturedEmail('')
  }

  const stepTitles = [
    '¿Para qué ocasión es la fragancia?',
    '¿Para qué estación del año?',
    '¿Qué estilo te representa?',
    '¿Qué proyección buscas?',
  ]

  const activeBg = hoveredBg

  const showProgressBar = !showResult && !isLoading && !showLeadCapture

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
            <hr className="divider-gold max-w-[80px] mx-auto mb-6" />
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-white"
            >
              AroMatch
            </h2>
            <p className="body-text text-white/45 max-w-lg mx-auto text-sm">
              Cuatro preguntas sencillas y de instinto para hallar el perfume perfecto.
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
            <PrestigeShowcase results={matchResults} onReset={handleReset} capturedEmail={capturedEmail} />
          </motion.div>
        )}

        {!showResult && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-6 md:p-10 min-h-[520px] relative overflow-hidden border border-[#d4af37]/15 hover:border-[#d4af37]/30 transition-colors duration-500"
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
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#f4d58d]"
                />
              </div>
            </div>
          )}

          {showLeadCapture && (
            <div className="mb-6">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">

            {!isLoading && !showResult && !showLeadCapture && (
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

                {/* STEP 1 – Occasion */}
                {step === 1 && (
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
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.occasion === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
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

                {/* STEP 2 – Season */}
                {step === 2 && (
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
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.season === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-8 h-8" style={{ color: opt.color }} />
                        <span className="text-sm text-white/90 text-center font-medium">{opt.label}</span>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* STEP 3 – Scent Style (NEW CORE) */}
                {step === 3 && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {scentStyleOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('scentStyle', opt.id)}
                        onMouseEnter={() => setHoveredBg(opt.bgImage)}
                        onMouseLeave={() => setHoveredBg(null)}
                        className={`p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.scentStyle === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-10 h-10 mb-1" style={{ color: opt.color }} />
                        <span className="text-lg text-white font-medium text-center">{opt.label}</span>
                        <span className="text-xs text-white/50 text-center uppercase tracking-widest">{opt.description}</span>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* STEP 4 – Longevity */}
                {step === 4 && (
                  <div className="grid md:grid-cols-3 gap-4">
                    {longevityOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('longevity', opt.id)}
                        onMouseEnter={() => setHoveredBg(opt.bgImage)}
                        onMouseLeave={() => setHoveredBg(null)}
                        className={`p-8 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.longevity === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-10 h-10" style={{ color: opt.color }} />
                        <span className="text-lg text-white font-medium">{opt.label}</span>
                        <span className="text-xs md:text-sm text-white/55 text-center leading-relaxed max-w-[200px]">{opt.description}</span>
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* ── Lead Capture ─────────────────────────────────────────── */}
            {!isLoading && !showResult && showLeadCapture && (
              <LeadCaptureScreen onSubmit={handleLeadSubmit} />
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
