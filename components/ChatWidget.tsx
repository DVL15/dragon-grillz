'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Instagram, Mail } from 'lucide-react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative bg-[#0e0e0e] border border-white/10 w-72 overflow-hidden"
          >
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84B]/60 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <div>
                <p className="text-white font-semibold text-sm">Une question ?</p>
                <p className="text-white/35 text-[10px] tracking-wider mt-0.5">On te répond rapidement</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/25 hover:text-white/60 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-4 space-y-2.5">
              <a
                href="https://www.instagram.com/dragon_grillz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-gradient-to-r from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 border border-white/8 px-4 py-3 hover:border-white/20 transition-colors group"
              >
                <Instagram size={16} className="text-[#fd1d1d] shrink-0" />
                <div>
                  <p className="text-white text-xs font-medium">Instagram</p>
                  <p className="text-white/35 text-[10px]">@dragon_grillz</p>
                </div>
              </a>

              <a
                href="mailto:contact.dvldesign@gmail.com"
                className="flex items-center gap-3 w-full bg-white/3 border border-white/8 px-4 py-3 hover:border-white/20 transition-colors group"
              >
                <Mail size={16} className="text-[#C8A84B] shrink-0" />
                <div>
                  <p className="text-white text-xs font-medium">Email</p>
                  <p className="text-white/35 text-[10px]">Réponse sous 24h</p>
                </div>
              </a>
            </div>

            {/* Gold bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84B]/20 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton flottant */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#C8A84B] text-black flex items-center justify-center shadow-lg shadow-[#C8A84B]/20 hover:bg-[#E8C96B] transition-colors"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
