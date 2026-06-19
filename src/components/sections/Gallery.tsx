import { motion } from 'framer-motion'
import { gallery } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { fadeUp, stagger, useReveal } from '../../lib/anim'

// 4 staggered columns; each entry sets the image + its rendered height.
const columns: { src: string; h: string }[][] = [
  [
    { src: gallery.images[0], h: 'h-[360px]' },
    { src: gallery.images[3], h: 'h-[300px]' },
  ],
  [
    { src: gallery.images[1], h: 'h-[200px]' },
    { src: gallery.images[4], h: 'h-[360px]' },
    { src: gallery.images[7], h: 'h-[240px]' },
  ],
  [
    { src: gallery.images[2], h: 'h-[180px]' },
    { src: gallery.images[6], h: 'h-[360px]' },
    { src: gallery.images[9], h: 'h-[260px]' },
  ],
  [
    { src: gallery.images[5], h: 'h-[280px]' },
    { src: gallery.images[8], h: 'h-[380px]' },
  ],
]

const colOffsets = ['lg:mt-0', 'lg:mt-12', 'lg:mt-24', 'lg:mt-6']

export function Gallery() {
  const { ref, animate } = useReveal()
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="container-px">
        <SectionHeader
          eyebrow={gallery.eyebrow}
          heading={<>Property moments<br className="hidden sm:block" /> captured beautifully</>}
          description={gallery.subtitle}
        />
      </div>

      <div className="container-px relative mt-14">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {columns.map((col, ci) => (
            <div key={ci} className={`flex flex-col gap-4 ${colOffsets[ci]}`}>
              {col.map((item, ii) => (
                <motion.img
                  key={ii}
                  src={item.src}
                  alt="Property"
                  variants={fadeUp}
                  className={`w-full ${item.h} rounded-[20px] object-cover`}
                />
              ))}
            </div>
          ))}
        </motion.div>
        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent" />
      </div>
    </section>
  )
}
