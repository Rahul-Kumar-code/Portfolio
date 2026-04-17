import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = window.localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.body
    const isDark = theme === 'dark'

    root.classList.toggle('dark-theme', isDark)
    root.classList.toggle('light-theme', !isDark)
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 app-shell" />
      <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <main className="mx-auto flex max-w-6xl flex-col gap-12">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <div className="pointer-events-none fixed inset-y-0 left-1/2 -z-20 h-full w-[60rem] -translate-x-1/2 app-ambient blur-3xl" />
    </div>
  )
}

export default App
