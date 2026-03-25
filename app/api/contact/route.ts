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

    // Email de confirmation au client (try séparé pour ne pas bloquer l'email admin)
    try {
      await resend.emails.send({
        from: 'Dragon Grillz <onboarding@resend.dev>',
        to: email,
        replyTo: 'contact.dvldesign@gmail.com',
        subject: `Bonjour ${name}, ta demande Dragon Grillz est bien reçue`,
        text: `Bonjour ${name},\n\nOn a bien reçu ta demande de devis pour tes grillz sur-mesure.\nOn te répond sous 24h avec un devis personnalisé.\n\nSi tu as une question : @dragon_grillz sur Instagram ou contact.dvldesign@gmail.com\n\nDragon Grillz`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 580px; margin: 0 auto; background: #ffffff; color: #111;">
            <div style="background: #111; padding: 28px 32px; text-align: center;">
              <p style="color: #C8A84B; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; margin: 0 0 6px;">Dragon Grillz</p>
              <p style="color: #fff; font-size: 13px; margin: 0;">Grillz sur-mesure · Made in France</p>
            </div>

            <div style="padding: 36px 32px;">
              <h2 style="color: #111; font-size: 20px; margin: 0 0 16px;">Bonjour ${name},</h2>
              <p style="color: #444; font-size: 14px; line-height: 1.7; margin: 0 0 24px;">
                Ta demande de devis a bien été reçue. On analyse ta configuration et on te répond sous <strong style="color: #111;">24h</strong> avec un devis personnalisé.
              </p>

              ${Array.isArray(teeth) && teeth.length > 0 ? `
              <div style="background: #f8f8f8; border-left: 3px solid #C8A84B; padding: 20px 24px; margin-bottom: 24px;">
                <p style="color: #888; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 14px;">Récapitulatif</p>
                <table style="width: 100%; border-collapse: collapse;">
                  ${teeth.map((t: string) => `
                    <tr style="border-bottom: 1px solid #eee;">
                      <td style="padding: 7px 0; color: #888; font-size: 12px; width: 160px;">${TOOTH_LABELS[t] || t}</td>
                      <td style="padding: 7px 0; color: #111; font-size: 13px;">
                        ${(toothDesigns && toothDesigns[t]) ? toothDesigns[t] : '—'}
                      </td>
                    </tr>
                  `).join('')}
                </table>
              </div>
              ` : ''}

              <p style="color: #666; font-size: 13px; line-height: 1.6; margin: 0 0 8px;">
                Une question ? Réponds directement à cet email ou contacte-nous sur Instagram :
                <a href="https://www.instagram.com/dragon_grillz/" style="color: #C8A84B; text-decoration: none;">@dragon_grillz</a>
              </p>
            </div>

            <div style="background: #f4f4f4; padding: 16px 32px; text-align: center;">
              <p style="color: #aaa; font-size: 11px; margin: 0;">Dragon Grillz · Grillz sur-mesure · Made in France 🇫🇷</p>
            </div>
          </div>
        `,
      })
    } catch (confirmError) {
      console.error('Confirmation email error:', confirmError)
      // On ne bloque pas si la confirmation échoue
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
