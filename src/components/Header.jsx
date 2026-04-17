import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LuMenu, LuMoonStar, LuSunMedium, LuX } from 'react-icons/lu'

const links = [
  { label: 'Overview', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#contact' },
]

export function Header({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen)
    return () => document.body.classList.remove('overflow-hidden')
  }, [isMenuOpen])

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-40 flex justify-center px-4 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div
        className="glass-panel relative flex w-full max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-slate-900/70 px-6 py-3 shadow-[0_18px_80px_-35px_rgba(15,23,42,0.65)] backdrop-blur-xl"
      >
        <a
          href="#hero"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-100"
        >
          RAHUL<span className="text-accent">·</span>KUMAR
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex items-center gap-2 transition"
            >
              <span className="group inline-flex items-center gap-2">
                <span className="transition-colors group-hover:text-accent">{link.label}</span>
                <span className="h-[1px] w-8 origin-right scale-x-0 bg-accent/70 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 transition hover:border-accent/60 hover:text-accent"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'light'}
          >
            {theme === 'dark' ? <LuSunMedium className="text-base" /> : <LuMoonStar className="text-base" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a
            href="https://drive.google.com/file/d/1M1qJWEHmFDZ18WaXrBEeX9SNUWfdjdNe/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent transition hover:brightness-95 hover:shadow-md md:flex"
          >
            <span>Resume</span>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-lite/15 bg-slate-900/80 text-slate-200 transition hover:border-accent/60 hover:text-accent md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 20 }}
                transition={{ duration: 0.2 }}
                className="text-xl"
              >
                {isMenuOpen ? <LuX /> : <LuMenu />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 uppercase tracking-[0.3em] text-slate-200 transition hover:border-accent/50 hover:text-accent"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  aria-pressed={theme === 'light'}
                >
                  {theme === 'dark' ? <LuSunMedium className="text-base" /> : <LuMoonStar className="text-base" />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-md md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 z-50 text-white cursor-pointer hover:scale-105 md:hidden"
                aria-label="Close navigation menu"
              >
                <LuX className="w-7 h-7" />
              </button>
              <motion.nav
                key="mobile-nav"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-40 mx-0 flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/95 p-6 text-sm font-semibold text-slate-200 shadow-2xl backdrop-blur-xl md:hidden"
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 uppercase tracking-[0.3em] text-slate-200 transition hover:border-accent/50 hover:text-accent"
                  >
                    <span>{link.label}</span>
                    <span className="h-px w-12 bg-accent/60" />
                  </a>
                ))}
                <a
                  href="https://drive.google.com/file/d/1M1qJWEHmFDZ18WaXrBEeX9SNUWfdjdNe/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleNavClick}
                  className="flex items-center justify-center rounded-2xl border border-accent/40 bg-accent/15 px-4 py-3 uppercase tracking-[0.3em] text-accent transition hover:brightness-110 hover:shadow-lg"
                >
                  Resume
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
