'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

type ButtonProps = {
  invert?: boolean
  variant?: 'default' | 'zing'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const zingOrange = '#FF4D13'
  const zingOrangeHover = '#E6440F'

  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    variant === 'zing'
      ? 'text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/20'
      : invert
        ? 'bg-white text-neutral-950 hover:bg-neutral-200'
        : 'bg-neutral-950 text-white hover:bg-neutral-800',
  )

  const style =
    variant === 'zing'
      ? { backgroundColor: isHovered ? zingOrangeHover : zingOrange }
      : {}

  const hoverHandlers =
    variant === 'zing'
      ? {
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false),
          onFocus: () => setIsHovered(true),
          onBlur: () => setIsHovered(false),
        }
      : {}

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} style={style} {...hoverHandlers} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} style={style} {...hoverHandlers} {...props}>
      {inner}
    </Link>
  )
}
