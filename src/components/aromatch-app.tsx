"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  Briefcase,
  Coffee,
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
import { perfumes, type Perfume } from '@/lib/perfumes'

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
  { id: 'summer' as const, label: 'Verano', icon: Sun, color: '#f4d58d' },
  { id: 'winter' as const, label: 'Invierno', icon: Snowflake, color: '#a8d4e6' },
  { id: 'spring' as const, label: 'Primavera', icon: Leaf, color: '#90b77d' },
  { id: 'fall' as const, label: 'Otoño', icon: CloudSun, color: '#cd7f32' },
]

const scentStyleOptions = [
  { id: 'dulce' as const, label: 'Dulces y Adictivos', description: 'Vainilla, Postres, Dulzor', icon: Heart, color: '#e6a8d7' },
  { id: 'fresco' as const, label: 'Frescos y Limpios', description: 'Cítricos, Mar, Energía', icon: Wind, color: '#a8e6cf' },
  { id: 'maderoso' as const, label: 'Maderosos y Elegantes', description: 'Bosque, Cuero, Autoridad', icon: Briefcase, color: '#cda97f' },
  { id: 'especiado' as const, label: 'Especiados y Misteriosos', description: 'Pimienta, Canela, Árabe', icon: Flame, color: '#d48a37' },
]

const longevityOptions = [
  {
    id: 'moderate' as const,
    label: 'Moderada',
    icon: Wind,
    description: 'Perfecta para el día a día',
    color: '#a8d4e6',
  },
  {
    id: 'high' as const,
    label: 'Alta',
    icon: Flame,
    description: 'Acompaña sin desvanecerse',
    color: '#d4af37',
  },
  {
    id: 'beast' as const,
    label: 'Beast Mode',
    icon: Zap,
    description: 'Proyección extrema',
    color: '#c0394b',
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

function findBestMatch(sel: Selection): Perfume {
  const scored = perfumes.map((p) => {
    let score = 0

    // Scent Style is the strongest signal (5 pts)
    if (sel.scentStyle && p.scentStyle?.includes(sel.scentStyle)) score += 5
    // Occasion is the second strongest (3 pts)
    if (sel.occasion && p.occasions?.includes(sel.occasion)) score += 3
    // Longevity (2 pts)
    if (sel.longevity && p.longevities?.includes(sel.longevity)) score += 2
    // Season (1 pt)
    if (sel.season && p.seasons?.includes(sel.season)) score += 1

    // Bonus: beast-only perfumes get +1 when user picks beast
    if (sel.longevity === 'beast' && p.longevities?.length === 1 && p.longevities[0] === 'beast') score += 1

    return { perfume: p, score }
  })

  // Sort by score desc; tiebreak by name (deterministic)
  scored.sort((a, b) => b.score - a.score || a.perfume.name.localeCompare(b.perfume.name))
  return scored[0].perfume
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
  const [hoveredOccasion, setHoveredOccasion] = useState<string | null>(null)
  const [selection, setSelection] = useState<Selection>({
    occasion: null, season: null, scentStyle: null, longevity: null,
  })
  const [result, setResult] = useState<Perfume | null>(null)
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
      setResult(findBestMatch(finalSel))
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
    setResult(null)
    setShowResult(false)
    setShowLeadCapture(false)
    setSavedFinalSel(null)
    setHoveredOccasion(null)
    setCapturedEmail('')
  }

  const stepTitles = [
    '¿Para qué ocasión es la fragancia?',
    '¿Para qué estación del año?',
    '¿Qué estilo te representa?',
    '¿Qué longevidad buscas?',
  ]

  const activeBg = occasionOptions.find(o => o.id === hoveredOccasion)?.bgImage ?? null

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
              Cuatro preguntas sencillas y de instinto para hallar el decant perfecto.
            </p>
          </motion.div>
        )}

        {showResult && result && (
          <motion.div
            key="showcase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PrestigeShowcase perfume={result} onReset={handleReset} capturedEmail={capturedEmail} />
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
                        onMouseEnter={() => setHoveredOccasion(opt.id)}
                        onMouseLeave={() => setHoveredOccasion(null)}
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
                        className={`p-8 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.longevity === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-10 h-10" style={{ color: opt.color }} />
                        <span className="text-lg text-white font-medium">{opt.label}</span>
                        <span className="text-sm text-white/50 text-center">{opt.description}</span>
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
                <p className="text-sm text-white/40">Explorando nuestra colección de decants</p>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
        )}
      </div>
    </section>
  )
}
