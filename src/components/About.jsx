import { motion } from 'framer-motion'
import { skillFocus, techStack } from '../data/skills'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

const education = [
  {
    title: 'B.Tech (IT)',
    place: 'USICT, GGSIPU',
    period: '2023 — Present',
    detail: 'Learning full-stack development, scalable APIs, and product engineering.',
  },
  {
    title: 'Class XII (Science)',
    place: 'RPVV Paschim Vihar',
    period: '2021 — 2022',
    detail: 'Scored 95.8% with a focus on mathematics and computer science.',
  },
  {
    title: 'Class X',
    place: 'Govt. Co-Ed Secondary School, Ranhaula',
    period: '2019 — 2020',
    detail: 'Achieved 86.2% and sparked a love for solving real problems.',
  },
]

const experience = [
  {
    role: 'Web Development Team Member',
    org: 'USLLS, Delhi',
    period: 'Apr 2025 — Present',
    bullets: [
      'Maintain the ADR Cell blog with responsive design and optimized performance.',
      'Manage articles, events, and content to keep the platform engaging.',
    ],
  },
]

const achievements = [
  'Ranked 1st in Science stream at RPVV, Paschim Vihar.',
  'Qualified JEE Mains with 95.96 percentile.',
  'Certificate of Participation — Vihaan 8.0 Hackathon.',
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent/80 backdrop-blur-xl">
            About Me
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Hi, I&apos;m Rahul Kumar — a B.Tech IT student and full-stack developer passionate about building MERN, AI, and cloud-ready products that combine empathy, performance, and clean engineering.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg md:mx-0">
            I transform problem statements into production-ready experiences—balancing fast iteration, clean engineering, and learner-first strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300 md:justify-start">
            <motion.a
              href="mailto:rahul.4316401523@std.ggsipu.ac.in"
              whileHover={{ scale: 1.03, y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              rahul.4316401523@std.ggsipu.ac.in
            </motion.a>
            <motion.a
              href="tel:+918178682176"
              whileHover={{ scale: 1.03, y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-[#465def]" />
              +91 81786 82176
            </motion.a>
            <motion.span
              whileHover={{ scale: 1.03, y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              New Delhi, India
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-300">
              Skills & Focus
            </h3>
            <span className="hidden text-xs uppercase tracking-[0.35em] text-accent/80 md:block">
              Hover to explore
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillFocus.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02, boxShadow: '0 25px 60px -35px rgba(88,255,226,0.55)' }}
                className="glass-panel h-full rounded-3xl border border-white/10 bg-white/10 p-6 text-left"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent/80">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span className='text-sm'>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-300">
            Tech Stack
          </h3>
          <div className="glass-panel flex flex-wrap gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-8"
        >
          <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-300">
            Journey Highlights
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-panel space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent/80">Education</p>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-col gap-1 text-slate-300">
                      <span className="text-base font-semibold text-white">{item.title}</span>
                      <span className="text-sm uppercase tracking-[0.3em] text-accent/70">{item.place}</span>
                      <span className="text-xs text-slate-400">{item.period}</span>
                    </div>
                    <p className="mt-2 text-md text-slate-300">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="glass-panel space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent/80">Experience</p>
                {experience.map((item) => (
                  <div key={item.role} className="space-y-2">
                    <div className="flex flex-col gap-1 text-slate-300">
                      <span className="text-base font-semibold text-white">{item.role}</span>
                      <span className="text-sm uppercase tracking-[0.3em] text-accent/70">{item.org}</span>
                      <span className="text-xs text-slate-400">{item.period}</span>
                    </div>
                    <ul className="space-y-1 text-md text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-accent to-[#465def]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="glass-panel space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent/80">Achievements</p>
                <ul className="space-y-1 text-md text-slate-300">
                  {achievements.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
