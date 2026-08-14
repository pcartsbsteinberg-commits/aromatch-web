"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Mail, 
  Instagram, 
  MessageCircle,
  ArrowRight,
  Check
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const modalData: Record<string, { title: string, content: React.ReactNode }> = {
  envios: {
    title: 'Información de Envíos',
    content: (
      <div className="space-y-4 text-white/80">
        <p>Envíos a todo el país vía <span className="text-[#d4af37] font-medium">Correo Argentino</span> y <span className="text-[#d4af37] font-medium">Andreani</span>.</p>
        <p>Envío <span className="text-[#d4af37] font-medium">gratis</span> a partir de la compra de <span className="text-white font-medium">2 unidades</span>.</p>
        <p>Retiros en <span className="text-white font-medium">Vicente López</span> disponibles.</p>
      </div>
    )
  },
  devoluciones: {
    title: 'Política de Devoluciones',
    content: (
      <div className="space-y-4 text-white/80 text-sm leading-relaxed">
        <p>Por cuestiones de higiene y la naturaleza del producto, los perfumes no tienen devolución una vez despachados.</p>
        <p>Si tu pedido llega dañado, contactanos dentro de las 24hs con fotos y resolveremos el inconveniente de inmediato.</p>
      </div>
    )
  },
  historia: {
    title: 'Nuestra Historia',
    content: (
      <div className="space-y-4 text-white/80 leading-relaxed font-serif text-sm">
        <p>Nuestra misión es acercarte la perfumería árabe y de nicho de lujo con perfumes 100% originales y al mejor precio.</p>
        <p>Creemos que tu fragancia es parte de tu identidad. Por eso seleccionamos perfumes auténticos que te permiten expresar quién sos de forma genuina.</p>
      </div>
    )
  },
  faq: {
    title: 'Preguntas Frecuentes',
    content: (
      <div className="space-y-6 text-white/80">
        <div>
          <h4 className="text-white font-medium mb-1 flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]"/> Garantía 100% Original
          </h4>
          <p className="text-sm">Garantizamos que todos nuestros perfumes son 100% originales, en su frasco sellado de fábrica.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-1 flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]"/> Verificación de Batch Code
          </h4>
          <p className="text-sm">Con cada compra entregamos el Batch Code correspondiente al frasco original. Transparencia total en cada perfume.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-1 flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]"/> Frasco Sellado de Fábrica
          </h4>
          <p className="text-sm">Todos nuestros perfumes llegan en su frasco original cerrado y sellado de fábrica. Conservación perfecta y cero alteración de la fórmula.</p>
        </div>
      </div>
    )
  }
}

export default function FooterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubscribed(true)
    setIsLoading(false)
  }

  const footerLinks: Record<string, Array<{ name: string; href?: string; action?: string }>> = {
    shop: [
      { name: 'Todos los Perfumes', href: '#products' },
      { name: 'Mas Vendidos', href: '#products' },
    ],
    support: [
      { name: 'Info de Envios', action: 'envios' },
      { name: 'Devoluciones', action: 'devoluciones' },
      { name: 'Contactanos', href: '#' },
    ],
    learn: [
      { name: 'Guia de Fragancias', href: '#education' },
      { name: 'Nuestra Historia', action: 'historia' },
      { name: 'Preguntas Frecuentes', action: 'faq' },
    ],
  }

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/auradecant.ar', 
      label: 'Instagram',
      external: true
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/5491162066609', 
      label: 'WhatsApp',
      external: true
    },
  ]

  const renderLink = (link: { name: string; href?: string; action?: string }) => {
    if (link.action) {
      return (
        <button 
          onClick={() => setActiveModal(link.action as string)}
          className="text-white/40 hover:text-[#d4af37] transition-colors text-sm text-left"
        >
          {link.name}
        </button>
      )
    }
    return (
      <a 
        href={link.href}
        className="text-white/40 hover:text-[#d4af37] transition-colors text-sm text-left"
      >
        {link.name}
      </a>
    )
  }

  return (
    <footer id="footer" className="bg-black border-t border-white/5 relative">
      <Dialog open={!!activeModal} onOpenChange={(open) => !open && setActiveModal(null)}>
        <DialogContent className="bg-[#0a0a0a] border-white/10 text-white sm:max-w-md shadow-2xl shadow-[#d4af37]/5">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif text-[#d4af37] tracking-wide">
              {activeModal && modalData[activeModal]?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            {activeModal && modalData[activeModal]?.content}
          </div>
        </DialogContent>
      </Dialog>

      {/* Newsletter Section */}
      <div className="py-16 md:py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-8 h-8 text-[#d4af37] mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Unite al Club Exclusivo
            </h3>
            <p className="text-white/50 max-w-md mx-auto mb-8">
              Suscribite para acceso anticipado a nuevos lanzamientos, ofertas exclusivas y consejos de fragancias de nuestros expertos.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu email"
                    className="w-full pl-12 pr-4 py-4 glass rounded-full border border-white/10 focus:border-[#d4af37]/50 outline-none text-white placeholder:text-white/30 transition-colors bg-transparent"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className="px-8 py-4 bg-linear-to-r from-[#d4af37] to-[#a08850] text-black font-medium rounded-full flex items-center justify-center gap-2 glow-gold-subtle hover:glow-gold transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Suscribirme
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-4 glass rounded-full border border-green-500/30"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-green-400">¡Bienvenido al club!</span>
              </motion.div>
            )}

            <p className="text-xs text-white/30 mt-4">
              Sin spam, nunca. Cancela cuando quieras.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-[#d4af37]" />
                <span className="text-xl font-serif font-semibold text-white">
                  AroMatch<span className="text-[#d4af37]">.ar</span>
                </span>
              </a>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                Perfumes árabes y de nicho 100% originales. Experimentá fragancias de lujo sin el precio de lujo.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 glass rounded-full border border-white/10 hover:border-[#d4af37]/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/70" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-medium mb-4">Tienda</h4>
              <ul className="space-y-3 flex flex-col">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Soporte</h4>
              <ul className="space-y-3 flex flex-col">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Aprende</h4>
              <ul className="space-y-3 flex flex-col">
                {footerLinks.learn.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AroMatch.ar. Todos los derechos reservados. Perfumes árabes y de nicho originales.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
