import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
  className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-xs uppercase tracking-[0.3em] text-slate-300 backdrop-blur-xl sm:flex-row"
      >
        <span>© {new Date().getFullYear()} Rahul Kumar — Building reliable experiences with heart.</span>
        <a
          href="#hero"
          className="group inline-flex items-center gap-3 text-accent transition"
        >
          Back to top
          <span className="inline-block h-[1px] w-12 bg-accent transition group-hover:w-16" />
        </a>
      </motion.div>
    </footer>
  )
}
