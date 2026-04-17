import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode } from 'react-icons/si'
import { LuGithub, LuLinkedin, LuMail, LuPhone } from 'react-icons/lu'

const socials = [
  {
    icon: LuLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rahul-kumar-84273134a/',
  },
  {
    icon: LuGithub,
    label: 'GitHub',
    href: 'https://github.com/Rahul-Kumar-code',
  },
  {
    icon: SiLeetcode,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Rahul_Kumar_codes/',
  },
]

const contactMethods = [
  {
    icon: LuMail,
    label: 'Email',
    value: 'rahul.4316401523@std.ggsipu.ac.in',
    href: 'mailto:rahul.4316401523@std.ggsipu.ac.in',
  },
  {
    icon: LuPhone,
    label: 'Phone',
    value: '+91 81786 82176',
    href: 'tel:+918178682176',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitState, setSubmitState] = useState({
    type: 'idle',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitState({ type: 'loading', message: 'Sending your message...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to send your message right now.')
      }

      setFormData({
        name: '',
        email: '',
        message: '',
      })
      setSubmitState({
        type: 'success',
        message: payload.message || 'Message sent. I will get back to you soon.',
      })
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: error.message,
      })
    }
  }

  const isLoading = submitState.type === 'loading'

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-10">
      <div className="pointer-events-none absolute -top-32 right-8 h-64 w-64 rounded-full bg-gradient-to-br from-[#465def]/40 via-transparent to-accent/35 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-10 left-6 h-52 w-52 rounded-full bg-gradient-to-tr from-accent/30 via-[#465def]/25 to-transparent blur-3xl animate-float-reverse" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
        <div className="flex-1 space-y-6">
          <h2 className="section-title">Let&apos;s Build What&apos;s Next</h2>
          <p className="section-subtitle">
            I&apos;m collaborating on MERN, AI, and cloud-ready products. Reach out for internships, freelance web builds, or hackathon teams.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const isEmail = method.label === 'Email'
              const isPhone = method.label === 'Phone'
              const usesGradientIcon = isEmail || isPhone
              return (
              <motion.a
                  key={method.label}
                  href={method.href}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-panel flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 text-left text-sm text-slate-200 transition sm:p-5"
                >
                  <span
                    className={`flex flex-none items-center justify-center rounded-full ${
                      usesGradientIcon
                        ? 'h-12 w-12 bg-gradient-to-br from-accent to-[#465def] p-[3px] text-white shadow-[0_12px_35px_-20px_rgba(70,93,239,0.8)]'
                        : 'h-10 w-10 bg-accent/20 text-accent'
                    }`}
                  >
                    <span
                      className={`flex h-full w-full items-center justify-center rounded-full ${
                        usesGradientIcon ? 'bg-slate-950/80' : ''
                      }`}
                    >
                      <method.icon className="text-lg" />
                    </span>
                  </span>
                  <span className="flex min-w-0 flex-col gap-1 overflow-hidden">
                    <span className="block text-xs uppercase tracking-[0.3em] text-accent/80">
                      {method.label}
                    </span>
                    <span
                      className={`text-sm text-slate-100 ${
                        isEmail ? 'truncate md:text-base' : 'md:text-base'
                      }`}
                      title={isEmail ? method.value : undefined}
                    >
                      {method.value}
                    </span>
                  </span>
                </motion.a>
              )
            })}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.05 }}
                className="group glass-panel flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-medium text-slate-200 transition"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-white transition group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-[#465def] group-hover:text-slate-950">
                  <social.icon className="text-lg" />
                </span>
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-panel flex-1 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(88,255,226,0.4)]"
        >
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@team.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="form-label">
                Project Vision
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Share the problem, timeline, and tech stack you have in mind..."
                value={formData.message}
                onChange={handleChange}
                className="form-input resize-none"
              />
            </div>
            <motion.p
              aria-live="polite"
              initial={false}
              animate={{ opacity: submitState.message ? 1 : 0, y: submitState.message ? 0 : 6 }}
              className={`text-sm ${submitState.type === 'error' ? 'text-rose-300' : 'text-emerald-300'}`}
            >
              {submitState.message}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent via-[#465def] to-accent bg-[length:200%_auto] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-right disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? 'Sending...' : 'Initiate Contact'}
              <span aria-hidden>⤴</span>
            </motion.button>
          </div>
        </motion.form>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/3 top-12 h-2 w-24 rounded-full bg-gradient-to-r from-accent to-transparent blur-sm"
        />
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute right-10 bottom-16 h-2 w-20 rounded-full bg-gradient-to-r from-[#465def] to-transparent blur-sm"
        />
      </div>
    </section>
  )
}
