import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  const id = useId()

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      {/* Animated Fill */}
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'transition-all duration-300',
          invert ? 'fill-white' : 'fill-[#FF4D13]',
          filled ? 'w-full' : 'w-0 group-hover/logo:w-full',
        )}
        width="64"
        height="64"
      />

      <path
        d="M38.72 23.6L45.86 12.26L50.48 5.12H58.88V13.52L51.63 24.76L47.12 32H58.88V58.88H25.28V40.4L18.61 51.32L13.52 58.88H5.12V50.48L12.26 39.14L16.88 32H5.12V5.12H38.72V23.6Z"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="0.7"
      />

      <defs>
        <clipPath id={`${id}-clip`}>
          <path d="M38.72 23.6L45.86 12.26L50.48 5.12H58.88V13.52L51.63 24.76L47.12 32H58.88V58.88H25.28V40.4L18.61 51.32L13.52 58.88H5.12V50.48L12.26 39.14L16.88 32H5.12V5.12H38.72V23.6Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 220 64"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="72"
        y="42"
        className={clsx(
          'font-display font-semibold',
          invert ? 'fill-white' : 'fill-neutral-950',
        )}
        style={{ fontSize: '30px' }}
      >
        Zing
      </text>
    </svg>
  )
}
