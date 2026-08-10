import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { video } from '../../data/content'
import { scaleIn, useReveal } from '../../lib/anim'

export function VideoSection() {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const reveal = useReveal()

  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section id="video" className="bg-surface pb-20 lg:pb-24">
      <div className="container-px">
        <motion.div
          ref={reveal.ref}
          variants={scaleIn}
          initial="hidden"
          animate={reveal.animate}
          className="relative overflow-hidden rounded-[32px]"
        >
          <video
            ref={ref}
            className="aspect-[16/8] w-full object-cover"
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? 'Pause video' : 'Play video'}
            className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-inset ring-white/40 backdrop-blur-md transition-all duration-300 ease-framer hover:bg-white/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus:outline-none"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
                <rect x="7" y="5" width="3.4" height="14" rx="1" />
                <rect x="13.6" y="5" width="3.4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white">
                <path d="M7 5l12 7-12 7z" />
              </svg>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
