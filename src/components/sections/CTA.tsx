import { motion } from 'framer-motion'
import { cta } from '../../data/content'
import { Eyebrow } from '../ui/Eyebrow'
import { fadeUp, useReveal } from '../../lib/anim'

export function CTA() {
  const { ref, animate } = useReveal()
  return (
    <section id="contact" className="relative isolate min-h-[680px] overflow-hidden lg:h-[840px]">
      <img src={cta.image} alt="Modern concrete architecture" className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_35%]" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(105deg, rgba(7,52,85,0.95) 0%, rgba(16,70,110,0.66) 42%, rgba(38,98,138,0.24) 72%, rgba(70,120,160,0.05) 100%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(180deg, rgba(7,46,72,0.25) 0%, rgba(7,46,72,0) 30%, rgba(8,40,66,0) 65%, rgba(8,40,66,0.45) 100%)' }}
      />

      <div className="container-px relative flex h-full min-h-[680px] flex-col justify-center pb-28 pt-32 lg:pb-40">
        <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={animate}>
          <Eyebrow variant="light">{cta.badge}</Eyebrow>
          <h2 className="mt-6 max-w-[620px] font-display text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-white sm:text-[58px] lg:text-[66px]">
            {cta.title}
          </h2>
          <p className="mt-6 max-w-[460px] font-sans text-[18px] leading-[1.5] text-white/85">{cta.subtitle}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={cta.primary.href}
              className="inline-flex h-[52px] items-center justify-center rounded-pill bg-white px-7 font-sans text-[16px] font-medium text-ink shadow-pill transition-all duration-300 ease-framer hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {cta.primary.label}
            </a>
            <a
              href={cta.secondary.href}
              className="inline-flex h-[52px] items-center justify-center rounded-pill bg-white/10 px-7 font-sans text-[16px] font-medium text-white ring-1 ring-inset ring-white/30 backdrop-blur-md transition-all duration-300 ease-framer hover:bg-white/20 active:scale-[0.98]"
            >
              {cta.secondary.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
