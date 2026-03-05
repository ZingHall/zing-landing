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
      {/* Animated wipe fill */}
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

      {/* Outline stroke */}
      <path
        d="M37.06 25.5L42.52 16.82L46.06 11.36H52.48V17.78L46.94 26.38L43.48 31.92H52.48V52.48H26.78V38.35L21.68 46.7L17.78 52.48H11.36V46.06L16.82 37.38L20.36 31.92H11.36V11.36H37.06V25.5Z"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="0.7"
      />

      {/* ClipPath for wipe animation */}
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d="M37.06 25.5L42.52 16.82L46.06 11.36H52.48V17.78L46.94 26.38L43.48 31.92H52.48V52.48H26.78V38.35L21.68 46.7L17.78 52.48H11.36V46.06L16.82 37.38L20.36 31.92H11.36V11.36H37.06V25.5Z" />
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
