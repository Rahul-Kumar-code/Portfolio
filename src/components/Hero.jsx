import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const phrases = [
  'Building with MERN + AI',
  'Engineering secure APIs',
  'Designing for speed & empathy',
]

const profileImage = '/profilePic.png'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-8 md:px-12 lg:py-12 mt-16 md:mt-0"
    >
      <div className="pointer-events-none absolute -top-32 left-6 h-64 w-64 rounded-full bg-gradient-to-br from-[#465def]/35 via-transparent to-accent/40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-20 right-10 h-48 w-48 rounded-full bg-gradient-to-br from-accent/30 via-[#465def]/30 to-transparent blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(70,93,239,0.35),_rgba(88,255,226,0.18),_transparent_70%)] blur-3xl animate-float-reverse" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(120,140,255,0.18),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(88,255,226,0.25),_transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="glass-panel relative w-full max-w-6xl rounded-[2.75rem] border border-white/10 bg-slate-900/50 p-8 backdrop-blur-3xl shadow-[0_45px_120px_-55px_rgba(12,20,38,0.9)] sm:p-12"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-100"
            >
              • FULL-STACK DEVELOPER
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-3xl font-semibold tracking-tight text-white sm:text-5xl md:text-4xl"
            >
              Crafting intelligent web experiences with MERN, AI, and secure APIs — built for speed, empathy, and scale.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 inline-flex items-center justify-center gap-2 font-mono text-sm text-[#465def] sm:text-base lg:justify-start"
            >
              <span className="rounded-full bg-slate-950/70 px-4 py-2 text-[#465def] ring-1 ring-[#465def]/25 shadow-inner">
                <Typewriter
                  words={phrases}
                  loop
                  cursor={false}
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1800}
                />
              </span>
              <span className="animate-cursor-blink text-lg text-[#465def]">▍</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-accent via-[#5e6fdc] to-accent bg-[length:200%_auto] px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-right hover:brightness-110"
              >
                <span className="font-bold tracking-wide">View Projects</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition group-hover:rotate-90">→</span>
                <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition group-hover:opacity-100" />
              </a>
              <a
                href="https://drive.google.com/file/d/1M1qJWEHmFDZ18WaXrBEeX9SNUWfdjdNe/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-white/10 px-8 py-3 text-sm font-semibold text-accent backdrop-blur-lg transition hover:border-accent hover:brightness-110 hover:shadow-lg"
              >
                <span>Download Resume</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-xs transition group-hover:translate-x-1 group-hover:bg-accent group-hover:text-white">
                  {`//`}
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 36 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative mx-auto flex w-full justify-center"
          >
            <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                className="absolute inset-0 -z-10 rounded-full border border-accent/40 opacity-60 blur-[1px]"
              />
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                className="absolute inset-6 -z-20 rounded-full bg-[radial-gradient(circle_at_center,_rgba(88,255,226,0.28),_rgba(15,23,42,0.35),_transparent_75%)] blur-2xl"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
                className="relative flex h-full w-full items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                  className="absolute inset-[-16%] -z-30 rounded-full bg-gradient-to-br from-accent via-[#465def] to-transparent opacity-35 blur-3xl"
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
                  className="absolute inset-[-32%] -z-40 rounded-full bg-gradient-to-br from-[#465def] via-transparent to-accent opacity-25 blur-[120px]"
                />
                <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-slate-950/70 shadow-xl ring-4 ring-accent/50 ring-offset-2 ring-offset-slate-950 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/35 via-transparent to-[#465def]/45 opacity-70" />
                  <img
                    src={profileImage}
                    alt="Rahul Kumar"
                    loading="lazy"
                    className="relative z-10 h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
