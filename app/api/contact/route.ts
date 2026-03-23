import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, type, description } = body

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
              <td style="padding: 12px 0; color: #888;">Type de Grillz</td>
              <td style="padding: 12px 0; color: #fff;">${type}</td>
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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
