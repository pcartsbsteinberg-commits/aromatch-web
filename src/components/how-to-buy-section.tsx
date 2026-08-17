"use client"

import { motion } from 'framer-motion'
import { Search, MessageCircle, CreditCard, PackageCheck } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

const WHATSAPP_GENERAL_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola! Quiero comprar un perfume, ¿me ayudás a elegir?'
)}`

const steps = [
  {
    n: '01',
    icon: Search,
    title: 'Elegí tu perfume',
    body: 'Encontrá tu fragancia ideal con el AroMatch Quiz, o navegá directo la colección.',
  },
  {
    n: '02',
    icon: MessageCircle,
    title: 'Coordiná por WhatsApp',
    body: 'El botón te lleva directo a WhatsApp con el mensaje ya armado — solo tenés que enviarlo.',
  },
  {
    n: '03',
    icon: CreditCard,
    title: 'Confirmás pago y envío',
    body: 'Coordinás el medio de pago y la dirección de entrega directamente con nosotros.',
  },
  {
    n: '04',
    icon: PackageCheck,
    title: 'Recibís tu pedido',
    body: 'Entrega en 24-48h en CABA y GBA, con seguimiento.',
  },
]

export default function HowToBuySection() {
  return (
    <section id="como-comprar" className="relative overflow-hidden bg-[#0a0a0a] px-6 py-20 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4af37]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:mb-16"
        >
          <span
            className="mb-5 block text-xs uppercase text-[#d4af37]"
            style={{ fontFamily: "'DM Mono', ui-monospace, monospace", letterSpacing: '0.42em' }}
          >
            Simple y Directo
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">
            Cómo <span className="italic text-[#d4af37]">Comprar</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/85">
            Sin cuentas, sin carritos: coordinás todo por WhatsApp en cuatro pasos.
          </p>
          <div className="mx-auto mt-7 h-px w-28 bg-linear-to-r from-transparent via-[#d4af37] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-2xl border border-[#d4af37]/14 bg-[#0a0800] p-6">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/10">
                    <step.icon className="h-6 w-6 text-[#d4af37]" />
                  </span>
                  <span className="font-serif text-4xl font-semibold leading-none text-white/10">
                    {step.n}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-[#f4d58d]">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/85">{step.body}</p>

                {index === 1 && (
                  <a
                    href={WHATSAPP_GENERAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-emerald mt-5 w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Escribinos ahora</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
