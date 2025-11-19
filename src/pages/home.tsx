import { useEffect, useRef, useState, type ReactNode } from 'react'
import bgImg from '../assets/landing_logo.png'
import brushingGif from '../asset-gif/brushing.gif'
import washingGif from '../asset-gif/washing.gif'
import eatingGif from '../asset-gif/eating.gif'

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
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
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand w-full max-w-[22rem] mx-auto md:h-64 p-2 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={brushingGif} alt="Brushing teeth" className="w-full h-full object-contain" />
            </div>
          </Reveal>

          {/* Middle card, halfway down from top card */}
          <Reveal from="up" delay={120}>
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand w-full max-w-[22rem] mx-auto md:h-64 md:mt-20 p-2 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={washingGif} alt="Washing" className="w-full h-full object-contain" />
            </div>
          </Reveal>

          {/* Right card small and landscape */}
          <Reveal from="right" delay={240}>
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand w-full max-w-[24rem] mx-auto md:h-44 md:mt-6 p-2 flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={eatingGif} alt="Eating" className="w-full h-full object-contain" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    {/* How We Help You Section */}
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
    </>
  )
}
