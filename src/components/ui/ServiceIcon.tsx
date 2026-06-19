import { clsx } from '../../lib/clsx'

type ServiceKind =
  | 'sales' | 'purchase' | 'leasing' | 'investment'
  | 'market' | 'management' | 'legal' | 'relocation'

const paths: Record<ServiceKind, React.ReactNode> = {
  sales: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  purchase: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  leasing: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l8 8M16 16l2-2M18.5 18.5l1.5-1.5" />
    </>
  ),
  investment: (
    <>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <path d="M8.2 11l7.6-3.8M8.2 13l7.6 3.8" />
    </>
  ),
  market: (
    <>
      <path d="M4 20h16" />
      <rect x="5" y="12" width="3" height="6" />
      <rect x="10.5" y="8" width="3" height="10" />
      <rect x="16" y="4" width="3" height="14" />
    </>
  ),
  management: (
    <>
      <path d="M4 4h6v6H4zM14 14h6v6h-6z" />
      <path d="M14 4h6v6h-6zM4 14h6v6H4z" opacity="0.4" />
    </>
  ),
  legal: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M10 12h5M10 16h5" />
    </>
  ),
  relocation: (
    <>
      <path d="M3 13l3-3 3 1 3-3 3 1" />
      <path d="M12 9l3-1 3 2 2-1" />
      <path d="M3 13c1 3 3 5 5 5l3-2 3 2c2 0 4-2 5-5" />
    </>
  ),
}

export function ServiceIcon({ kind, className }: { kind: ServiceKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={clsx('fill-none stroke-current', className)}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[kind]}
    </svg>
  )
}

export type { ServiceKind }
