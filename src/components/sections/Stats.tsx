import { motion } from 'framer-motion'
import { stats } from '../../data/content'
import { fadeUp, stagger, useReveal } from '../../lib/anim'

export function Stats() {
  const { ref, animate } = useReveal()
  return (
    <section className="bg-surface pb-8 pt-2 lg:pb-16">
      <div className="container-px">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-2 gap-2 rounded-[30px] border border-black/[0.06] bg-black/[0.012] p-2.5 shadow-card lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex flex-col items-center justify-center rounded-[22px] bg-white/55 px-6 py-12 text-center ring-1 ring-inset ring-white/60"
            >
              <span className="font-display text-[48px] font-semibold leading-none tracking-[-0.02em] text-ink lg:text-[54px]">
                {s.value}
              </span>
              <span className="mt-3 font-sans text-[18px] font-medium text-body">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
