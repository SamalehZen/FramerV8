import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { properties, svg, type Property } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { SpecIcon, type SpecKind } from '../ui/SpecIcon'
import { ease } from '../../lib/anim'
import { clsx } from '../../lib/clsx'

const specOrder: { kind: SpecKind; key: keyof Property['specs']; label: string }[] = [
  { kind: 'area', key: 'area', label: 'Area' },
  { kind: 'bedrooms', key: 'bedrooms', label: 'Bedrooms' },
  { kind: 'bathrooms', key: 'bathrooms', label: 'Bathrooms' },
  { kind: 'floors', key: 'floors', label: 'Floors' },
  { kind: 'parking', key: 'parking', label: 'Parking lots' },
  { kind: 'balconies', key: 'balconies', label: 'Balconies' },
]

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill bg-white/95 py-1.5 pl-2.5 pr-3.5 font-sans text-[13px] font-semibold text-ink shadow-sm backdrop-blur">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-navy">
        <path d="M12 2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 8.8l6.5-.9z" />
      </svg>
      {label}
    </span>
  )
}

function SpecPill({ kind, value, label }: { kind: SpecKind; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-pill bg-white px-4 py-3 ring-1 ring-black/[0.05]">
      <SpecIcon kind={kind} className="h-[18px] w-[18px] shrink-0" />
      <span className="font-sans text-[15px] font-bold text-ink">{value}</span>
      <span className="font-sans text-[15px] font-medium text-body">{label}</span>
    </div>
  )
}

export function Properties() {
  const [index, setIndex] = useState(2) // start on Maple Sanctuary (matches screenshots)
  const [dir, setDir] = useState(1)
  const total = properties.length
  const active = properties[index]
  const prev = properties[(index - 1 + total) % total]
  const next = properties[(index + 1) % total]

  const go = (d: number) => {
    setDir(d)
    setIndex((i) => (i + d + total) % total)
  }

  return (
    <section id="properties" className="bg-surface py-20 lg:py-24">
      <div className="container-px">
        <SectionHeader
          eyebrow="Our properties"
          heading={<>Exclusive properties<br className="hidden sm:block" /> crafted for excellence</>}
          description="Luxury homes featuring refined architecture, modern amenities, and prime locations."
        />
      </div>

      {/* Carousel */}
      <div className="relative mt-14">
        {/* side peeks (desktop) */}
        <img
          src={prev.image}
          alt=""
          aria-hidden
          className="absolute left-0 top-1/2 hidden h-[78%] w-[7%] -translate-y-1/2 rounded-r-[26px] object-cover opacity-40 xl:block"
        />
        <img
          src={next.image}
          alt=""
          aria-hidden
          className="absolute right-0 top-1/2 hidden h-[78%] w-[9%] -translate-y-1/2 rounded-l-[26px] object-cover opacity-50 xl:block"
        />

        <div className="container-px">
          <div className="relative mx-auto max-w-[1120px] overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease }}
                className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr_1fr]"
              >
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden rounded-[28px] lg:h-[440px]">
                  <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
                  <div className="absolute left-4 top-4">
                    <Badge label={active.badge} />
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col rounded-[28px] bg-black/[0.025] p-7 lg:p-8">
                  <div className="flex items-center gap-2 font-display text-[24px] font-semibold text-ink">
                    {active.name}
                    <span className="text-body">•</span>
                    <span className="text-[18px] font-medium text-body">{active.location}</span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-[38px] font-semibold tracking-[-0.02em] text-ink">{active.price}</span>
                    <span className="font-sans text-[16px] font-medium text-body">/Listed price</span>
                  </div>

                  <div className="mt-6 grid flex-1 grid-cols-1 content-center gap-3 sm:grid-cols-2">
                    {specOrder.map((s) => (
                      <SpecPill key={s.key} kind={s.kind} value={active.specs[s.key]} label={s.label} />
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex h-[54px] items-center justify-center rounded-pill bg-navy font-sans text-[16px] font-medium text-white shadow-navy transition-all duration-300 ease-framer hover:bg-navy-700 active:scale-[0.99]"
                  >
                    Property details
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Nav arrows */}
        <button
          type="button"
          aria-label="Previous property"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-navy shadow-navy transition-all duration-300 ease-framer hover:bg-navy-700 active:scale-95 lg:left-6 xl:left-[6%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          <img src={svg('arrow-left.svg')} alt="" className="h-4 w-4 brightness-0 invert" />
        </button>
        <button
          type="button"
          aria-label="Next property"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-navy shadow-navy transition-all duration-300 ease-framer hover:bg-navy-700 active:scale-95 lg:right-6 xl:right-[8%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          <img src={svg('arrow-right.svg')} alt="" className="h-4 w-4 brightness-0 invert" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-9 flex items-center justify-center gap-2">
        {properties.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to property ${i + 1}`}
            onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
            className={clsx(
              'h-2 rounded-full transition-all duration-300 ease-framer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
              i === index ? 'w-7 bg-navy' : 'w-2 bg-black/15 hover:bg-black/25',
            )}
          />
        ))}
      </div>
    </section>
  )
}
