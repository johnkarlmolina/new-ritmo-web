import { useEffect, useRef, useState, type ReactNode } from 'react'

export default function Reveal({
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
