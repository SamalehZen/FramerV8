import { motion } from 'framer-motion'
import { about } from '../../data/content'
import { Eyebrow } from '../ui/Eyebrow'
import { fadeUp, scaleIn, useReveal } from '../../lib/anim'

/** A layered "stacked photos" cluster used on each side of the heading. */
function PhotoStack({
  front,
  back,
  side,
}: {
  front: string
  back: string
  side: 'left' | 'right'
}) {
  const isLeft = side === 'left'
  const { ref, animate } = useReveal()
  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={animate}
      className="relative h-[300px] w-[270px]"
    >
      {/* Back, peeking card */}
      <img
        src={back}
        alt=""
        className="absolute top-0 h-[230px] w-[230px] rounded-[26px] object-cover opacity-90 shadow-card"
        style={{
          [isLeft ? 'left' : 'right']: 0,
          transform: `rotate(${isLeft ? -6 : 6}deg)`,
        }}
      />
      {/* Front card */}
      <img
        src={front}
        alt="Property"
        className="absolute bottom-0 h-[260px] w-[230px] rounded-[26px] object-cover shadow-card ring-1 ring-black/[0.04]"
        style={{ [isLeft ? 'right' : 'left']: 0 }}
      />
    </motion.div>
  )
}

export function About() {
  const head = useReveal()
  const mobile = useReveal()
  return (
    <section id="about" className="relative overflow-hidden bg-surface py-24 lg:py-28">
      {/* Flanking photo stacks (desktop) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center pl-6 xl:flex xl:pl-10">
        <PhotoStack front={about.images[2]} back={about.images[0]} side="left" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-6 xl:flex xl:pr-10">
        <PhotoStack front={about.images[3]} back={about.images[1]} side="right" />
      </div>

      <div className="container-px relative">
        <motion.div
          ref={head.ref}
          variants={fadeUp}
          initial="hidden"
          animate={head.animate}
          className="mx-auto flex max-w-[820px] flex-col items-center text-center"
        >
          <Eyebrow>About us</Eyebrow>
          <h2 className="mt-6 text-[30px] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[38px] md:text-[44px]">
            {about.heading}
          </h2>

          <div className="mt-9 flex items-center gap-5">
            <a
              href={about.primary.href}
              className="inline-flex h-[52px] items-center justify-center rounded-pill bg-navy px-7 font-sans text-[16px] font-medium text-white shadow-navy transition-all duration-300 ease-framer hover:bg-navy-700 active:scale-[0.98]"
            >
              {about.primary.label}
            </a>
            <a href={about.secondary.href} className="group inline-flex items-center gap-3">
              <span className="font-sans text-[16px] font-medium text-ink">{about.secondary.label}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white transition-transform duration-300 ease-framer group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-white stroke-[2.4]">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mobile photo row */}
      <motion.div
        ref={mobile.ref}
        variants={fadeUp}
        initial="hidden"
        animate={mobile.animate}
        className="container-px mt-12 grid grid-cols-2 gap-4 xl:hidden"
      >
        <img src={about.images[2]} alt="Property" className="h-44 w-full rounded-[22px] object-cover shadow-card sm:h-56" />
        <img src={about.images[3]} alt="Property" className="h-44 w-full rounded-[22px] object-cover shadow-card sm:h-56" />
      </motion.div>
    </section>
  )
}
