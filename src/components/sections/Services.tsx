import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { ServiceIcon, type ServiceKind } from '../ui/ServiceIcon'
import { fadeUp, useReveal, ease } from '../../lib/anim'
import { clsx } from '../../lib/clsx'

const kinds: ServiceKind[] = ['sales', 'purchase', 'leasing', 'investment', 'market', 'management', 'legal', 'relocation']

export function Services() {
  const [active, setActive] = useState(0)
  const current = services.items[active]
  const { ref, animate } = useReveal()

  return (
    <section id="services" className="bg-surface py-20 lg:py-24">
      <div className="container-px">
        <SectionHeader
          eyebrow={services.eyebrow}
          heading={<>Complete support for<br className="hidden sm:block" /> property owners</>}
          description="Reliable, end-to-end real estate services tailored to every owner, buyer and investor."
        />

        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          className="mt-12 grid grid-cols-1 gap-4 rounded-[32px] bg-black/[0.03] p-4 lg:grid-cols-2 lg:p-5"
        >
          {/* Accordion list */}
          <ul className="flex flex-col">
            {services.items.map((item, i) => {
              const isActive = i === active
              return (
                <li key={item.n}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={clsx(
                      'flex w-full items-center gap-4 border-b border-black/[0.07] text-left transition-all duration-300 ease-framer last:border-b-0',
                      isActive ? 'py-5' : 'py-[18px]',
                    )}
                  >
                    <span
                      className={clsx(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-sans text-[12px] font-bold transition-all duration-300',
                        isActive ? 'bg-navy text-white' : 'text-body',
                      )}
                    >
                      {item.n}
                    </span>
                    <span
                      className={clsx(
                        'flex-1 font-display font-semibold transition-all duration-300',
                        isActive ? 'text-[24px] text-ink' : 'text-[22px] text-body',
                      )}
                    >
                      {item.title}
                    </span>
                    <ServiceIcon
                      kind={kinds[i]}
                      className={clsx('h-6 w-6 shrink-0 transition-colors duration-300', isActive ? 'text-ink' : 'text-body/70')}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Image + caption */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[24px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0"
              >
                <img src={current.image} alt={current.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-7 font-display text-[22px] font-semibold leading-snug text-white lg:text-[24px]">
                  {current.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
