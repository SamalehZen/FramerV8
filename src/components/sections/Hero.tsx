import { motion } from 'framer-motion'
import { hero } from '../../data/content'
import { Button } from '../ui/Button'
import { ease } from '../../lib/anim'

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[760px] flex-col overflow-hidden lg:h-screen lg:min-h-[820px]"
    >
      {/* Background image */}
      <img
        src={hero.image}
        alt="Modern home at dusk by the sea"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      {/* Teal overlays for contrast (sampled from the original) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(100deg, rgba(9,46,61,0.94) 0%, rgba(17,60,77,0.66) 38%, rgba(28,80,96,0.28) 70%, rgba(35,90,107,0.08) 100%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,66,82,0.35) 0%, rgba(16,66,82,0) 22%, rgba(7,40,54,0) 55%, rgba(6,37,51,0.72) 100%)',
        }}
      />

      {/* Content */}
      <div className="container-px relative z-10 flex flex-1 flex-col justify-start">
        <div className="max-w-[680px] pt-[112px] md:pt-[120px] lg:pt-[126px]">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-pill bg-white/90 py-1.5 pl-1.5 pr-4 backdrop-blur-md"
          >
            <span className="inline-flex items-center rounded-pill bg-black/[0.06] px-2.5 py-1 font-sans text-[13px] font-bold text-ink">
              {hero.badge.index}
            </span>
            <span className="font-sans text-[13px] font-semibold text-ink">{hero.badge.text}</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.18 }}
            className="mt-6 font-display text-[48px] font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-[60px] lg:text-[68px]"
          >
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-6 max-w-[412px] font-sans text-[18px] leading-[1.5] text-white/85"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href={hero.primary.href} variant="light" size="lg">
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="ghostLight" size="lg">
              {hero.secondary.label}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Giant clipped wordmark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden">
        <div className="container-px">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="block translate-y-[50%] font-display text-[22vw] font-semibold leading-[0.8] tracking-[-0.03em] text-white/[0.15] lg:text-[17vw]"
          >
            {hero.wordmark}
          </motion.span>
        </div>
      </div>
    </section>
  )
}
