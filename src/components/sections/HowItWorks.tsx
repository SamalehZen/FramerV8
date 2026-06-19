import { motion } from 'framer-motion'
import { howItWorks } from '../../data/content'
import { Eyebrow } from '../ui/Eyebrow'
import { fadeUp, stagger, useReveal } from '../../lib/anim'

const stepIcons = [
  // search
  <svg key="s" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-ink stroke-[1.8]" strokeLinecap="round">
    <circle cx="11" cy="11" r="6" />
    <path d="M16 16l4 4" />
  </svg>,
  // visit (building)
  <svg key="v" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-ink stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V6l8-3v18M12 9l8 3v9M4 21h16" />
    <path d="M7 9v0M7 13v0M16 14v0M16 18v0" />
  </svg>,
  // close (handshake)
  <svg key="c" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-ink stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12l4-4 4 2 2-2 4 2 4-2M11 10l-2 2a1.5 1.5 0 0 0 2 2l1-1 2 2a1.5 1.5 0 0 0 2-2" />
  </svg>,
]

export function HowItWorks() {
  const left = useReveal()
  const steps = useReveal()
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="container-px grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <motion.div ref={left.ref} variants={fadeUp} initial="hidden" animate={left.animate}>
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-[34px] leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] md:text-[48px]">
            Step-by-step real<br className="hidden sm:block" /> estate process for you
          </h2>
          <p className="mt-6 max-w-[440px] font-sans text-[18px] leading-[1.5] text-body">{howItWorks.subtitle}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={howItWorks.primary.href}
              className="inline-flex h-[52px] items-center justify-center rounded-pill bg-navy px-7 font-sans text-[16px] font-medium text-white shadow-navy transition-all duration-300 ease-framer hover:bg-navy-700 active:scale-[0.98]"
            >
              {howItWorks.primary.label}
            </a>
            <a
              href={howItWorks.secondary.href}
              className="inline-flex h-[52px] items-center justify-center rounded-pill bg-white px-7 font-sans text-[16px] font-medium text-ink shadow-pill ring-1 ring-inset ring-black/[0.06] transition-all duration-300 ease-framer hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {howItWorks.secondary.label}
            </a>
          </div>
        </motion.div>

        {/* Right: stepper */}
        <motion.div ref={steps.ref} variants={stagger} initial="hidden" animate={steps.animate} className="relative">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.n}
              variants={fadeUp}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* dashed connector */}
              {i < howItWorks.steps.length - 1 && (
                <span className="absolute left-[39px] top-[80px] bottom-2 w-px border-l border-dashed border-black/20" />
              )}
              <div className="relative z-10 flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-surface shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),0_6px_14px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]">
                {stepIcons[i]}
              </div>
              <div className="pt-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-[26px] font-semibold text-ink">{step.title}</h3>
                  <span className="inline-flex h-6 items-center rounded-full bg-black/[0.05] px-2 font-sans text-[12px] font-bold text-body">
                    {step.n}
                  </span>
                </div>
                <p className="mt-2 max-w-[380px] font-sans text-[17px] leading-[1.5] text-body">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
