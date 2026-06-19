import { clsx } from '../../lib/clsx'

type SpecKind = 'area' | 'bedrooms' | 'bathrooms' | 'floors' | 'parking' | 'balconies'

const paths: Record<SpecKind, React.ReactNode> = {
  area: (
    <>
      <path d="M3 9.5 12 3l9 6.5" />
      <path d="M5 9v11h14V9" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  bedrooms: (
    <>
      <path d="M3 7v11" />
      <path d="M3 12h18v6" />
      <path d="M21 18V9a2 2 0 0 0-2-2H9v5" />
      <path d="M6.5 12v-1.5A1.5 1.5 0 0 1 8 9" />
    </>
  ),
  bathrooms: (
    <>
      <path d="M4 12V6.5A2.5 2.5 0 0 1 6.5 4a2.3 2.3 0 0 1 2.3 1.8" />
      <path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" />
      <path d="M7 19l-1.5 2M17 19l1.5 2" />
      <circle cx="8" cy="7" r="0.6" />
    </>
  ),
  floors: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 3v18M15 3v18M4 9h16M4 15h16" />
    </>
  ),
  parking: (
    <>
      <path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13" />
      <path d="M4 13h16v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M7 16h1M16 16h1" />
    </>
  ),
  balconies: (
    <>
      <rect x="4" y="3" width="16" height="16" rx="1" />
      <path d="M4 11h16M12 3v16M4 19h16v2" />
    </>
  ),
}

export function SpecIcon({ kind, className }: { kind: SpecKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={clsx('fill-none stroke-ink', className)}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[kind]}
    </svg>
  )
}

export type { SpecKind }
