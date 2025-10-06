import { useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_40%),linear-gradient(180deg,rgba(13,23,42,0.65),rgba(13,23,42,0.9))] dark:bg-[radial-gradient(circle_at_top,_rgba(88,255,226,0.08),_transparent_40%),linear-gradient(180deg,rgba(4,7,15,0.9),rgba(4,7,15,0.95))]" />
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-12">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <div className="pointer-events-none fixed inset-y-0 left-1/2 -z-20 h-full w-[60rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(88,255,226,0.08),_transparent_60%)] blur-3xl" />
    </div>
  )
}

export default App
