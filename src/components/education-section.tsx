"use client"

import { useState, useSyncExternalStore } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  Flower2,
  ThermometerSun,
  FlaskConical,
  Activity,
  Droplets,
  ShieldCheck,
  Wind,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

type Level = 'basico' | 'intermedio' | 'avanzado'

interface Topic {
  id: string
  order: string
  title: string
  teaser: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  iconColor: string
  image: string
  level: Level
  readTime: string
  content: string
}

const levelMeta: Record<Level, { label: string; color: string; bg: string; border: string }> = {
  basico: { label: 'Básico', color: '#5fe3a1', bg: 'rgba(18,163,107,0.16)', border: 'rgba(31,191,127,0.45)' },
  intermedio: { label: 'Intermedio', color: '#f4d58d', bg: 'rgba(212,175,55,0.16)', border: 'rgba(212,175,55,0.5)' },
  avanzado: { label: 'Avanzado', color: '#c9b6ff', bg: 'rgba(139,92,246,0.16)', border: 'rgba(139,92,246,0.5)' },
}

const UNSPLASH = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`

const topics: Topic[] = [
  {
    id: 'families',
    order: '01',
    title: 'Las Familias Olfativas: el mapa de los aromas',
    teaser: 'El sistema de clasificación que predice cómo huele un perfume.',
    icon: Flower2,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1465146344425-f00d5f5c8f07'),
    level: 'basico',
    readTime: '2 min',
    content:
      'Las fragancias se organizan en familias olfativas — el sistema de clasificación más importante de la perfumería moderna. Las cuatro grandes familias son: **Oriental** (especiado, cálido, amaderado, con notas de vainilla, oud, ámbar y resinas — perfumes intensos y sensuales ideales para la noche y el frío), **Floral** (la familia más grande, dominada por rosas, jazmín, tuberosa y lirio — versátil y romántica), **Fresco** (cítricos, notas acuáticas, verdes y aromáticas — perfectos para el calor y el día a día), y **Amaderado** (cedro, sándalo, vetiver, pachulí — sofisticados y con gran longevidad). Dentro de cada familia existen subfamilias: un perfume puede ser "Oriental Gourmand" (dulce y comestible, como Khamrah), "Floral Frutal" (como Yara Candy) o "Amaderado Aromático" (como Club de Nuit). Conocer la familia de un perfume te permite predecir cómo va a oler antes de probarlo, y entender por qué ciertos perfumes te gustan más que otros.',
  },
  {
    id: 'seasons',
    order: '02',
    title: 'Temperatura y estación: la física detrás del aroma',
    teaser: 'Por qué el calor y el frío cambian todo en tu fragancia.',
    icon: ThermometerSun,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1418985991508-e47386d96a71'),
    level: 'basico',
    readTime: '2 min',
    content:
      'La temperatura ambiente tiene un impacto directo y medible en cómo se percibe una fragancia. En **verano y climas cálidos**, el calor acelera la evaporación de las moléculas aromáticas — esto amplifica la proyección y puede hacer que perfumes intensos como el 9PM o el Khamrah resulten abrumadores. Para el calor, las fragancias frescas y cítricas (familia Fresco) y los florales ligeros proyectan de manera equilibrada sin saturar el ambiente. En **invierno y climas fríos**, el frío suprime la evaporación molecular — por eso necesitás fragancias con mayor concentración y notas más densas: orientales, amaderados y oud funcionan a la perfección porque sus moléculas pesadas se perciben aún en temperaturas bajas. La regla práctica: cuanto más frío el clima, más intenso puede ser el perfume. Un Amber Oud en verano puede ser difícil de usar; en invierno, es exactamente lo que necesitás. Esto también explica por qué los países árabes, con climas extremos de calor y frío, desarrollaron las fragancias más potentes del mundo.',
  },
  {
    id: 'concentration',
    order: '03',
    title: 'Concentración: EDP vs EDT vs Parfum',
    teaser: 'EDC, EDT, EDP y Parfum: qué significan esos porcentajes.',
    icon: FlaskConical,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1594035910387-fea47794261f'),
    level: 'basico',
    readTime: '2 min',
    content:
      'La concentración de aceites esenciales en una fragancia determina su intensidad, duración y precio. **Eau de Cologne (EDC)**: 2-5% de concentración — dura 2-3 horas, ideal para el día y el verano. **Eau de Toilette (EDT)**: 5-15% — dura 4-6 horas, el formato más común para fragancias diurnas. **Eau de Parfum (EDP)**: 15-20% — dura 6-10 horas, el formato más popular en perfumería árabe porque equilibra duración e intensidad. **Parfum o Extrait**: 20-40% — dura 8-12+ horas, la mayor concentración posible, el lujo máximo. La mayoría de las fragancias árabes de Lattafa, Armaf y Afnan son EDP, lo que explica su extraordinaria duración en comparación con fragancias occidentales de la misma categoría de precio. Cuando ves "Beast Mode" en una fragancia, significa EDP con concentración alta en aceites de alta persistencia como el oud, el ámbar y la vainilla. La concentración también afecta la forma en que el perfume evoluciona: a mayor concentración, más notable la diferencia entre las notas de salida, corazón y fondo.',
  },
  {
    id: 'notes',
    order: '04',
    title: 'Las tres notas: cómo evoluciona un perfume en tu piel',
    teaser: 'Salida, corazón y fondo: la historia en tres actos.',
    icon: Activity,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1547887538-e3a2f32cb1cc'),
    level: 'intermedio',
    readTime: '2 min',
    content:
      'Todo perfume de calidad cuenta una historia en tres actos sobre tu piel. Las **notas de salida** (o notas de cabeza) son lo primero que percibís al aplicar el perfume — duran los primeros 15-30 minutos y están compuestas por moléculas ligeras y volátiles como cítricos, frutas frescas y hierbas aromáticas. Son la primera impresión, pero no representan el perfume completo. Las **notas de corazón** (o notas medias) emergen después de 30 minutos y duran entre 2 y 4 horas — son el alma del perfume, compuestas por florales, especias y notas aromáticas más complejas. Es en esta etapa donde el perfume muestra su verdadero carácter. Las **notas de fondo** (o notas base) son el fundamento que permanece en tu piel 4-8 horas después — maderas, resinas, ámbar, oud y almizcle. Son las moléculas más pesadas y persistentes, y determinan la "estela" del perfume. Esto explica por qué nunca debés juzgar un perfume en el primer spray: lo que olés en la tienda no es lo que vas a oler en tres horas. Siempre esperá al menos 30 minutos antes de decidir.',
  },
  {
    id: 'ph',
    order: '05',
    title: 'pH de la piel y química personal: por qué el mismo perfume huele diferente en cada persona',
    teaser: 'Por qué el mismo frasco huele distinto en cada persona.',
    icon: Droplets,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1559825481-12a05cc00344'),
    level: 'intermedio',
    readTime: '2 min',
    content:
      'Uno de los fenómenos más fascinantes de la perfumería es que el mismo frasco puede oler de manera completamente distinta en dos personas. Esto no es marketing — tiene una explicación química concreta. El **pH natural de la piel** varía entre 4.5 y 6.5 según la persona, y afecta directamente cómo las moléculas aromáticas se adhieren y evolucionan. Las pieles más ácidas (pH bajo) tienden a proyectar más los cítricos y florales, mientras que las pieles alcalinas potencian los amaderados y orientales. La **temperatura corporal** también influye: las personas con temperatura corporal más alta naturalmente amplifican la proyección de cualquier fragancia. La **hidratación de la piel** es quizás el factor más importante: la piel seca absorbe y "come" el perfume rápidamente (duración reducida), mientras que la piel hidratada retiene las moléculas aromáticas por más tiempo. Consejo práctico: aplicar el perfume sobre una capa de crema sin perfume o vaselina puede duplicar su duración en piel. Los puntos de pulso (muñecas, cuello, detrás de las orejas, pliegue del codo) generan calor corporal que activa y amplifica la fragancia.',
  },
  {
    id: 'fake',
    order: '06',
    title: 'Cómo detectar un perfume original: guía definitiva',
    teaser: 'La guía definitiva para verificar la autenticidad.',
    icon: ShieldCheck,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1592945403244-b3fbafd7f539'),
    level: 'intermedio',
    readTime: '2 min',
    content:
      'Con el mercado de réplicas más sofisticado que nunca, saber verificar la autenticidad de una fragancia es una habilidad esencial. Los perfumes originales tienen características específicas que las réplicas raramente replican con exactitud. **El packaging**: las cajas originales tienen tipografía perfectamente alineada, colores sólidos y uniformes, y materiales de alta calidad — cualquier impresión borrosa, colores inconsistentes o cartón débil es señal de alerta. **El frasco**: el vidrio original es pesado, uniforme y sin burbujas — el spray debe atomizar finamente y de manera uniforme. **El batch code**: cada frasco legítimo tiene un código de lote (batch code) impreso o grabado en la base o lateral del frasco, que podés verificar en checkfresh.com o checkcosmetic.net para confirmar año de producción y autenticidad. **El olor**: las réplicas suelen tener notas de salida similares pero el drydown (evolución después de 2-3 horas) es completamente diferente — las moléculas de calidad que generan la estela larga y compleja son costosas y raramente replicadas. **El precio**: una fragancia original tiene un costo de producción mínimo que hace imposible venderla legítimamente por debajo de cierto umbral. Si el precio parece demasiado bueno para ser verdad, generalmente lo es.',
  },
  {
    id: 'projection',
    order: '07',
    title: 'Proyección y estela: la diferencia entre ser notado y saturar',
    teaser: 'Sillage vs longevidad: presencia sin invadir.',
    icon: Wind,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1495195129352-aeb325a55b65'),
    level: 'avanzado',
    readTime: '2 min',
    content:
      'En perfumería, **proyección** (también llamada sillage, del francés "estela de barco") describe la nube de aroma que el perfume crea alrededor de tu cuerpo. Un perfume con alta proyección puede ser detectado por personas a 1-2 metros de distancia; un perfume de proyección moderada solo es perceptible en contacto cercano. Ni la máxima ni la mínima proyección es objetivamente mejor — depende completamente del contexto. La proyección **"Beast Mode"** es ideal para salidas nocturnas, eventos, y situaciones donde querés ser percibido como una presencia olfativa fuerte. Sin embargo, en oficinas, transporte público, o espacios cerrados, una proyección extrema puede resultar invasiva y generar el efecto contrario al deseado. La proyección **moderada** es la elección inteligente para el día a día: presente pero no abrumadora. La **longevidad** es diferente de la proyección: un perfume puede tener alta longevidad (durar 12 horas en tu piel) pero proyección moderada (solo perceptible de cerca después de las primeras horas). Los orientales y oud árabes generalmente tienen ambas características en su punto máximo, mientras que los frescos suelen tener buena proyección inicial que decrece rápidamente.',
  },
  {
    id: 'layering',
    order: '08',
    title: 'Capas y combinaciones: el arte de usar más de un perfume',
    teaser: 'Layering: combiná fragancias como un experto.',
    icon: Layers,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1541643600914-78b084683601'),
    level: 'avanzado',
    readTime: '2 min',
    content:
      'El layering o superposición de fragancias es una técnica avanzada que permite crear combinaciones olfativas únicas y personalizadas. La práctica tiene raíces profundas en la perfumería árabe, donde aplicar múltiples aceites y perfumes en capas es parte de la cultura. La regla fundamental del layering: **las notas de fondo se aplican primero, las de salida después**. Esto significa que un amaderado denso como el Amber Oud se aplica directamente sobre la piel, y un floral más ligero se aplica encima — el resultado es una fragancia completamente nueva que ninguno de los dos crearía solo. Combinaciones que funcionan bien: un fresco cítrico + un amaderado (el cítrico suaviza la densidad del amaderado); un oriental especiado + un floral (el floral ilumina la pesadez del oriental); un gourmand dulce + un amaderado seco (contraste que crea profundidad). Lo que debe evitarse: dos Beast Mode juntos (el resultado puede ser abrumador), dos florales similares (se neutralizan), o perfumes de la misma familia pero diferente concentración (uno domina al otro). El layering también extiende la longevidad: aplicar primero un aceite de perfume y después el spray puede añadir 3-4 horas extra de duración.',
  },
]

/* Renderiza el contenido resaltando los **términos técnicos** en dorado claro */
function renderRich(text: string) {
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

function EduCard({
  topic,
  index,
  hoverEnabled,
}: {
  topic: Topic
  index: number
  hoverEnabled: boolean
}) {
  const [active, setActive] = useState(false)
  const level = levelMeta[topic.level]
  const Icon = topic.icon

  // Tilt 3D suave — solo en dispositivos con hover real
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const spring = { stiffness: 150, damping: 20, mass: 0.4 }
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), spring)
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), spring)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEnabled) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }

  const resetTilt = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseEnter={() => hoverEnabled && setActive(true)}
        onMouseLeave={() => {
          if (hoverEnabled) {
            setActive(false)
            resetTilt()
          }
        }}
        onClick={() => {
          if (!hoverEnabled) setActive((a) => !a)
        }}
        style={{
          rotateX: hoverEnabled ? rotateX : 0,
          rotateY: hoverEnabled ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        className={`edu-card group relative flex h-full min-h-85 flex-col overflow-hidden rounded-2xl border bg-[#0a0800] ${
          active ? 'is-active' : ''
        }`}
      >
        {/* Imagen de fondo contextual */}
        <img
          src={topic.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            ;(e.currentTarget as HTMLImageElement).style.display = 'none'
          }}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        {/* Overlay oscuro */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.45) 100%)',
          }}
        />

        {/* ── Capa base (estado normal) ───────────────────────────── */}
        <div
          className="relative z-10 flex h-full flex-col p-6 md:p-7"
          style={{ transform: 'translateZ(40px)' }}
        >
          {/* Top: icono + número de orden */}
          <div className="flex items-start justify-between">
            <div className="edu-icon flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/10">
              <Icon className="h-6 w-6" style={{ color: topic.iconColor }} />
            </div>
            <span className="font-serif text-5xl font-semibold leading-none text-white/10 md:text-6xl">
              {topic.order}
            </span>
          </div>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: level.color, backgroundColor: level.bg, borderColor: level.border }}
            >
              {level.label}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs tracking-wide text-white/85">
              ⏱ {topic.readTime}
            </span>
          </div>

          {/* Spacer empuja el título hacia abajo (emerge desde abajo) */}
          <div className="flex-1" />

          {/* Título + teaser */}
          <div className="edu-title-block transition-transform duration-500">
            <h3 className="font-serif text-xl font-semibold leading-snug text-[#f4d58d] md:text-[1.45rem]">
              {topic.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">{topic.teaser}</p>
          </div>
        </div>

        {/* ── Panel expandido (hover / tap) ───────────────────────── */}
        <div
          className="edu-panel absolute inset-0 z-20 flex flex-col p-6 md:p-7"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-lg font-semibold leading-snug text-[#f4d58d] md:text-xl">
              {topic.title}
            </h3>
            <span
              className="shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: level.color, backgroundColor: level.bg, borderColor: level.border }}
            >
              {level.label}
            </span>
          </div>
          <div className="mt-3 h-px w-12 bg-linear-to-r from-[#d4af37] to-transparent" />
          <div className="scrollbar-hide mt-3 flex-1 overflow-y-auto pr-1">
            <p className="edu-prose">{renderRich(topic.content)}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function subscribeHoverCapability(callback: () => void) {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {}
  const mql = window.matchMedia('(hover: hover) and (pointer: fine)')
  mql.addEventListener('change', callback)
  return () => mql.removeEventListener('change', callback)
}

function getHoverCapability() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

function getHoverCapabilityServerSnapshot() {
  return false
}

export default function EducationSection() {
  const hoverEnabled = useSyncExternalStore(
    subscribeHoverCapability,
    getHoverCapability,
    getHoverCapabilityServerSnapshot
  )

  const headerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const headerWord = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section id="education" className="relative overflow-hidden bg-[#0a0a0a] px-6 py-20 md:py-32">
      {/* Estilos locales: drop cap, términos, comportamiento del panel */}
      <style>{`
        .edu-prose {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.85);
        }
        .edu-prose::first-letter {
          font-family: var(--font-serif);
          float: left;
          font-size: 3.1rem;
          line-height: 0.82;
          padding: 0.35rem 0.55rem 0 0;
          color: var(--gold-mid);
          font-weight: 600;
        }
        .edu-term { color: #f4d58d; font-weight: 600; }

        .edu-card {
          border-color: rgba(212, 175, 55, 0.14);
          box-shadow: 0 18px 48px -20px rgba(0,0,0,0.85);
          transition: border-color .45s ease, box-shadow .45s ease;
          will-change: transform;
        }
        .edu-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(140deg, rgba(212,175,55,0.55), rgba(212,175,55,0) 45%, rgba(212,175,55,0) 60%, rgba(244,213,141,0.45));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity .45s ease;
          pointer-events: none;
          z-index: 30;
        }

        /* Panel oculto por defecto */
        .edu-panel {
          background: rgba(8, 6, 2, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(14px);
          transition: opacity .45s ease, transform .45s ease;
          pointer-events: none;
        }

        .edu-card.is-active {
          border-color: rgba(212, 175, 55, 0.45);
          box-shadow: 0 30px 70px -22px rgba(0,0,0,0.9), 0 0 30px -6px rgba(212,175,55,0.28);
        }
        .edu-card.is-active::before { opacity: 1; }
        .edu-card.is-active .edu-panel {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .edu-card.is-active .edu-title-block { transform: translateY(8px); opacity: 0; }

        /* En pantallas sin hover, sin transform 3D ni escalado de imagen */
        @media (hover: none) {
          .edu-card:hover img { transform: none !important; }
        }
      `}</style>

      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-60 w-60 rounded-full bg-[#a08850]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 text-center md:mb-16"
        >
          <motion.span
            variants={headerWord}
            className="mb-5 block text-xs uppercase text-[#d4af37]"
            style={{ fontFamily: "'DM Mono', ui-monospace, monospace", letterSpacing: '0.42em' }}
          >
            Aprende y Descubre
          </motion.span>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">
            <motion.span variants={headerWord} className="inline-block">
              El Arte de la{' '}
            </motion.span>
            <motion.span variants={headerWord} className="inline-block italic text-[#d4af37]">
              Fragancia
            </motion.span>
          </h2>

          <motion.p
            variants={headerWord}
            className="mx-auto mt-5 max-w-xl text-white/85"
          >
            Todo lo que necesitás saber para elegir, usar y apreciar una fragancia de nivel superior.
          </motion.p>

          <motion.div
            variants={headerWord}
            className="mx-auto mt-7 h-px w-28 bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
          />
        </motion.div>

        {/* ── Grid de cards ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <EduCard key={topic.id} topic={topic} index={index} hoverEnabled={hoverEnabled} />
          ))}
        </div>

        {/* ── CTA final ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-6 text-center"
        >
          <p className="font-serif text-2xl text-white md:text-3xl">
            ¿Listo para encontrar tu <span className="italic text-[#d4af37]">fragancia perfecta</span>?
          </p>
          <a href="#aromatch" className="btn-gold">
            <Sparkles className="h-4 w-4" />
            <span>Hacer el AroMatch Quiz</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
