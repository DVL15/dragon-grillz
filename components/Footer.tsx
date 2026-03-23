import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bebas text-2xl tracking-[0.25em] text-[#C8A84B] mb-3">
              DRAGON GRILLZ
            </h3>
            <p className="text-white/35 text-sm leading-relaxed">
              Grillz sur-mesure, fabriqués en France.
              <br />
              Chaque pièce est unique.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/20 mb-5">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/commander', label: 'Commander' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/35 hover:text-[#C8A84B] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/20 mb-5">Suivez-nous</h4>
            <a
              href="https://www.instagram.com/dragon_grillz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-white/35 hover:text-[#C8A84B] transition-colors group"
            >
              <Instagram size={18} />
              @dragon_grillz
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/15 text-xs">
            © {new Date().getFullYear()} Dragon Grillz. Tous droits réservés.
          </p>
          <p className="text-white/15 text-xs tracking-wider">🇫🇷 Made in France</p>
        </div>
      </div>
    </footer>
  )
}
