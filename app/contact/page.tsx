'use client'

import { motion } from 'framer-motion'
import { Instagram, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import ToothSelector from '@/components/ToothSelector'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Haut',
    description: '',
  })
  const [selectedTeeth, setSelectedTeeth] = useState<string[]>([])

  const toggleTooth = (id: string) => {
    setSelectedTeeth((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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
        setForm({ name: '', email: '', phone: '', type: 'Haut', description: '' })
        setSelectedTeeth([])
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-[#0C0C0C] border border-white/10 text-white text-sm px-4 py-3.5 focus:outline-none focus:border-[#C8A84B]/50 transition-colors placeholder:text-white/20'

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
            Remplis le formulaire ci-dessous pour démarrer ta commande.
            On te répond sous 24h.
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-3 gap-3 mb-12">
          <motion.a
            href="https://www.instagram.com/dragon_grillz/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-2 bg-[#0C0C0C] border border-white/5 p-5 hover:border-[#C8A84B]/30 transition-all group text-center"
          >
            <Instagram size={18} className="text-[#C8A84B]" />
            <p className="text-white text-xs font-medium group-hover:text-[#C8A84B] transition-colors">@dragon_grillz</p>
            <p className="text-white/30 text-[10px]">Réponse sous 24h</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-2 bg-[#0C0C0C] border border-white/5 p-5 text-center"
          >
            <MapPin size={18} className="text-[#C8A84B]" />
            <p className="text-white text-xs font-medium">Made in France 🇫🇷</p>
            <p className="text-white/30 text-[10px]">France & Europe</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-2 bg-[#0C0C0C] border border-white/5 p-5 text-center"
          >
            <Clock size={18} className="text-[#C8A84B]" />
            <p className="text-white text-xs font-medium">2 à 3 semaines</p>
            <p className="text-white/30 text-[10px]">Délai de fabrication</p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[#0C0C0C] border border-white/5 p-8 md:p-10"
        >
          <h2 className="font-bebas text-2xl tracking-wider text-[#C8A84B] mb-8">
            DÉMARRER UNE COMMANDE
          </h2>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <CheckCircle size={48} className="text-[#C8A84B] mb-4" />
              <h3 className="font-bebas text-2xl tracking-wider mb-2">MESSAGE ENVOYÉ !</h3>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                On a bien reçu ta demande. On te répond sous 24h pour lancer la fabrication.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-[#C8A84B] text-xs tracking-[0.2em] uppercase border border-[#C8A84B]/30 px-6 py-2.5 hover:bg-[#C8A84B]/5 transition-colors"
              >
                Nouvelle demande
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Nom + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/30 text-[10px] uppercase tracking-[0.3em] block mb-2">
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
                  <label className="text-white/30 text-[10px] uppercase tracking-[0.3em] block mb-2">
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

              {/* Téléphone + Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/30 text-[10px] uppercase tracking-[0.3em] block mb-2">
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
                  <label className="text-white/30 text-[10px] uppercase tracking-[0.3em] block mb-2">
                    Type de Grillz *
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="Haut">Grillz du haut</option>
                    <option value="Bas">Grillz du bas</option>
                    <option value="Complet">Haut + Bas (complet)</option>
                  </select>
                </div>
              </div>

              {/* Sélecteur de dents */}
              <div>
                <label className="text-white/30 text-[10px] uppercase tracking-[0.3em] block mb-4">
                  Dents concernées
                </label>
                <div className="border border-white/5 p-5 bg-[#080808]">
                  <ToothSelector selected={selectedTeeth} onToggle={toggleTooth} />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-white/30 text-[10px] uppercase tracking-[0.3em] block mb-2">
                  Description du projet *
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Décris le style que tu souhaites : couleur, finition, inspiration..."
                  required
                  rows={5}
                  className={inputClass + ' resize-none'}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-xs">
                  <AlertCircle size={14} />
                  <span>Une erreur est survenue. Réessaie ou contacte-nous sur Instagram.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 bg-[#C8A84B] text-black font-semibold py-4 hover:bg-[#E8C96B] transition-colors text-xs tracking-[0.2em] uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Envoyer ma demande
                  </>
                )}
              </button>

              <p className="text-white/20 text-[10px] text-center">
                En soumettant ce formulaire, tu acceptes d'être contacté par Dragon Grillz.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
