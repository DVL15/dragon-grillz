import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, address, description, teeth, toothDesigns } = body

    const TOOTH_LABELS: Record<string, string> = {
      ul_premolar: 'Prémolaire G sup.', ul_canine: 'Canine G sup.',
      ul_lateral: 'Latérale G sup.',   ul_central: 'Centrale G sup.',
      ur_central: 'Centrale D sup.',   ur_lateral: 'Latérale D sup.',
      ur_canine: 'Canine D sup.',      ur_premolar: 'Prémolaire D sup.',
      ll_premolar: 'Prémolaire G inf.',ll_canine: 'Canine G inf.',
      ll_lateral: 'Latérale G inf.',   ll_central: 'Centrale G inf.',
      lr_central: 'Centrale D inf.',   lr_lateral: 'Latérale D inf.',
      lr_canine: 'Canine D inf.',      lr_premolar: 'Prémolaire D inf.',
    }

    if (!name || !email || !description) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Dragon Grillz <onboarding@resend.dev>',
      to: 'contact.dvldesign@gmail.com',
      subject: `Nouvelle commande - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 40px; border: 1px solid #222;">
          <h1 style="color: #C8A84B; font-size: 24px; margin-bottom: 30px; letter-spacing: 2px;">NOUVELLE COMMANDE DRAGON GRILLZ</h1>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 12px 0; color: #888; width: 160px;">Nom</td>
              <td style="padding: 12px 0; color: #fff; font-weight: bold;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 12px 0; color: #888;">Email</td>
              <td style="padding: 12px 0; color: #C8A84B;"><a href="mailto:${email}" style="color: #C8A84B;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 12px 0; color: #888;">Téléphone</td>
              <td style="padding: 12px 0; color: #fff;">${phone || 'Non renseigné'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 12px 0; color: #888;">Adresse</td>
              <td style="padding: 12px 0; color: #fff;">${address || 'Non renseignée'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 12px 0; color: #888; vertical-align: top;">Dents & designs</td>
              <td style="padding: 12px 0; color: #fff;">
                ${Array.isArray(teeth) && teeth.length > 0
                  ? `<table style="width:100%; border-collapse:collapse;">
                      ${teeth.map((t: string) => `
                        <tr style="border-bottom:1px solid #1a1a1a;">
                          <td style="padding:7px 0; color:#C8A84B; font-size:11px; width:170px; text-transform:uppercase; letter-spacing:1px;">
                            ${TOOTH_LABELS[t] || t}
                          </td>
                          <td style="padding:7px 0; color:#fff; font-size:13px;">
                            ${(toothDesigns && toothDesigns[t]) ? toothDesigns[t] : '<span style="color:#444">—</span>'}
                          </td>
                        </tr>
                      `).join('')}
                    </table>`
                  : '<span style="color:#555">Non renseigné</span>'
                }
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; vertical-align: top;">Description</td>
              <td style="padding: 12px 0; color: #fff; line-height: 1.6;">${description.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 16px; background: #111; border-left: 3px solid #C8A84B;">
            <p style="color: #888; font-size: 12px; margin: 0;">Réponds directement à cet email ou contacte le client à l'adresse ci-dessus.</p>
          </div>
        </div>
      `,
    })

    // Email de confirmation au client
    await resend.emails.send({
      from: 'Dragon Grillz <onboarding@resend.dev>',
      to: email,
      subject: 'Demande de devis reçue — Dragon Grillz',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 40px; border: 1px solid #222;">
          <div style="text-align: center; margin-bottom: 36px;">
            <p style="color: #C8A84B; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; margin: 0 0 12px;">Dragon Grillz</p>
            <h1 style="color: #fff; font-size: 22px; margin: 0; font-weight: 700;">Ta demande a bien été reçue</h1>
          </div>

          <p style="color: #aaa; font-size: 14px; line-height: 1.7; margin-bottom: 28px;">
            Bonjour <strong style="color: #fff;">${name}</strong>,<br/><br/>
            On a bien reçu ta demande de devis pour tes grillz sur-mesure.
            On analyse ta configuration et on te répond sous <strong style="color: #C8A84B;">24h</strong> avec un devis personnalisé.
          </p>

          ${Array.isArray(teeth) && teeth.length > 0 ? `
          <div style="background: #111; border: 1px solid #1e1e1e; padding: 20px; margin-bottom: 28px;">
            <p style="color: #C8A84B; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 16px;">Récapitulatif de ta commande</p>
            <table style="width: 100%; border-collapse: collapse;">
              ${teeth.map((t: string) => `
                <tr style="border-bottom: 1px solid #1a1a1a;">
                  <td style="padding: 8px 0; color: #888; font-size: 12px; width: 160px;">${TOOTH_LABELS[t] || t}</td>
                  <td style="padding: 8px 0; color: #fff; font-size: 13px;">
                    ${(toothDesigns && toothDesigns[t]) ? toothDesigns[t] : '<span style="color:#444">—</span>'}
                  </td>
                </tr>
              `).join('')}
            </table>
          </div>
          ` : ''}

          <div style="border-left: 3px solid #C8A84B; padding: 14px 18px; background: #0f0f0f; margin-bottom: 28px;">
            <p style="color: #888; font-size: 12px; margin: 0; line-height: 1.6;">
              Si tu as une question en attendant, tu peux nous contacter directement sur Instagram
              <a href="https://www.instagram.com/dragon_grillz/" style="color: #C8A84B; text-decoration: none;"> @dragon_grillz</a>.
            </p>
          </div>

          <p style="color: #555; font-size: 11px; text-align: center; margin: 0;">
            Dragon Grillz · Grillz sur-mesure · Made in France 🇫🇷
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
