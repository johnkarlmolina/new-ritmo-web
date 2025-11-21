import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Instantly jump to the top when the route changes
    try {
      window.scrollTo({ top: 0, left: 0 })
    } catch (e) {
      // fallback
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
