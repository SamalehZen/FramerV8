import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { nav, svg } from '../../data/content'
import { clsx } from '../../lib/clsx'
import { ease } from '../../lib/anim'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On the hero (not scrolled) the bar is transparent with white content.
  const light = scrolled

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-framer',
        light ? 'bg-surface/85 shadow-nav backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-[78px] max-w-[1320px] items-center justify-between px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={light ? svg('logo-navy.svg') : svg('logo-white.svg')}
            alt="Propertiva"
            className="h-[26px] w-[26px]"
          />
          <span
            className={clsx(
              'font-display text-[23px] font-semibold tracking-[-0.01em] transition-colors duration-300',
              light ? 'text-ink' : 'text-white',
            )}
          >
            Propertiva
            <sup className="ml-0.5 align-super text-[11px] font-medium opacity-70">®</sup>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={clsx(
                'font-sans text-[15px] font-medium transition-colors duration-200',
                light ? 'text-ink/80 hover:text-ink' : 'text-white/85 hover:text-white',
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className={clsx(
              'inline-flex h-11 items-center justify-center rounded-pill px-6 font-sans text-[15px] font-medium transition-all duration-300 ease-framer active:scale-[0.98]',
              light
                ? 'bg-navy text-white shadow-navy hover:bg-navy-700'
                : 'bg-white text-navy hover:bg-white/90',
            )}
          >
            {nav.cta.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={clsx(
            'flex h-11 w-11 items-center justify-center rounded-full lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-inset',
            light ? 'text-ink' : 'text-white',
          )}
        >
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span className={clsx('block h-[2px] w-5 origin-center bg-current transition-all duration-300', open && 'translate-y-[7px] rotate-45')} />
            <span className={clsx('block h-[2px] w-5 bg-current transition-all duration-300', open && 'opacity-0')} />
            <span className={clsx('block h-[2px] w-5 origin-center bg-current transition-all duration-300', open && '-translate-y-[7px] -rotate-45')} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden border-t border-black/5 bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {nav.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-sans text-[16px] font-medium text-ink/85 transition-colors hover:bg-black/[0.04]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={nav.cta.href}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-pill bg-navy font-sans text-[15px] font-medium text-white shadow-navy"
              >
                {nav.cta.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
