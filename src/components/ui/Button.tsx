import { clsx } from '../../lib/clsx'

type Variant = 'navy' | 'light' | 'ghostLight' | 'outline'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  navy:
    'bg-navy text-white shadow-navy hover:bg-navy-700 active:scale-[0.98] focus-visible:ring-navy',
  light:
    'bg-white text-ink shadow-pill hover:bg-white active:scale-[0.98] hover:-translate-y-0.5 focus-visible:ring-white',
  ghostLight:
    'bg-white/10 text-white ring-1 ring-inset ring-white/30 backdrop-blur-md hover:bg-white/[0.18] active:scale-[0.98] focus-visible:ring-white/60',
  outline:
    'bg-white text-ink ring-1 ring-inset ring-black/10 shadow-pill hover:-translate-y-0.5 active:scale-[0.98] focus-visible:ring-navy',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-[52px] px-7 text-[16px]',
}

export function Button({
  children,
  variant = 'navy',
  size = 'md',
  href,
  className,
  onClick,
}: {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  onClick?: () => void
}) {
  const cls = clsx(
    'group inline-flex select-none items-center justify-center gap-2 rounded-pill font-sans font-medium',
    'transition-all duration-300 ease-framer will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    sizes[size],
    variants[variant],
    className,
  )
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
