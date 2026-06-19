import { motion } from 'framer-motion'
import { testimonials } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { fadeUp, stagger, useReveal } from '../../lib/anim'

export function Testimonials() {
  const { ref, animate } = useReveal()
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="container-px">
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          heading={<>Hear from people<br className="hidden sm:block" /> who trust propertiva</>}
          description={testimonials.subtitle}
        />

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="mt-12 grid grid-cols-1 gap-4 rounded-[32px] bg-black/[0.02] p-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.items.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="min-h-[380px]">
              {t.variant === 'image' ? (
                <div className="relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-[24px]">
                  <img src={t.image} alt={t.name} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
                  <div className="relative p-7">
                    <p className="font-display text-[19px] font-semibold leading-snug text-white">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center gap-2 font-sans text-[15px]">
                      <span className="font-semibold text-white">{t.name}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white/70">{t.role}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full min-h-[380px] flex-col justify-between rounded-[24px] bg-surface p-7 ring-1 ring-black/[0.05]">
                  <div className="flex items-start justify-between">
                    <img src={t.logo} alt="" className="h-6 w-auto" />
                    <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-[12px] object-cover shadow-pill" />
                  </div>
                  <div>
                    <p className="font-display text-[19px] font-semibold leading-snug text-ink">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center gap-2 font-sans text-[15px]">
                      <span className="font-semibold text-ink">{t.name}</span>
                      <span className="text-body/50">•</span>
                      <span className="text-body">{t.role}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
