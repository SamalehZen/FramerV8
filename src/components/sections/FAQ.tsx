import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faq } from '../../data/content'
import { Eyebrow } from '../ui/Eyebrow'
import { fadeUp, useReveal, ease } from '../../lib/anim'
import { clsx } from '../../lib/clsx'

export function FAQ() {
  const [open, setOpen] = useState(2) // "Do you support investors?" open by default (matches screenshot)
  const left = useReveal()
  const list = useReveal()

  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="container-px grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <motion.div ref={left.ref} variants={fadeUp} initial="hidden" animate={left.animate}>
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-[34px] leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] md:text-[48px]">
            Need answers<br className="hidden sm:block" /> about properties?
          </h2>
          <p className="mt-6 max-w-[420px] font-sans text-[18px] leading-[1.5] text-body">{faq.subtitle}</p>
          <a
            href={faq.cta.href}
            className="mt-9 inline-flex h-[52px] items-center justify-center rounded-pill bg-navy px-9 font-sans text-[16px] font-medium text-white shadow-navy transition-all duration-300 ease-framer hover:bg-navy-700 active:scale-[0.98]"
          >
            {faq.cta.label}
          </a>
        </motion.div>

        {/* Right: accordion */}
        <motion.div
          ref={list.ref}
          variants={fadeUp}
          initial="hidden"
          animate={list.animate}
          className="flex flex-col gap-3"
        >
          {faq.items.map((item, i) => {
            const isOpen = i === open
            const headerId = `faq-header-${i}`
            const panelId = `faq-panel-${i}`
            return (
              <div
                key={item.q}
                className={clsx(
                  'rounded-[20px] bg-black/[0.03] px-6 ring-1 ring-inset transition-all duration-300 ease-framer',
                  isOpen ? 'ring-black/[0.06]' : 'ring-transparent hover:bg-black/[0.045]',
                )}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 px-3 -mx-3 text-left focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 outline-none rounded-[14px] transition-all duration-300 ease-framer"
                >
                  <span className="font-display text-[20px] font-semibold text-ink">{item.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-navy">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-white stroke-[2.4]" strokeLinecap="round">
                      {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M12 5v14M5 12h14" />}
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-md pb-6 font-sans text-[16px] leading-[1.5] text-body">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
