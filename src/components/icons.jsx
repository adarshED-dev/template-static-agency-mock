const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ children, size = 24, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest} aria-hidden="true">
      {children}
    </svg>
  )
}

export const CartIcon = (props) => (
  <Svg {...props}>
    <circle cx="9" cy="21" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="18" cy="21" r="1.2" fill="currentColor" stroke="none" />
    <path d="M2.5 3h2.4l2 12.2a2 2 0 0 0 2 1.7h8.3a2 2 0 0 0 2-1.6L21 8H6.2" />
  </Svg>
)

export const CodeIcon = (props) => (
  <Svg {...props}>
    <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13 5l-2 14" />
  </Svg>
)

export const LayersIcon = (props) => (
  <Svg {...props}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 8v5M21 8v5" />
  </Svg>
)

export const ChartIcon = (props) => (
  <Svg {...props}>
    <path d="M4 20V10M11 20V4M18 20v-7" />
    <path d="M2.5 20h19" />
  </Svg>
)

export const ShieldIcon = (props) => (
  <Svg {...props}>
    <path d="M12 3.5 4.5 6v6.2c0 4.4 3.1 7.3 7.5 8.3 4.4-1 7.5-3.9 7.5-8.3V6L12 3.5Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Svg>
)

export const UsersIcon = (props) => (
  <Svg {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c.6-3.4 3-5.4 6-5.4s5.4 2 6 5.4" />
    <circle cx="17.5" cy="8.5" r="2.4" />
    <path d="M21 20c-.3-2.3-1.4-4-3.1-4.9" />
  </Svg>
)

export const ArrowRightIcon = (props) => (
  <Svg {...props}>
    <path d="M4 12h16M13 5l7 7-7 7" />
  </Svg>
)

export const MenuIcon = (props) => (
  <Svg {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Svg>
)

export const CloseIcon = (props) => (
  <Svg {...props}>
    <path d="M5 5l14 14M19 5 5 19" />
  </Svg>
)

export const CheckIcon = (props) => (
  <Svg {...props}>
    <path d="m4 12.5 5 5L20 6" />
  </Svg>
)

export const TargetIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r=".8" fill="currentColor" stroke="none" />
  </Svg>
)

export const HandshakeIcon = (props) => (
  <Svg {...props}>
    <path d="M2.5 12.5 7 8l3.5 3-1.6 1.6a1.6 1.6 0 0 0 2.3 2.3l3.6-3.6 4.7 3.7" />
    <path d="m7 8 3-2.5 3 2 3-2 3.5 2.5" />
    <path d="m14.5 15.5 1.6 1.6a1.6 1.6 0 0 0 2.3-2.3" />
  </Svg>
)

export const SparkleIcon = (props) => (
  <Svg {...props}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </Svg>
)

export const MailIcon = (props) => (
  <Svg {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 6.5 8 6 8-6" />
  </Svg>
)

export const PhoneIcon = (props) => (
  <Svg {...props}>
    <path d="M6.5 3.5 9 6l-1.8 2.5a13 13 0 0 0 6.3 6.3L15.9 13l2.6 2.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3 4.6a1.5 1.5 0 0 1 1.5-1.1h2Z" />
  </Svg>
)

export const PinIcon = (props) => (
  <Svg {...props}>
    <path d="M12 21s7-6.4 7-12a7 7 0 0 0-14 0c0 5.6 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.4" />
  </Svg>
)

export const SearchIcon = (props) => (
  <Svg {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.6-3.6" />
  </Svg>
)

export const MapIcon = (props) => (
  <Svg {...props}>
    <path d="M9 5 4 7v12l5-2 6 2 5-2V5l-5 2-6-2Z" />
    <path d="M9 5v12M15 7v12" />
  </Svg>
)

export const GaugeIcon = (props) => (
  <Svg {...props}>
    <path d="M4 15a8 8 0 1 1 16 0" />
    <path d="M12 15 15.5 9" />
    <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
  </Svg>
)

export const PackageIcon = (props) => (
  <Svg {...props}>
    <path d="m3.5 7 8.5-4 8.5 4-8.5 4-8.5-4Z" />
    <path d="M3.5 7v10l8.5 4 8.5-4V7M12 11v10" />
  </Svg>
)

export const RepeatIcon = (props) => (
  <Svg {...props}>
    <path d="M4 7h13l-2.5-2.5M20 17H7l2.5 2.5" />
  </Svg>
)
