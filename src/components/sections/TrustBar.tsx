import { motion } from 'framer-motion'
import { trust } from '../../data/content'
import { fadeUp, useReveal } from '../../lib/anim'

function Stars() {
  return (
    <span className="flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-[15px] w-[15px] fill-[#FF7A00]">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.6l-4.95 2.6.95-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </span>
  )
}

export function TrustBar() {
  const { ref, animate } = useReveal()
  return (
    <section className="relative z-10 bg-surface">
      <div className="container-px">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          className="flex flex-col items-center gap-8 py-9 lg:flex-row lg:gap-12"
        >
          {/* Rating cluster */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex -space-x-3">
              {trust.avatars.slice(0, 4).map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover ring-[3px] ring-surface"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="font-sans text-[14px] font-bold text-ink">{trust.rating} {trust.ratingLabel}</span>
              </div>
              <p className="mt-0.5 font-sans text-[14px] font-bold text-ink">{trust.trustedBy}</p>
            </div>
          </div>

          {/* Logo marquee */}
          <div className="marquee-mask relative w-full flex-1 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-14">
              {[...trust.logos, ...trust.logos, ...trust.logos].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="Client logo"
                  className="h-[26px] w-auto shrink-0 opacity-70 grayscale"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
