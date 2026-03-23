'use client'

import { motion } from 'framer-motion'
import { Instagram, Send, Fingerprint, Truck } from 'lucide-react'

const steps = [
  {
    icon: <Send size={26} />,
    number: '01',
    title: 'Contactez-nous',
    description:
      'Envoyez-nous un message sur Instagram en décrivant votre projet : style souhaité, couleur, type de grillz (haut, bas, complet).',
    badge: 'Réponse sous 24h',
  },
  {
    icon: <Fingerprint size={26} />,
    number: '02',
    title: "Kit d'empreinte",
    description:
      "Nous vous envoyons un kit d'empreinte dentaire simple à utiliser chez vous. Suivez les instructions incluses, puis renvoyez-le.",
    badge: 'Kit envoyé sous 48h',
  },
  {
    icon: <Instagram size={26} />,
    number: '03',
    title: 'Fabrication',
    description:
      "Nos artisans fabriquent votre Grillz à la main, en France, à partir de votre empreinte. Validation photo avant envoi.",
    badge: '2 à 3 semaines',
  },
  {
    icon: <Truck size={26} />,
    number: '04',
    title: 'Livraison',
    description:
      'Votre Grillz sur-mesure est expédié directement chez vous, en France ou en Europe, dans un emballage soigné.',
    badge: 'Livraison sécurisée',
  },
]

const faq = [
  {
    q: 'Les Grillz sont-ils sans danger ?',
    a: "Oui. Nos Grillz sont fabriqués avec des matériaux de qualité, sans produits nocifs. Grâce à l'empreinte sur-mesure, ils s'adaptent parfaitement à vos dents.",
  },
  {
    q: 'Quels matériaux utilisez-vous ?',
    a: "Nous travaillons avec de l'argent, du laiton plaqué et des alliages de qualité. Pas de pierres précieuses incrustées — juste un travail de forme soigné.",
  },
  {
    q: 'Combien coûte un Grillz ?',
    a: "Nos prix varient selon le type et la complexité du design. Contactez-nous sur Instagram pour obtenir un devis personnalisé.",
  },
  {
    q: 'Livrez-vous en dehors de la France ?',
    a: "Oui, nous livrons dans toute l'Europe. Contactez-nous pour les détails.",
  },
  {
    q: 'Puis-je voir un aperçu avant fabrication ?',
    a: "Nous vous envoyons une photo de votre Grillz sur l'empreinte avant l'envoi final, pour validation.",
  },
]

export default function CommanderPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A84B] text-[10px] tracking-[0.5em] uppercase font-medium mb-4 block">
            Processus
          </span>
          <h1 className="font-bebas text-5xl md:text-8xl tracking-wider mb-6">
            COMMENT COMMANDER ?
          </h1>
          <p className="text-white/40 text-base max-w-lg mx-auto leading-relaxed">
            Un processus simple en 4 étapes pour obtenir votre Grillz sur-mesure, unique et fabriqué
            en France.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-4 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex gap-6 md:gap-8 items-start bg-[#0C0C0C] border border-white/5 p-7 md:p-9 hover:border-[#C8A84B]/15 transition-colors"
            >
              {/* Number box */}
              <div className="flex-shrink-0 w-14 h-14 border border-[#C8A84B]/25 flex items-center justify-center">
                <span className="font-bebas text-xl text-[#C8A84B] tracking-wider">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                  <span className="text-[#C8A84B] text-[10px] tracking-[0.2em] uppercase border border-[#C8A84B]/25 px-3 py-1 self-start whitespace-nowrap">
                    {step.badge}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0C0C0C] border border-white/5 p-8 md:p-12 mb-20"
        >
          <h2 className="font-bebas text-3xl tracking-wider text-[#C8A84B] mb-10">
            QUESTIONS FRÉQUENTES
          </h2>
          <div className="space-y-7">
            {faq.map((item, i) => (
              <div key={i} className="border-b border-white/5 pb-7 last:border-0 last:pb-0">
                <h4 className="text-white font-medium mb-2 text-sm">{item.q}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center border border-[#C8A84B]/15 bg-[#C8A84B]/4 p-12"
        >
          <h2 className="font-bebas text-4xl md:text-5xl tracking-wider mb-4">
            PRÊT À COMMENCER ?
          </h2>
          <p className="text-white/40 mb-9 text-sm">
            Contactez-nous sur Instagram pour démarrer votre projet.
          </p>
          <a
            href="https://www.instagram.com/dragon_grillz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C8A84B] text-black font-semibold px-10 py-4 hover:bg-[#E8C96B] transition-colors text-xs tracking-[0.2em] uppercase"
          >
            <Instagram size={16} />
            Nous contacter sur Instagram
          </a>
        </motion.div>
      </div>
    </div>
  )
}
