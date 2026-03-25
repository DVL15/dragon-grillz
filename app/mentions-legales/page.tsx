import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Dragon Grillz',
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 px-6">
      <div className="max-w-2xl mx-auto">

        <div className="mb-12">
          <span className="text-[#C8A84B] text-[10px] tracking-[0.5em] uppercase font-medium mb-4 block">
            Légal
          </span>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider mb-4">
            MENTIONS LÉGALES
          </h1>
          <div className="h-px bg-gradient-to-r from-[#C8A84B]/40 to-transparent mt-6" />
        </div>

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3 tracking-wide">Éditeur du site</h2>
            <p>Le site Dragon Grillz est édité par :</p>
            <ul className="mt-3 space-y-1 pl-4 border-l border-white/10">
              <li><span className="text-white/40">Nom :</span> <span className="text-white/70">Antoine Do van lanh</span></li>
              <li><span className="text-white/40">Ville :</span> <span className="text-white/70">Paris, France</span></li>
              <li><span className="text-white/40">Email :</span> <a href="mailto:contact.dvldesign@gmail.com" className="text-[#C8A84B] hover:underline">contact.dvldesign@gmail.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3 tracking-wide">Hébergement</h2>
            <ul className="space-y-1 pl-4 border-l border-white/10">
              <li><span className="text-white/40">Hébergeur :</span> <span className="text-white/70">Vercel Inc.</span></li>
              <li><span className="text-white/40">Adresse :</span> <span className="text-white/70">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</span></li>
              <li><span className="text-white/40">Site :</span> <span className="text-white/70">vercel.com</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3 tracking-wide">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, visuels) est la propriété exclusive de Dragon Grillz.
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3 tracking-wide">Données personnelles</h2>
            <p>
              Les informations collectées via le formulaire de contact (nom, email, téléphone, adresse) sont utilisées
              uniquement pour traiter les demandes de devis. Elles ne sont ni vendues, ni transmises à des tiers.
              Conformément au RGPD, vous pouvez demander la suppression de vos données en écrivant à{' '}
              <a href="mailto:contact.dvldesign@gmail.com" className="text-[#C8A84B] hover:underline">
                contact.dvldesign@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3 tracking-wide">Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies de traçage ou publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3 tracking-wide">Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, contactez-nous à{' '}
              <a href="mailto:contact.dvldesign@gmail.com" className="text-[#C8A84B] hover:underline">
                contact.dvldesign@gmail.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
