import { useEffect, useRef, useState, type ReactNode } from 'react'
import bgImg from '../assets/landing_logo.png'
import cpRitmo from '../assets/cp-ritmo.png'
import brushingGif from '../asset-gif/brushing.gif'
import washingGif from '../asset-gif/washing.gif'
import eatingGif from '../asset-gif/eating.gif'
import goingHomeGif from '../asset-gif/going home.gif'
import goingSchoolGif from '../asset-gif/going to school.gif'
import goingSleepGif from '../asset-gif/going to sleep.gif'
import puttingClothesGif from '../asset-gif/putting clothes.gif'
import puttingPajamaGif from '../asset-gif/putting pajama.gif'
import circleLogo from '../assets/circle-logo.png'
import handPhone from '../assets/hand-phone.png'
import ritmoLogo from '../assets/ritmo-logo.png'

function Reveal({
  children,
  from = 'up',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  from?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [noAnim, setNoAnim] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      setNoAnim(true)
      return
    }
    // Kick off on initial load too (e.g., after refresh) if in view
    const rafId = window.requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.98 && rect.bottom > 0
      if (inView) {
        setVisible(true)
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        // Trigger as soon as a sliver enters and slightly before leaving viewport
        threshold: 0.01,
        rootMargin: '10% 0px -10% 0px',
      }
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  const hiddenMap: Record<string, string> = {
    up: 'opacity-0 translate-y-6',
    down: 'opacity-0 -translate-y-6',
    left: 'opacity-0 -translate-x-6',
    right: 'opacity-0 translate-x-6',
  }

  const shown = 'opacity-100 translate-x-0 translate-y-0'
  const base = 'will-change-transform ' + (noAnim ? 'transition-none' : 'transition-all duration-700 ease-out')
  const state = visible ? shown : hiddenMap[from]

  return (
    <div ref={ref} className={`${base} ${state} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function GifSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const hoverDirRef = useRef<number>(0) // -1 left, 0 stop, 1 right
  const rafRef = useRef<number | null>(null)
  const items = [
    brushingGif,
    washingGif,
    eatingGif,
    goingHomeGif,
    goingSchoolGif,
    goingSleepGif,
    puttingClothesGif,
    puttingPajamaGif,
  ]

  const scrollByAmount = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const amount = (card?.offsetWidth ?? 220) + 24 // width + gap
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <div className="relative mt-10" ref={containerRef}
      onMouseEnter={() => {
        // start loop
        if (rafRef.current) return
        const step = () => {
          const el = trackRef.current
          if (!el) return
          const dir = hoverDirRef.current
          if (dir !== 0) {
            const speed = 0.6 // px per ms (~600px/s)
            el.scrollLeft += dir * speed * 16 // approximate per frame
          }
          rafRef.current = window.requestAnimationFrame(step)
        }
        rafRef.current = window.requestAnimationFrame(step)
      }}
      onMouseMove={(e) => {
        const box = containerRef.current?.getBoundingClientRect()
        if (!box) return
        const x = e.clientX - box.left
        const leftZone = box.width * 0.35
        const rightZone = box.width * 0.65
        hoverDirRef.current = x < leftZone ? -1 : x > rightZone ? 1 : 0
      }}
      onMouseLeave={() => {
        hoverDirRef.current = 0
        if (rafRef.current) {
          window.cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
      }}
    >
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollByAmount(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-300 bg-white text-teal-700 shadow hover:bg-teal-50"
      >
        <span className="sr-only">Left</span>
        ‹
      </button>
      <div
        ref={trackRef}
        className="mx-12 overflow-x-auto scroll-smooth"
      >
        <div className="flex gap-6 snap-x snap-mandatory py-2">
          {items.map((src, idx) => (
            <div key={idx} className="snap-start shrink-0 w-48 h-48 rounded-2xl border-2 border-teal-300 bg-white shadow-brand p-2 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
              <img src={src} alt="routine" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollByAmount(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-300 bg-white text-teal-700 shadow hover:bg-teal-50"
      >
        <span className="sr-only">Right</span>
        ›
      </button>
    </div>
  )
}

export default function Home() {
  return (
    <>
    <section
      className="relative w-screen -mx-[calc(50vw-50%)] py-8 md:py-10 min-h-[75vh] md:min-h-[75vh] flex items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '240px auto',
      }}
    >
      <div className="absolute inset-0 bg-white/65 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:[grid-template-columns:minmax(360px,520px)_1fr] gap-8 lg:gap-12 items-center">
        <div className="max-w-md text-left flex flex-col h-full">
          <Reveal from="up" delay={0}>
            <h2 className="text-[2.5rem] md:text-[3rem] leading-tight font-extrabold text-slate-800 mb-3">
              Our Goal
            </h2>
          </Reveal>
          <Reveal from="up" delay={100}>
            <p className="text-[1.1rem] md:text-[1.125rem] leading-8 md:leading-9 text-slate-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </Reveal>
          <Reveal from="up" delay={200} className="mt-auto pt-6">
            <button
              className="inline-flex items-center justify-center rounded-xl2 border border-transparent bg-[#2D7778] px-7 py-3.5 font-semibold text-white text-base md:text-lg shadow-brand mx-auto md:mx-0"
            >
              Download Mobile App
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start justify-items-center">
          {/* Big left card */}
          <Reveal from="left" delay={0}>
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand w-full max-w-[25rem] mx-auto md:h-64 p-2 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={brushingGif} alt="Brushing teeth" className="w-full h-full object-contain" />
            </div>
          </Reveal>

          {/* Middle card, halfway down from top card */}
          <Reveal from="up" delay={120}>
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand w-full max-w-[25rem] mx-auto md:h-70 md:mt-20 p-2 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={washingGif} alt="Washing" className="w-full h-full object-contain" />
            </div>
          </Reveal>

          {/* Right card small and landscape */}
          <Reveal from="right" delay={240}>
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand w-full max-w-[25rem] mx-auto md:h-55 md:mt-6 p-2 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={eatingGif} alt="Eating" className="w-full h-full object-contain" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    {/* How We Help You Section (moved up) */}
    <section className="w-screen -mx-[calc(50vw-50%)] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal from="up" delay={0}>
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-10">How We Help You</h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal from="left" delay={0}>
            <div className="relative bg-white border border-teal-200 rounded-2xl shadow-brand p-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-teal-500/30 cursor-pointer">
              <span className="absolute -top-3 -left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2D7778] text-white font-bold shadow-md">1</span>
              <p className="text-slate-700">Personalized routines for daily activities to build good habits.</p>
            </div>
          </Reveal>
          <Reveal from="up" delay={120}>
            <div className="relative bg-white border border-teal-200 rounded-2xl shadow-brand p-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-teal-500/30 cursor-pointer">
              <span className="absolute -top-3 -left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2D7778] text-white font-bold shadow-md">2</span>
              <p className="text-slate-700">Engaging visuals and steps help kids follow and stay motivated.</p>
            </div>
          </Reveal>
          <Reveal from="right" delay={240}>
            <div className="relative bg-white border border-teal-200 rounded-2xl shadow-brand p-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-teal-500/30 cursor-pointer">
              <span className="absolute -top-3 -left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2D7778] text-white font-bold shadow-md">3</span>
              <p className="text-slate-700">Track progress and celebrate wins to reinforce consistency.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    {/* Routine Success Tools Section (moved down) */}
    <section className="w-screen -mx-[calc(50vw-50%)] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal from="up" delay={0}>
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800">Routine Success Tools</h3>
        </Reveal>
        <Reveal from="up" delay={120}>
          <p className="text-center text-slate-600 mt-2 mb-10 max-w-3xl mx-auto">
            Everything you need to create a predictable, stress-free structure your child can thrive on.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal from="left" delay={0}>
            <div className="bg-white rounded-2xl border-2 border-teal-300 shadow-brand p-3 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-teal-500/30 cursor-pointer">
              <img src={cpRitmo} alt="Ritmo app screenshot" className="w-full h-auto max-w-xl" />
            </div>
          </Reveal>

          <Reveal from="right" delay={0}>
            <div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4">Routine Setup Page</h4>
              <p className="text-slate-700 mb-6">
                This page is the starting point for building and managing your child's daily structure. It is designed to be
                intuitive and engaging, transforming necessary daily activities into clear, visual, and predictable steps.
              </p>
              <ul className="space-y-3 text-slate-700 list-disc pl-5">
                <li>
                  Visual schedule cards for activities like brushing, eating and bath time — each presented with friendly illustrations.
                </li>
                <li>
                  Time allocation alongside visuals to build awareness and predictability.
                </li>
                <li>
                  Quick add with a prominent plus icon to set up routines easily.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* GIF Slider */}
        <Reveal from="up" delay={120}>
          <GifSlider />
        </Reveal>
      </div>
    </section>
    {/* About Our Team Section (below Routine Success Tools) */}
    <section
      className="relative w-screen -mx-[calc(50vw-50%)] py-14 md:py-20"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '240px auto',
      }}
    >
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <Reveal from="up" delay={0}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-5">About our team</h3>
          </Reveal>
          <Reveal from="up" delay={120}>
            <p className="text-slate-700 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
          </Reveal>
          <Reveal from="up" delay={220} className="pt-6">
            <button className="inline-flex items-center justify-center rounded-xl2 border border-transparent bg-[#2D7778] px-6 py-3 font-semibold text-white shadow-brand">
              Read More About Us
            </button>
          </Reveal>
        </div>
        <Reveal from="right" delay={100}>
          <div className="bg-white rounded-2xl border-2 border-teal-300 shadow-brand w-full h-72 md:h-[22rem] transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-teal-500/30 cursor-pointer"></div>
        </Reveal>
      </div>
    </section>

    {/* How Ritmo Can Help You */}
    <section className="w-screen -mx-[calc(50vw-50%)] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal from="up" delay={0}>
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-8">How Ritmo Can Help You</h3>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal from="left" delay={100}>
            <p className="text-slate-700 leading-7 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </Reveal>
          <Reveal from="right" delay={100}>
            <div className="bg-white rounded-2xl border-2 border-teal-300 shadow-brand p-4 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-teal-500/30 cursor-pointer">
              <img src={circleLogo} alt="Ritmo circle logo" className="w-full h-auto max-w-md" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Android Download Section */}
    <section
      className="relative w-screen -mx-[calc(50vw-50%)] py-14 md:py-20"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '240px auto',
      }}
    >
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Reveal from="left" delay={0}>
          <div className="bg-white rounded-2xl border-2 border-teal-300 shadow-brand p-4 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-teal-500/30 cursor-pointer">
            <img src={handPhone} alt="Ritmo app in hand" className="w-full h-auto max-w-lg object-contain" />
          </div>
        </Reveal>
        <div>
          <Reveal from="up" delay={0}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800">The Ritmo App is now available for download on Android.</h3>
          </Reveal>
          <Reveal from="up" delay={120}>
            <p className="mt-4 text-sm font-semibold text-slate-700">What does Ritmo do?</p>
          </Reveal>
          <Reveal from="up" delay={200}>
            <ul className="mt-2 space-y-3 text-slate-700 list-disc pl-5">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </li>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
            </ul>
          </Reveal>
          <Reveal from="up" delay={300} className="pt-6">
            <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#2D7778] px-6 py-3 font-semibold text-white shadow-brand">
              Download App
            </button>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="w-screen -mx-[calc(50vw-50%)] bg-[#2c7a7b] text-white pt-14">
      {/* Constrain width and use grid for balanced center spacing */}
      <div className="mx-auto max-w-6xl px-10 pb-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left block: logo + text + follow */}
        <div className="max-w-xl">
          <div className="inline-flex items-center justify-center bg-white rounded-xl px-4 py-3 shadow mb-6">
            <img src={ritmoLogo} alt="Ritmo" className="h-14 w-auto" />
          </div>
          <p className="text-base leading-relaxed text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-10">
            <h4 className="font-bold text-xl mb-4">Follow Us</h4>
            <a href="#" aria-label="Facebook" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white font-bold text-xl shadow transition hover:scale-110">
              f
            </a>
          </div>
        </div>

        {/* Right block: download + back to top */}
        <div className="flex flex-col max-w-sm md:items-end">
          <h4 className="font-bold text-2xl mb-6">Download App</h4>
          <button className="rounded-full bg-white text-[#2c7a7b] font-semibold px-10 py-3 text-base shadow transition hover:bg-teal-50 hover:shadow-lg mb-12">Click Here!!!</button>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-base font-semibold mb-4">Back to top</p>
            <button
              type="button"
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/60 hover:bg-white/10 transition"
            >
              <span className="text-xl">˄</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#A6E3C8] text-[#184a46] text-center text-xs font-medium py-3 tracking-wide">
        Copyright 2025 - Ritmo | Website Built by Group Name
      </div>
    </footer>

    </>
  )
}

// Footer included inside Home component
