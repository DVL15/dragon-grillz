'use client'

import { motion } from 'framer-motion'
import { Instagram, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A84B] text-[10px] tracking-[0.5em] uppercase font-medium mb-4 block">
            Contact
          </span>
          <h1 className="font-bebas text-5xl md:text-8xl tracking-wider mb-5">NOUS CONTACTER</h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
            Pour toute question ou pour démarrer une commande, contactez-nous directement sur
            Instagram.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-3 mb-16">
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/dragon_grillz/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6 bg-[#0C0C0C] border border-white/5 p-8 hover:border-[#C8A84B]/30 transition-all group"
          >
            <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
              <Instagram size={26} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-1">Instagram</p>
              <p className="text-white font-semibold text-lg group-hover:text-[#C8A84B] transition-colors">
                @dragon_grillz
              </p>
              <p className="text-white/30 text-xs mt-1">Réponse sous 24h</p>
            </div>
            <span className="text-white/15 group-hover:text-[#C8A84B] transition-colors text-xl">→</span>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6 bg-[#0C0C0C] border border-white/5 p-8"
          >
            <div className="w-14 h-14 flex-shrink-0 border border-[#C8A84B]/20 flex items-center justify-center text-[#C8A84B]">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-1">Fabrication</p>
              <p className="text-white font-semibold text-lg">Made in France 🇫🇷</p>
              <p className="text-white/30 text-xs mt-1">Livraison France & Europe</p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 bg-[#0C0C0C] border border-white/5 p-8"
          >
            <div className="w-14 h-14 flex-shrink-0 border border-[#C8A84B]/20 flex items-center justify-center text-[#C8A84B]">
              <Clock size={22} />
            </div>
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-1">Délai de fabrication</p>
              <p className="text-white font-semibold text-lg">2 à 3 semaines</p>
              <p className="text-white/30 text-xs mt-1">À partir de la réception de l'empreinte</p>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center border border-[#C8A84B]/15 bg-[#C8A84B]/4 p-12"
        >
          <h2 className="font-bebas text-3xl md:text-4xl tracking-wider text-[#C8A84B] mb-4">
            DÉMARRONS VOTRE PROJET
          </h2>
          <p className="text-white/40 text-sm mb-8 leading-relaxed">
            Décrivez-nous le style que vous souhaitez sur Instagram,
            <br />
            et nous créerons une pièce unique à votre image.
          </p>
          <a
            href="https://www.instagram.com/dragon_grillz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C8A84B] text-black font-semibold px-9 py-3.5 hover:bg-[#E8C96B] transition-colors text-xs tracking-[0.2em] uppercase"
          >
            <Instagram size={16} />
            Ouvrir Instagram
          </a>
        </motion.div>
      </div>
    </div>
  )
}
