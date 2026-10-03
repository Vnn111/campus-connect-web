import type { SVGProps } from 'react'
import type { IconName } from '../data/siteContent'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName | 'menu' | 'close' | 'arrowDown' | 'chevronDown' | 'download'
  decorative?: boolean
}

const paths: Record<IconProps['name'], React.ReactNode> = {
  camera: <><path d="M14.5 5 13 3H7L5.5 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><circle cx="10" cy="12" r="4"/></>,
  compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></>,
  building: <><path d="M4 21V5l8-3 8 3v16"/><path d="M2 21h20M8 9h2m4 0h2m-8 4h2m4 0h2m-8 4h2m4 0h2"/></>,
  qr: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><path d="M15 15h2v2h-2zm4 0h2v4h-2zm-4 4h4v2h-4z"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18"/></>,
  mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  route: <><circle cx="5" cy="19" r="2"/><circle cx="19" cy="5" r="2"/><path d="M7 19h3a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2h3"/></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4m-3 14h2"/></>,
  wifi: <><path d="M5 10a11 11 0 0 1 14 0M8 13a6 6 0 0 1 8 0m-5 4a1.5 1.5 0 1 1 2 0"/></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m21 15-5-5L5 20"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  alert: <><path d="M10.3 3.8 2.2 18a2 2 0 0 0 1.8 3h16a2 2 0 0 0 1.8-3L13.7 3.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 4h.01"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  arrowDown: <><path d="M12 3v14m-5-5 5 5 5-5M5 21h14"/></>,
  chevronDown: <path d="m6 9 6 6 6-6"/>,
  download: <><path d="M12 3v12m-4-4 4 4 4-4M4 21h16"/></>,
}

export function Icon({ name, decorative = true, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={decorative ? 'true' : undefined}
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
