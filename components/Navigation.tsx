'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Instagram } from 'lucide-react'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/commander', label: 'Commander' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-bebas text-xl tracking-[0.25em] text-white hover:text-[#C8A84B] transition-colors"
          >
            DRAGON GRILLZ
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-[#C8A84B] ${
                  pathname === link.href ? 'text-[#C8A84B]' : 'text-white/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/dragon_grillz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#C8A84B] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#080808] border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-[0.2em] uppercase transition-colors hover:text-[#C8A84B] ${
                  pathname === link.href ? 'text-[#C8A84B]' : 'text-white/60'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/dragon_grillz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-[#C8A84B] transition-colors"
            >
              <Instagram size={16} />
              @dragon_grillz
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
