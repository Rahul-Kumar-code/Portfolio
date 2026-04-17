import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3001)

// ✅ Secure CORS (use your frontend URL from env)
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

app.use(express.json({ limit: '10kb' }))

// ✅ Helpers
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

// ✅ Mailer setup
const getMailer = () => {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const portValue = Number(process.env.SMTP_PORT || 587)
  const secure = process.env.SMTP_SECURE === 'true'

  if (!host || !user || !pass) {
    console.error("SMTP not configured properly")
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

// ✅ Health check route
app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

// ✅ Contact API
app.post('/api/contact', async (req, res) => {
  const name = String(req.body?.name || '').trim()
  const email = String(req.body?.email || '').trim()
  const message = String(req.body?.message || req.body?.project || '').trim()

  if (!name || !email || !message) {
    return res.status(400).json({
      message: 'Name, email, and message are required.',
    })
  }

  if (!isEmail(email)) {
    return res.status(400).json({
      message: 'Please provide a valid email address.',
    })
  }

  if (message.length < 10) {
    return res.status(400).json({
      message: 'Please add more details.',
    })
  }

  const mailer = getMailer()

  if (!mailer) {
    return res.status(503).json({
      message: 'Email service not configured.',
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
          <h2>Portfolio inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <div style="margin-top: 20px; padding: 16px; border-left: 4px solid #58ffe2; background: #f8fafc;">
            ${escapeHtml(message).replace(/\n/g, '<br />')}
          </div>
        </div>
      `,
    })

    return res.status(201).json({
      message: 'Message sent successfully.',
      messageId: result.messageId,
    })
  } catch (error) {
    console.error('Mail error:', error)
    return res.status(500).json({
      message: 'Failed to send message. Try again later.',
    })
  }
})

// ✅ Start server (Render compatible)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

