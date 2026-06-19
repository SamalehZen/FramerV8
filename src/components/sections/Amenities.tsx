import { motion } from 'framer-motion'
import { amenities } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { fadeUp, stagger, useReveal } from '../../lib/anim'

/** Faint dotted decoration that fades from the top-right corner. */
function Dots() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 h-36 w-40"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.16) 1px, transparent 1.6px)',
        backgroundSize: '13px 13px',
        WebkitMaskImage: 'radial-gradient(120px 120px at top right, #000 0%, transparent 72%)',
        maskImage: 'radial-gradient(120px 120px at top right, #000 0%, transparent 72%)',
      }}
    />
  )
}

export function Amenities() {
  const { ref, animate } = useReveal()
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="container-px">
        <SectionHeader
          eyebrow={amenities.eyebrow}
          heading={<>Exceptional amenities<br className="hidden sm:block" /> for residents&rsquo; comfort</>}
          description={amenities.subtitle}
        />

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-black/[0.08] bg-black/[0.08] sm:grid-cols-2 lg:grid-cols-3"
        >
          {amenities.items.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              className="relative overflow-hidden bg-surface p-9 lg:p-10"
            >
              <Dots />
              <img src={a.icon} alt="" className="relative h-10 w-10 object-contain" />
              <h3 className="relative mt-16 font-display text-[25px] font-semibold text-ink">{a.title}</h3>
              <p className="relative mt-3 max-w-[280px] font-sans text-[16px] leading-[1.5] text-body">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
