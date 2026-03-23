'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export default function ScrollParticles() {
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 420])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 260])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 580])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 350])
  const y6 = useTransform(scrollYProgress, [0, 1], [0, 480])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Côté gauche ── */}

      {/* Petit orbe brillant */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[3.5%] top-[8vh] w-1.5 h-1.5 rounded-full bg-[#C8A84B] opacity-55"
      />

      {/* Losange */}
      <motion.div
        style={{ y: y3 }}
        className="absolute left-[6.5%] top-[22vh] w-2.5 h-2.5 rotate-45 bg-[#C8A84B] opacity-35"
      />

      {/* Grosse lueur douce */}
      <motion.div
        style={{ y: y2 }}
        className="absolute left-[1%] top-[34vh] w-16 h-16 rounded-full bg-[#C8A84B] opacity-[0.04] blur-2xl"
      />

      {/* Point minuscule */}
      <motion.div
        style={{ y: y5 }}
        className="absolute left-[8%] top-[50vh] w-1 h-1 rounded-full bg-[#C8A84B] opacity-50"
      />

      {/* Losange glow */}
      <motion.div
        style={{ y: y4 }}
        className="absolute left-[4%] top-[65vh] w-3.5 h-3.5 rotate-45 bg-[#C8A84B]/25 blur-[3px]"
      />

      {/* Orbe moyen */}
      <motion.div
        style={{ y: y6 }}
        className="absolute left-[5.5%] top-[80vh] w-8 h-8 rounded-full bg-[#C8A84B] opacity-[0.05] blur-xl"
      />

      {/* Point bas */}
      <motion.div
        style={{ y: y3 }}
        className="absolute left-[2.5%] top-[88vh] w-1.5 h-1.5 rounded-full bg-[#C8A84B] opacity-30"
      />

      {/* ── Côté droit ── */}

      {/* Losange haut */}
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[4%] top-[12vh] w-2 h-2 rotate-45 bg-[#C8A84B] opacity-45"
      />

      {/* Grosse lueur douce */}
      <motion.div
        style={{ y: y4 }}
        className="absolute right-[1%] top-[24vh] w-20 h-20 rounded-full bg-[#C8A84B] opacity-[0.03] blur-3xl"
      />

      {/* Petit point */}
      <motion.div
        style={{ y: y1 }}
        className="absolute right-[7%] top-[40vh] w-1.5 h-1.5 rounded-full bg-[#C8A84B] opacity-50"
      />

      {/* Losange glow */}
      <motion.div
        style={{ y: y5 }}
        className="absolute right-[5%] top-[55vh] w-3 h-3 rotate-45 bg-[#C8A84B]/20 blur-[3px]"
      />

      {/* Orbe moyen */}
      <motion.div
        style={{ y: y3 }}
        className="absolute right-[2%] top-[68vh] w-12 h-12 rounded-full bg-[#C8A84B] opacity-[0.04] blur-2xl"
      />

      {/* Minuscule point */}
      <motion.div
        style={{ y: y6 }}
        className="absolute right-[8.5%] top-[78vh] w-1 h-1 rounded-full bg-[#C8A84B] opacity-40"
      />

      {/* Losange bas */}
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[3.5%] top-[90vh] w-2 h-2 rotate-45 bg-[#C8A84B] opacity-30"
      />
    </div>
  )
}
