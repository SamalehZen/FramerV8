import { useEffect, useRef, useState } from 'react'
import type { Variants } from 'framer-motion'

/** Framer-style easing used across the original site. */
export const ease = [0.44, 0, 0.07, 1] as const

export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Fade + rise — for single elements and for staggered children. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
}

/** Container that staggers its children's `show` transition. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

export const viewport = { once: true, amount: 0.15 } as const

/**
 * Reliable scroll reveal. Reveals when the element scrolls into view, but also
 * (a) reveals immediately if already in view on mount, (b) keeps a scroll
 * fallback, (c) has a safety timeout so content can never be left stuck hidden,
 * and (d) shows instantly for users who prefer reduced motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(prefersReducedMotion)

  useEffect(() => {
    if (shown) return
    const el = ref.current
    if (!el) {
      setShown(true)
      return
    }

    let done = false
    const reveal = () => {
      if (done) return
      done = true
      setShown(true)
    }

    const inView = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return r.top < vh * 0.92 && r.bottom > 0
    }

    if (inView()) {
      reveal()
      return
    }

    const io = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && reveal(),
      { threshold: 0.08 },
    )
    io.observe(el)
    const onScroll = () => inView() && reveal()
    window.addEventListener('scroll', onScroll, { passive: true })
    // Safety net: never leave content hidden, whatever happens with IO/scroll.
    const timer = window.setTimeout(reveal, 2600)

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(timer)
    }
  }, [shown])

  return { ref, animate: shown ? 'show' : 'hidden' } as const
}

