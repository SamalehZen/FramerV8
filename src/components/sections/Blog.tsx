import { motion } from 'framer-motion'
import { blog, svg } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { fadeUp, stagger, useReveal } from '../../lib/anim'

function ReadBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill bg-white/95 py-1.5 pl-2.5 pr-3 font-sans text-[13px] font-semibold text-ink shadow-sm backdrop-blur">
      <img src={svg('icon-clock.svg')} alt="" className="h-3.5 w-3.5" />
      {label}
    </span>
  )
}

export function Blog() {
  const { ref, animate } = useReveal()
  return (
    <section id="blog" className="bg-surface py-20 lg:py-24">
      <div className="container-px">
        <SectionHeader
          eyebrow={blog.eyebrow}
          heading={<>Property guides<br className="hidden sm:block" /> and market trends</>}
          description={blog.subtitle}
        />

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={animate}
          className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.42fr_1fr]"
        >
          {/* Featured */}
          <motion.article
            variants={fadeUp}
            className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[28px] lg:min-h-[560px]"
          >
            <img
              src={blog.featured.image}
              alt={blog.featured.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-framer group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
            <div className="absolute right-5 top-5">
              <ReadBadge label={blog.featured.readTime} />
            </div>
            <div className="relative p-7 lg:p-9">
              <h3 className="max-w-md font-display text-[30px] font-semibold leading-[1.12] text-white lg:text-[34px]">
                {blog.featured.title}
              </h3>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={blog.featured.avatar} alt={blog.featured.author} className="h-9 w-9 rounded-full object-cover" />
                  <span className="font-sans text-[15px] font-medium text-white">{blog.featured.author}</span>
                  <span className="text-white/50">•</span>
                  <span className="font-sans text-[15px] text-white/70">{blog.featured.date}</span>
                </div>
                <a href="#blog" className="hidden items-center gap-2.5 font-sans text-[15px] font-medium text-white sm:flex">
                  Read more
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-inset ring-white/40 backdrop-blur transition-transform duration-300 ease-framer group-hover:translate-x-0.5">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-white stroke-[2]"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
              </div>
            </div>
          </motion.article>

          {/* Side cards */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            {blog.side.map((post) => (
              <article
                key={post.title}
                className="group flex flex-1 flex-col"
              >
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[180px] w-full object-cover transition-transform duration-700 ease-framer group-hover:scale-[1.04] lg:h-[210px]"
                  />
                  <div className="absolute right-4 top-4">
                    <ReadBadge label={post.readTime} />
                  </div>
                </div>
                <h3 className="mt-4 max-w-[330px] font-display text-[23px] font-semibold leading-[1.18] text-ink">
                  {post.title}
                </h3>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
