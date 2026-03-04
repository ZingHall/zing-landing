'use client'

import { useState } from 'react'

interface ZingCTAButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function ZingCTAButton({
  href,
  children,
  className = '',
  style = {},
  ...props
}: ZingCTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const buttonStyle = {
    backgroundColor: isHovered ? '#E6440F' : '#FF4D13',
    ...style,
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-2xl px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 focus:ring-4 focus:ring-orange-500/20 focus:outline-none ${className}`}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </a>
  )
}
