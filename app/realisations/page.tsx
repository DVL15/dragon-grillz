'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const works = [
  { src: '/images/grillz-1.jpg', alt: 'Grillz black neon', label: 'Black Edition' },
  { src: '/images/grillz-2.jpg', alt: 'Grillz silver full', label: 'Silver Full' },
  { src: '/images/grillz-3.jpg', alt: 'Grillz open neon', label: 'Open Set' },
  { src: '/images/grillz-4.jpg', alt: 'Grillz bicolor', label: 'Bicolor Gold & Silver' },
  { src: '/images/grillz-5.jpg', alt: 'Grillz cyberpunk', label: 'Cyberpunk Edition' },
]

export default function RealisationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A84B] text-[10px] tracking-[0.5em] uppercase font-medium mb-4 block">
            Portfolio
          </span>
          <h1 className="font-bebas text-5xl md:text-8xl tracking-wider mb-5">NOS RÉALISATIONS</h1>
          <p className="text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            Chaque pièce est unique, fabriquée sur-mesure à partir de votre empreinte dentaire.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`relative overflow-hidden group cursor-pointer ${
                i === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-square relative">
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-white font-medium text-sm tracking-wider">{work.label}</span>
                  <div className="mt-1 w-8 h-px bg-[#C8A84B]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/35 mb-6 text-sm">Vous voulez votre propre pièce sur-mesure ?</p>
          <Link
            href="/commander"
            className="inline-flex items-center gap-2 bg-[#C8A84B] text-black font-semibold px-9 py-3.5 hover:bg-[#E8C96B] transition-colors text-xs tracking-[0.2em] uppercase"
          >
            Commander le vôtre <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
