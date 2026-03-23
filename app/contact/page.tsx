'use client'

import { motion } from 'framer-motion'
import { Instagram, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import ToothSelector from '@/components/ToothSelector'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', description: '' })
  const [selectedTeeth, setSelectedTeeth] = useState<string[]>([])

  const toggleTooth = (id: string) =>
    setSelectedTeeth((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, teeth: selectedTeeth }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', address: '', description: '' })
        setSelectedTeeth([])
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-white/10 text-white text-sm px-0 py-3 focus:outline-none focus:border-[#C8A84B]/60 transition-colors placeholder:text-white/20'

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
          <h1 className="font-bebas text-5xl md:text-8xl tracking-wider mb-5">
            NOUS CONTACTER
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
            Remplis le formulaire ci-dessous pour démarrer ta commande.
            On te répond sous 24h.
          </p>
        </motion.div>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-between border border-white/5 px-6 py-4 mb-10"
        >
          <a
            href="https://www.instagram.com/dragon_grillz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/50 hover:text-[#C8A84B] transition-colors group"
          >
            <Instagram size={14} className="text-[#C8A84B]" />
            <span className="text-[11px] tracking-wider">@dragon_grillz</span>
          </a>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2.5 text-white/40">
            <MapPin size={14} className="text-[#C8A84B]" />
            <span className="text-[11px] tracking-wider">Made in France 🇫🇷</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2.5 text-white/40">
            <Clock size={14} className="text-[#C8A84B]" />
            <span className="text-[11px] tracking-wider">2–3 semaines</span>
          </div>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative border border-white/8 bg-[#080808] p-8 md:p-12"
        >
          {/* Gold top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84B]/50 to-transparent" />

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <CheckCircle size={44} className="text-[#C8A84B] mb-5" />
              <h3 className="font-bebas text-3xl tracking-wider mb-2">MESSAGE ENVOYÉ</h3>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Demande bien reçue. On te répond sous 24h pour lancer la fabrication.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-[#C8A84B] text-[10px] tracking-[0.3em] uppercase border border-[#C8A84B]/25 px-6 py-2.5 hover:bg-[#C8A84B]/5 transition-colors"
              >
                Nouvelle demande
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Nom + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-[#C8A84B] text-[9px] uppercase tracking-[0.4em] block mb-3">
                    Nom complet *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ton nom"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[#C8A84B] text-[9px] uppercase tracking-[0.4em] block mb-3">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ton@email.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Téléphone + Adresse */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-[#C8A84B] text-[9px] uppercase tracking-[0.4em] block mb-3">
                    Téléphone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[#C8A84B] text-[9px] uppercase tracking-[0.4em] block mb-3">
                    Adresse de livraison
                  </label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Rue, ville, code postal"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              {/* Sélecteur de dents */}
              <div>
                <label className="text-[#C8A84B] text-[9px] uppercase tracking-[0.4em] block mb-5">
                  Dents concernées
                </label>
                <ToothSelector selected={selectedTeeth} onToggle={toggleTooth} />
              </div>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              {/* Description */}
              <div>
                <label className="text-[#C8A84B] text-[9px] uppercase tracking-[0.4em] block mb-3">
                  Description du projet *
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Décris le style que tu souhaites : couleur, finition, inspiration..."
                  required
                  rows={4}
                  className={inputClass + ' resize-none'}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400/80 text-xs">
                  <AlertCircle size={13} />
                  <span>Une erreur est survenue. Réessaie ou contacte-nous sur Instagram.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 bg-[#C8A84B] text-black font-semibold py-4 hover:bg-[#E8C96B] transition-colors text-[10px] tracking-[0.3em] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    Envoyer ma demande
                  </>
                )}
              </button>
            </form>
          )}

          {/* Gold bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84B]/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  )
}
