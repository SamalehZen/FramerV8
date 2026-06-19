import { motion } from 'framer-motion'
import { Eyebrow } from './Eyebrow'
import { fadeUp, useReveal } from '../../lib/anim'
import { clsx } from '../../lib/clsx'

/**
 * Recurring section header: eyebrow + large heading on the left,
 * optional muted description (and/or action) on the right.
 */
export function SectionHeader({
  eyebrow,
  heading,
  description,
  action,
  align = 'split',
  variant = 'dark',
  className,
  headingClassName,
}: {
  eyebrow: React.ReactNode
  heading: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  align?: 'split' | 'center'
  variant?: 'dark' | 'light'
  className?: string
  headingClassName?: string
}) {
  const { ref, animate } = useReveal()

  if (align === 'center') {
    return (
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={animate}
        className={clsx('mx-auto flex max-w-3xl flex-col items-center text-center', className)}
      >
        <Eyebrow variant={variant}>{eyebrow}</Eyebrow>
        <h2
          className={clsx(
            'mt-5 text-[34px] leading-[1.08] sm:text-[42px] md:text-[48px]',
            variant === 'light' ? 'text-white' : 'text-ink',
            headingClassName,
          )}
        >
          {heading}
        </h2>
        {description && (
          <p className={clsx('mt-4 max-w-xl text-[17px] leading-relaxed', variant === 'light' ? 'text-white/70' : 'text-body')}>
            {description}
          </p>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={animate}
      className={clsx('flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between', className)}
    >
      <div className="max-w-2xl">
        <Eyebrow variant={variant}>{eyebrow}</Eyebrow>
        <h2
          className={clsx(
            'mt-5 text-[33px] leading-[1.07] tracking-[-0.02em] sm:text-[40px] md:text-[46px]',
            variant === 'light' ? 'text-white' : 'text-ink',
            headingClassName,
          )}
        >
          {heading}
        </h2>
      </div>
      {(description || action) && (
        <div className="flex max-w-[380px] flex-col items-start gap-5 lg:pb-2">
          {description && (
            <p className={clsx('text-[19px] leading-[1.45]', variant === 'light' ? 'text-white/70' : 'text-body')}>
              {description}
            </p>
          )}
          {action}
        </div>
      )}
    </motion.div>
  )
}
