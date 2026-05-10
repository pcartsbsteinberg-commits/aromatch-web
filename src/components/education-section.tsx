"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Flower2, 
  Thermometer, 
  Droplets, 
  ShieldCheck, 
  Clock,
  ChevronDown,
  Sparkles
} from 'lucide-react'

interface Topic {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  content: string
  color: string
  size?: 'large' | 'medium' | 'small'
}

const topics: Topic[] = [
  {
    id: 'families',
    title: '¿Que son las familias olfativas?',
    icon: Flower2,
    color: '#d4af37',
    size: 'large',
    content: 'Las fragancias se categorizan en familias distintas basadas en sus caracteristicas dominantes. Las familias principales incluyen: Oriental (calido, especiado, sensual), Amaderado (terroso, sofisticado), Fresco (citrico, acuatico, verde), y Floral (romantico, elegante). Entender estas familias te ayuda a identificar tus preferencias y descubrir nuevos aromas dentro de tu categoria favorita.'
  },
  {
    id: 'seasons',
    title: 'Perfumes de verano vs. invierno',
    icon: Thermometer,
    color: '#c0c0c0',
    size: 'medium',
    content: 'La temperatura afecta dramaticamente el rendimiento de las fragancias. En verano, el calor amplifica la proyeccion, haciendo ideales las fragancias mas ligeras y frescas. En invierno, el aire frio suprime las moleculas, por lo que composiciones mas ricas e intensas funcionan mejor. Elige notas citricas y acuaticas para dias calurosos, y oud, ambar y especias para el frio.'
  },
  {
    id: 'ph',
    title: 'Como el pH de la piel afecta la duracion',
    icon: Droplets,
    color: '#cd7f32',
    size: 'medium',
    content: 'El nivel de pH natural de tu piel influye en como las moleculas de fragancia interactuan con tu quimica corporal. La piel mas grasa tiende a retener las fragancias por mas tiempo, mientras que la piel seca puede hacer que los aromas se evaporen mas rapido. Hidratar antes de aplicar y usar productos corporales complementarios puede extender significativamente la duracion.'
  },
  {
    id: 'fake',
    title: 'Como detectar perfumes falsos',
    icon: ShieldCheck,
    color: '#f4d58d',
    size: 'small',
    content: 'Los perfumes autenticos tienen empaques precisos con fuentes nitidas, codigos de lote correctos y materiales de calidad. Busca errores ortograficos, examina la calidad de la tapa y compara el peso del frasco. Las fragancias falsas suelen tener coloracion inconsistente y proyeccion debil. En AuraDecant, con la compra de cada decant entregamos el Batch Code del envase original. Así tenés la certeza y la total tranquilidad de que estás adquiriendo una fragancia 100% auténtica y legítima.'
  },
  {
    id: 'longevity',
    title: 'Haz que tu perfume dure mas',
    icon: Clock,
    color: '#d4af37',
    size: 'small',
    content: 'Aplica la fragancia en puntos de pulso (munecas, cuello, detras de las orejas) donde el calor corporal ayuda a difundir el aroma. Hidrata la piel primero, rocía a 15 cm de distancia y evita frotar las munecas. Usa productos complementarios y guarda las fragancias lejos de la luz solar y el calor para preservar su calidad.'
  }
]

export default function EducationSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="education" className="py-20 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-[#a08850]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 block">
            Aprende y Descubre
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-white">
            El Arte de la Fragancia
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Domina la ciencia detras de los perfumes excepcionales con nuestras guias curadas.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                topic.size === 'large' ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 h-full border border-white/5 hover:border-white/10 group ${
                  expandedId === topic.id ? 'border-[#d4af37]/30' : ''
                }`}
                onClick={() => setExpandedId(expandedId === topic.id ? null : topic.id)}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${topic.color}20` }}
                >
                  <topic.icon 
                    className="w-6 h-6"
                    style={{ color: topic.color }}
                  />
                </div>

                {/* Title */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg md:text-xl font-serif text-white group-hover:text-[#d4af37] transition-colors">
                    {topic.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedId === topic.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white/30" />
                  </motion.div>
                </div>

                {/* Content */}
                <AnimatePresence>
                  {expandedId === topic.id ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 text-sm leading-relaxed overflow-hidden"
                    >
                      {topic.content}
                    </motion.p>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white/40 text-sm line-clamp-2"
                    >
                      {topic.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="#aromatch"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4d58d] transition-colors group"
          >
            <Sparkles className="w-4 h-4" />
            <span>¿Listo para encontrar tu aroma perfecto?</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
