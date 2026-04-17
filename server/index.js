import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3001)

app.use(cors())
app.use(express.json({ limit: '10kb' }))

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const getMailer = () => {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const portValue = Number(process.env.SMTP_PORT || 587)
  const secure = process.env.SMTP_SECURE === 'true'

  if (!host || !user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port: portValue,
    secure,
    auth: {
      user,
      pass,
    },
  })
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true })
})

app.post('/api/contact', async (request, response) => {
  const name = String(request.body?.name || '').trim()
  const email = String(request.body?.email || '').trim()
  const message = String(request.body?.message || request.body?.project || '').trim()

  if (!name || !email || !message) {
    return response.status(400).json({
      message: 'Name, email, and message are required.',
    })
  }

  if (!isEmail(email)) {
    return response.status(400).json({
      message: 'Please provide a valid email address.',
    })
  }

  if (message.length < 10) {
    return response.status(400).json({
      message: 'Please add a little more detail to your project vision.',
    })
  }

  const mailer = getMailer()

  if (!mailer) {
    return response.status(503).json({
      message:
        'Email service is not configured yet. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env.',
    })
  }

  const recipient = process.env.CONTACT_TO || process.env.SMTP_USER
  const sender = process.env.CONTACT_FROM || process.env.SMTP_USER

  try {
    const result = await mailer.sendMail({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 12px;">Portfolio inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <div style="margin-top: 20px; padding: 16px; border-left: 4px solid #58ffe2; background: #f8fafc;">
            ${escapeHtml(message).replace(/\n/g, '<br />')}
          </div>
        </div>
      `,
    })

    return response.status(201).json({
      message: 'Message sent successfully. I will reply as soon as possible.',
      messageId: result.messageId,
    })
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return response.status(500).json({
      message: 'Unable to send your message right now. Please try again later.',
    })
  }
})

app.listen(port, () => {
  console.log(`Email API listening on http://localhost:${port}`)
})