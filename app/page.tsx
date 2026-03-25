'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Gem, Shield, Zap, X, Instagram, FileText } from 'lucide-react'
import ScrollParticles from '@/components/ScrollParticles'
import { useState } from 'react'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
}

const galleryPreviews = [
  { src: '/images/grillz-1.jpg', alt: 'Grillz black neon' },
  { src: '/images/grillz-2.jpg', alt: 'Grillz silver' },
  { src: '/images/grillz-3.jpg', alt: 'Grillz open set' },
]

const features = [
  {
    icon: <Gem size={22} />,
    title: '100% Sur-mesure',
    desc: 'Chaque pièce est façonnée à partir de votre empreinte dentaire unique.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Made in France',
    desc: 'Fabriqué en France par des artisans passionnés et expérimentés.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Prix accessible',
    desc: 'Qualité artisanale à prix juste. Pas de pierres précieuses, juste du style.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Prends contact',
    desc: 'Remplis le formulaire sur le site ou envoie-nous un message sur Instagram. Dis-nous ce que tu veux.',
  },
  {
    n: '02',
    title: 'Kit d\'empreinte',
    desc: 'On t\'envoie un kit simple à utiliser chez toi pour prendre l\'empreinte de tes dents.',
  },
  {
    n: '03',
    title: 'Fabrication artisanale',
    desc: 'Nos artisans façonnent ton Grillz à la main, en France. Délai : 2 à 3 semaines.',
  },
  {
    n: '04',
    title: 'Livraison',
    desc: 'Ta pièce unique est livrée directement chez toi en France ou en Europe.',
  },
]

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <ScrollParticles />

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C8A84B]/6 rounded-full blur-[160px]" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#C8A84B]/3 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-52 h-52 mx-auto mb-10 relative"
          >
            <Image
              src="/images/logo.png"
              alt="Dragon Grillz logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-bebas text-[4.5rem] md:text-[9rem] tracking-[0.08em] leading-none mb-5"
          >
            DRAGON
            <br />
            <span className="text-[#C8A84B]">GRILLZ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/40 text-xs md:text-sm tracking-[0.35em] uppercase mb-12"
          >
            L'art du sur-mesure &nbsp;·&nbsp; Made in France
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A84B] text-black font-semibold px-9 py-3.5 hover:bg-[#E8C96B] transition-colors text-xs tracking-[0.2em] uppercase"
            >
              Commander <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 font-semibold px-9 py-3.5 hover:border-[#C8A84B]/60 hover:text-[#C8A84B] transition-colors text-xs tracking-[0.2em] uppercase"
            >
              En savoir plus
            </button>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 origin-top"
        >
          <div className="w-px h-14 bg-gradient-to-b from-[#C8A84B]/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── About ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[#C8A84B] text-[10px] tracking-[0.5em] uppercase font-medium mb-4 block">
              À propos
            </span>
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wider mb-6">
              UN SAVOIR-FAIRE
              <br />
              ARTISANAL FRANÇAIS
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
              Chaque Dragon Grillz est façonné à la main en France. Pas de pierres précieuses, pas
              de prix exorbitants — juste un artisanat soigné pour un style qui vous ressemble
              vraiment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-[#0C0C0C] border border-white/5 p-8 hover:border-[#C8A84B]/20 transition-colors"
              >
                <div className="text-[#C8A84B] mb-5">{feat.icon}</div>
                <h3 className="text-white font-semibold mb-2">{feat.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="py-28 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-[#C8A84B] text-[10px] tracking-[0.5em] uppercase font-medium mb-4 block">
              Portfolio
            </span>
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wider">NOS CRÉATIONS</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
            {galleryPreviews.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 border border-[#C8A84B]/30 text-[#C8A84B] px-8 py-3 hover:bg-[#C8A84B] hover:text-black transition-all text-xs tracking-[0.2em] uppercase font-medium"
            >
              Voir toutes les réalisations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <span className="text-[#C8A84B] text-[10px] tracking-[0.5em] uppercase font-medium mb-4 block">
              Processus
            </span>
            <h2 className="font-bebas text-4xl md:text-6xl tracking-wider">COMMENT ÇA MARCHE ?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                n: '01',
                title: 'Kit d\'empreinte',
                desc: 'Nous vous envoyons un kit simple à utiliser chez vous pour prendre l\'empreinte de vos dents.',
              },
              {
                n: '02',
                title: 'Fabrication artisanale',
                desc: 'Nos artisans façonnent votre Grillz à la main, en France, selon vos préférences.',
              },
              {
                n: '03',
                title: 'Livraison',
                desc: 'Votre pièce unique est livrée chez vous en France ou en Europe sous 2 à 3 semaines.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 border border-[#C8A84B]/25 flex items-center justify-center mx-auto mb-6">
                  <span className="font-bebas text-2xl text-[#C8A84B] tracking-wider">{step.n}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 bg-[#080808] border-t border-white/5">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider mb-6 leading-none">
            PRÊT À PORTER
            <br />
            <span className="text-[#C8A84B]">VOTRE STYLE ?</span>
          </h2>
          <p className="text-white/40 mb-10">
            Démarre ta commande sur-mesure via le formulaire ou sur Instagram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A84B] text-black font-semibold px-10 py-4 hover:bg-[#E8C96B] transition-colors text-xs tracking-[0.2em] uppercase"
            >
              Formulaire de commande <ArrowRight size={14} />
            </Link>
            <a
              href="https://www.instagram.com/dragon_grillz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 px-10 py-4 hover:border-[#C8A84B]/60 hover:text-[#C8A84B] transition-colors text-xs tracking-[0.2em] uppercase"
            >
              <Instagram size={14} /> Instagram
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Modale En savoir plus ── */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div className="relative bg-[#0a0a0a] border border-white/8 w-full max-w-lg pointer-events-auto overflow-hidden max-h-[90vh] overflow-y-auto">
                {/* Gold top line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84B]/60 to-transparent" />

                {/* Header */}
                <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/5">
                  <div>
                    <span className="text-[#C8A84B] text-[9px] tracking-[0.5em] uppercase block mb-1">Démarche</span>
                    <h2 className="font-bebas text-3xl tracking-wider">COMMENT ÇA MARCHE ?</h2>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white/30 hover:text-white/80 transition-colors p-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Steps */}
                <div className="px-8 py-6 space-y-6">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex gap-5"
                    >
                      <div className="w-10 h-10 shrink-0 border border-[#C8A84B]/25 flex items-center justify-center">
                        <span className="font-bebas text-sm text-[#C8A84B] tracking-wider">{step.n}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                        <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact options */}
                <div className="px-8 pb-8 pt-2 border-t border-white/5 space-y-3">
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-4">Pour démarrer</p>
                  <Link
                    href="/contact"
                    onClick={() => setShowModal(false)}
                    className="flex items-center gap-3 w-full bg-[#C8A84B] text-black font-semibold px-6 py-3.5 hover:bg-[#E8C96B] transition-colors text-xs tracking-[0.2em] uppercase"
                  >
                    <FileText size={14} />
                    Remplir le formulaire du site
                  </Link>
                  <a
                    href="https://www.instagram.com/dragon_grillz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full border border-white/10 text-white/60 px-6 py-3.5 hover:border-[#C8A84B]/40 hover:text-[#C8A84B] transition-colors text-xs tracking-[0.2em] uppercase"
                  >
                    <Instagram size={14} />
                    Nous contacter sur Instagram
                  </a>
                </div>

                {/* Gold bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A84B]/20 to-transparent" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
