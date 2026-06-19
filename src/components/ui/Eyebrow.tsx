import { clsx } from '../../lib/clsx'

/** Section eyebrow: a small square marker followed by an uppercase label. */
export function Eyebrow({
  children,
  variant = 'dark',
  className,
}: {
  children: React.ReactNode
  variant?: 'dark' | 'light'
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2.5 font-sans text-[13px] font-bold uppercase tracking-[0.1em]',
        variant === 'dark' ? 'text-ink' : 'text-white',
        className,
      )}
    >
      <span
        className={clsx(
          'h-[9px] w-[9px] rounded-[2px]',
          variant === 'dark' ? 'bg-navy' : 'bg-white',
        )}
      />
      {children}
    </span>
  )
}
