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
    <section
      className="relative w-screen -mx-[calc(50vw-50%)] py-8 md:py-12"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '240px auto',
      }}
    >
      <div className="absolute inset-0 bg-white/65 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:[grid-template-columns:minmax(360px,520px)_1fr] gap-8 lg:gap-12 items-start">
        <div className="max-w-md text-left flex flex-col h-full">
          <Reveal from="up" delay={0}>
            <h2 className="text-[2.35rem] md:text-[2.9rem] leading-tight font-extrabold text-slate-800 mb-3">
              Our Goal
            </h2>
          </Reveal>
          <Reveal from="up" delay={100}>
            <p className="text-[1.05rem] leading-8 text-slate-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </Reveal>
          <Reveal from="up" delay={200} className="mt-auto pt-6">
            <button
              className="inline-flex items-center justify-center rounded-xl2 border border-white/60 bg-[#2D7778] px-6 py-3 font-semibold text-white shadow-brand mx-auto md:mx-0"
            >
              Download Mobile App
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start justify-items-stretch">
          {/* Big left card */}
          <Reveal from="left" delay={0}>
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand overflow-hidden w-full max-w-sm md:max-w-none mx-auto md:h-60 transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={brushingGif} alt="Brushing teeth" className="w-full h-full object-cover" />
            </div>
          </Reveal>

          {/* Middle card, halfway down from top card */}
          <Reveal from="up" delay={120}>
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand overflow-hidden w-full max-w-sm md:max-w-none mx-auto md:h-60 md:mt-20 transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={washingGif} alt="Washing" className="w-full h-full object-cover" />
            </div>
          </Reveal>

          {/* Right card small and landscape */}
          <Reveal from="right" delay={240}>
            <div className="bg-white border-2 border-teal-300 rounded-2xl shadow-brand overflow-hidden w-full max-w-sm md:max-w-none mx-auto md:h-40 md:mt-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-teal-500/40 cursor-pointer">
              <img src={eatingGif} alt="Eating" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
