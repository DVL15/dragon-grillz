'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

const Diamond = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size * 1.5} viewBox="0 0 14 21" fill="none">
    <path d="M 7,0 L 14,6 L 7,21 L 0,6 Z" fill="#C8A84B" />
    <line x1="0" y1="6" x2="14" y2="6" stroke="#E8C96B" strokeWidth="0.6" opacity="0.5" />
    <line x1="7" y1="0" x2="0" y2="6" stroke="#fff" strokeWidth="0.4" opacity="0.25" />
    <line x1="7" y1="0" x2="14" y2="6" stroke="#fff" strokeWidth="0.4" opacity="0.25" />
  </svg>
)

const Ring = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="7.5" stroke="#C8A84B" strokeWidth="2" />
    <circle cx="10" cy="10" r="4" stroke="#C8A84B" strokeWidth="0.5" opacity="0.35" />
    <path d="M 4,7 Q 10,3 16,7" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
  </svg>
)

const Sparkle = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" fill="#C8A84B" />
    <path d="M10 4 L10.6 9.4 L16 10 L10.6 10.6 L10 16 L9.4 10.6 L4 10 L9.4 9.4 Z" fill="#fff" opacity="0.2" />
  </svg>
)

export default function ScrollParticles() {
  const { scrollYProgress } = useScroll()

  // Y : chaque bijou tombe à une vitesse différente
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 380])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 240])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 520])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 160])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 320])
  const y6 = useTransform(scrollYProgress, [0, 1], [0, 440])

  // Opacity : disparaît progressivement en tombant
  const op1 = useTransform(scrollYProgress, [0, 0.35], [0.55, 0])
  const op2 = useTransform(scrollYProgress, [0, 0.28], [0.4, 0])
  const op3 = useTransform(scrollYProgress, [0, 0.42], [0.65, 0])
  const op4 = useTransform(scrollYProgress, [0, 0.22], [0.35, 0])
  const op5 = useTransform(scrollYProgress, [0, 0.38], [0.5, 0])
  const op6 = useTransform(scrollYProgress, [0, 0.45], [0.45, 0])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">

      {/* ── Côté gauche ── */}
      <motion.div style={{ y: y1, opacity: op1 }} className="absolute left-[3%] top-[7vh]">
        <Diamond size={12} />
      </motion.div>

      <motion.div style={{ y: y3, opacity: op3 }} className="absolute left-[7%] top-[20vh]">
        <Sparkle size={10} />
      </motion.div>

      <motion.div style={{ y: y2, opacity: op2 }} className="absolute left-[2%] top-[35vh]">
        <Ring size={18} />
      </motion.div>

      <motion.div style={{ y: y5, opacity: op5 }} className="absolute left-[8%] top-[52vh]">
        <Diamond size={8} />
      </motion.div>

      <motion.div style={{ y: y4, opacity: op4 }} className="absolute left-[4%] top-[68vh]">
        <Sparkle size={14} />
      </motion.div>

      <motion.div style={{ y: y6, opacity: op6 }} className="absolute left-[1.5%] top-[82vh]">
        <Diamond size={10} />
      </motion.div>

      {/* ── Côté droit ── */}
      <motion.div style={{ y: y2, opacity: op2 }} className="absolute right-[4%] top-[10vh]">
        <Sparkle size={11} />
      </motion.div>

      <motion.div style={{ y: y4, opacity: op4 }} className="absolute right-[2%] top-[25vh]">
        <Diamond size={14} />
      </motion.div>

      <motion.div style={{ y: y1, opacity: op1 }} className="absolute right-[7%] top-[40vh]">
        <Ring size={16} />
      </motion.div>

      <motion.div style={{ y: y5, opacity: op5 }} className="absolute right-[3%] top-[57vh]">
        <Sparkle size={9} />
      </motion.div>

      <motion.div style={{ y: y3, opacity: op3 }} className="absolute right-[6%] top-[72vh]">
        <Diamond size={11} />
      </motion.div>

      <motion.div style={{ y: y6, opacity: op6 }} className="absolute right-[1.5%] top-[86vh]">
        <Ring size={14} />
      </motion.div>

    </div>
  )
}
