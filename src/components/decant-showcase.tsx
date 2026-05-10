"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    id: "glass",
    title: "PUREZA E INERCIA",
    description: "Envase 100% Vidrio Cristalino: Material inerte grado perfumero. Garantiza la conservación absoluta de la fórmula original sin alteración química.",
    position: { top: "60%", left: "50%" },
    side: 'left'
  },
  {
    id: "atomizer",
    title: "DIFUSIÓN DE ALTA PRECISIÓN",
    description: "Atomizador Premium (Negro): Diseñado para emular el spray original. Rendimiento estimado: ~60 atomizaciones (5ml) / ~120 atomizaciones (10ml).",
    position: { top: "12%", left: "50%" },
    side: 'left'
  },
  {
    id: "seal",
    title: "SELLADO DE TEFLÓN",
    description: "Protección Total anti-oxidación: Aplicamos teflón en la rosca para crear un sello barrera anti-aire y anti-fugas.",
    position: { top: "28%", left: "50%" },
    side: 'right'
  },
  {
    id: "process",
    title: "CERO CONTAMINACIÓN",
    description: "Decantado Individualizado: Utilizamos jeringas estériles exclusivas para cada fragancia. Garantía de pureza: Cero contaminación cruzada de aromas.",
    position: { top: "85%", left: "50%" },
    side: 'right'
  }
]

function FeatureBlock({ feature, isActive, onHover }: { feature: any, isActive: boolean, onHover: (id: string | null) => void }) {
  const isLeft = feature.side === 'left'

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={() => onHover(null)}
      className={`relative p-5 glass rounded-xl border transition-all duration-300 cursor-pointer ${isActive ? 'bg-amber-400/10 border-amber-400/50 scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.1)]' : 'bg-black/40 border-white/5 hover:border-amber-400/30'}`}
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${isActive ? 'text-amber-400' : 'text-amber-400/50'}`} />
        <div>
          <h3 className={`font-serif text-sm xl:text-base font-bold mb-1.5 transition-colors ${isActive ? 'text-amber-400' : 'text-amber-400/80'}`}>
            {feature.title}
          </h3>
          <p className={`font-sans text-xs xl:text-sm leading-relaxed transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function DecantShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const ref = useRef(null)

  return (
    <section id="decant-showcase" ref={ref} className="w-full py-20 xl:py-28 bg-[#030303] border-t border-[#d4af37]/15 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 xl:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white font-serif text-3xl md:text-5xl font-bold mb-4"
          >
            La Arquitectura del <span className="text-gradient-gold">Decant Premium</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/50 font-sans text-sm md:text-base max-w-2xl mx-auto"
          >
            Preservamos la magia de los diseñadores originales mediante ingeniería de envasado estéril.
          </motion.p>
        </div>

        {/* 3-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 xl:gap-16">
          
          {/* Left Column Text Blocks */}
          <div className="flex flex-col gap-6 lg:gap-12 w-full max-w-sm order-2 lg:order-1">
            {features.filter(f => f.side === 'left').map((feature) => (
              <FeatureBlock key={feature.id} feature={feature} isActive={activeId === feature.id} onHover={setActiveId} />
            ))}
          </div>

          {/* Center Column: Interactive SVG Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[140px] md:w-[160px] lg:w-[180px] h-[450px] md:h-[500px] flex-shrink-0 order-1 lg:order-2 mx-auto"
          >
            <div className="relative w-full h-full">
              {/* Programmed SVG Decant Bottle */}
              <svg 
                viewBox="0 0 100 340" 
                className="w-full h-full drop-shadow-[0_20px_40px_rgba(212,175,55,0.25)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Damask/Middle Eastern Inspired Pattern */}
                  <pattern id="damaskPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.8)">
                    <rect width="40" height="40" fill="#0a0a0a" />
                    {/* Intricate Gold Vectors */}
                    <path d="M20 0 L25 10 L35 15 L25 20 L20 30 L15 20 L5 15 L15 10 Z" fill="rgba(212,175,55,0.25)" />
                    <circle cx="20" cy="15" r="2.5" fill="rgba(212,175,55,0.4)" />
                    <path d="M0 20 Q 10 5, 20 20 T 40 20" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.75" />
                    <path d="M0 40 Q 10 25, 20 40 T 40 40" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.75" />
                    <circle cx="0" cy="0" r="1.5" fill="rgba(212,175,55,0.3)" />
                    <circle cx="40" cy="40" r="1.5" fill="rgba(212,175,55,0.3)" />
                  </pattern>

                  {/* Refractive Glass Gradients */}
                  <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                    <stop offset="12%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="40%" stopColor="rgba(255,255,255,0.0)" />
                    <stop offset="85%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="95%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
                  </linearGradient>

                  <linearGradient id="liquidGold" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(212,175,55,0.7)" />
                    <stop offset="50%" stopColor="rgba(212,175,55,0.3)" />
                    <stop offset="100%" stopColor="rgba(212,175,55,0.85)" />
                  </linearGradient>

                  {/* Metallic Atomizer Gradients */}
                  <linearGradient id="metallicBlack" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="25%" stopColor="#3d3d3d" />
                    <stop offset="60%" stopColor="#0a0a0a" />
                    <stop offset="90%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#111111" />
                  </linearGradient>

                  <linearGradient id="goldCollar" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a08850" />
                    <stop offset="20%" stopColor="#f5e1a4" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="80%" stopColor="#fffbe6" />
                    <stop offset="100%" stopColor="#8c733b" />
                  </linearGradient>
                </defs>

                {/* ===== BOTTLE ANATOMY ===== */}
                
                {/* 1. Main Glass Body Silhouette & Damask Pattern */}
                <rect x="15" y="80" width="70" height="240" rx="6" fill="url(#damaskPattern)" />
                
                {/* 2. Scent Liquid Inner Core */}
                <rect x="18" y="95" width="64" height="215" rx="4" fill="url(#liquidGold)" opacity="0.85" />

                {/* 3. Outer Glass Casing / Specular Highlights */}
                <rect x="15" y="80" width="70" height="240" rx="6" fill="url(#glassReflection)" />
                <rect x="15" y="80" width="70" height="240" rx="6" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                
                {/* Glass Bottom Thickness */}
                <path d="M15 315 Q50 330 85 315 L85 320 Q50 326 15 320 Z" fill="rgba(255,255,255,0.25)" />

                {/* 4. Plunger Tube descending into liquid */}
                <line x1="50" y1="80" x2="55" y2="310" stroke="rgba(255,255,255,0.35)" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="50" y1="80" x2="55" y2="310" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />

                {/* 5. Glass Neck Structure */}
                <rect x="35" y="65" width="30" height="15" fill="rgba(255,255,255,0.2)" />
                <rect x="35" y="65" width="30" height="15" fill="url(#glassReflection)" />
                
                {/* 6. CRUCIAL: High-Visibility Teflon Tape Simulation on Threads */}
                {/* Dense, layered white lines mimicking the wrapped tape */}
                <line x1="34" y1="67" x2="66" y2="69" stroke="#ffffff" strokeWidth="2" opacity="0.95" />
                <line x1="33" y1="70" x2="67" y2="72" stroke="#ffffff" strokeWidth="2.5" opacity="0.9" />
                <line x1="34" y1="74" x2="66" y2="76" stroke="#ffffff" strokeWidth="2" opacity="0.85" />
                <line x1="35" y1="77" x2="65" y2="78" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />

                {/* 7. Gold Atomizer Collar Base */}
                <rect x="31" y="55" width="38" height="10" rx="1.5" fill="url(#goldCollar)" />
                
                {/* 8. Black Metallic Spray Assembly */}
                <path d="M38 40 L62 40 L63 55 L37 55 Z" fill="url(#metallicBlack)" />
                <rect x="39" y="38" width="22" height="4" rx="1" fill="#111" />
                <rect x="42" y="32" width="16" height="6" rx="1" fill="url(#metallicBlack)" />
                
                {/* Spray Nozzle Port */}
                <circle cx="62" cy="45" r="2" fill="#050505" />

                {/* 9. Semi-Translucent Luxury Overcap */}
                <path d="M32 5 L68 5 L70 55 L30 55 Z" fill="rgba(15,15,15,0.55)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.75" />
                <path d="M32 5 L68 5 L70 55 L30 55 Z" fill="url(#glassReflection)" opacity="0.6" />
                <rect x="31.5" y="48" width="37" height="3" fill="url(#goldCollar)" opacity="0.85" />

              </svg>
              
              {/* Interactive Hotspots overlayed directly on the SVG proportions */}
              {features.map((feature) => {
                const isActive = activeId === feature.id
                return (
                  <div 
                    key={`hotspot-${feature.id}`}
                    className="absolute z-20 cursor-pointer group"
                    style={{ top: feature.position.top, left: feature.position.left, transform: 'translate(-50%, -50%)' }}
                    onMouseEnter={() => setActiveId(feature.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onClick={() => setActiveId(isActive ? null : feature.id)}
                  >
                    {/* Pulsing Target Aura */}
                    <div className={`absolute inset-0 -m-3 rounded-full border border-amber-400 bg-amber-400/20 animate-ping ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} style={{ animationDuration: '3s' }} />
                    {/* Central Gold Node */}
                    <div className={`relative w-4 h-4 rounded-full border-[1.5px] border-black shadow-[0_0_15px_rgba(212,175,55,1)] transition-transform duration-300 ${isActive ? 'bg-[#fffbe6] scale-125' : 'bg-amber-400 scale-100'}`} />
                  </div>
                )
              })}
            </div>
            
            {/* Ambient Ground Reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[140%] h-6 bg-amber-400/15 blur-[20px] rounded-[100%] pointer-events-none" />
          </motion.div>

          {/* Right Column Text Blocks */}
          <div className="flex flex-col gap-6 lg:gap-12 w-full max-w-sm order-3 lg:order-3">
            {features.filter(f => f.side === 'right').map((feature) => (
              <FeatureBlock key={feature.id} feature={feature} isActive={activeId === feature.id} onHover={setActiveId} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
