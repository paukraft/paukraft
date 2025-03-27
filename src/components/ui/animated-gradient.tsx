'use client'

import React, { useMemo, useRef } from 'react'

import { useDimensions } from '@/hooks/use-debounced-dimensions'
import { cn } from '@/lib/utils'

interface AnimatedGradientProps {
  colors: string[]
  speed?: number
  blur?: 'light' | 'medium' | 'heavy'
  blobSize?: 'small' | 'medium' | 'large'
  className?: string
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 0.05,
  blur = 'light',
  blobSize = 'medium',
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)

  const blurClass =
    blur === 'light'
      ? 'blur-2xl'
      : blur === 'medium'
      ? 'blur-3xl'
      : 'blur-[100px]'

  const getBlobSizeMultiplier = (size: string) => {
    switch (size) {
      case 'small':
        return [0.15, 0.4] // Reduced from [0.3, 0.8]
      case 'large':
        return [0.6, 1.5] // Reduced from [0.8, 2]
      default:
        return [0.3, 0.8] // Reduced from [0.5, 1.5]
    }
  }

  const [minSize, maxSize] = getBlobSizeMultiplier(blobSize)

  // Memoize all random values including sizes
  const blobConfigs = useMemo(
    () =>
      colors.map(() => ({
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 50}%`,
        sizeMultiplier: randomInt(minSize * 100, maxSize * 100) / 100,
        transforms: {
          '--tx-1': Math.random() - 0.5,
          '--ty-1': Math.random() - 0.5,
          '--tx-2': Math.random() - 0.5,
          '--ty-2': Math.random() - 0.5,
          '--tx-3': Math.random() - 0.5,
          '--ty-3': Math.random() - 0.5,
          '--tx-4': Math.random() - 0.5,
          '--ty-4': Math.random() - 0.5,
        },
      })),
    [] // Empty deps array as we want these random values to stay constant
  )

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  )

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 overflow-hidden', className)}
    >
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => {
          const config = blobConfigs[index]
          const size = circleSize * config.sizeMultiplier
          return (
            <svg
              key={index}
              className="absolute animate-background-gradient"
              style={
                {
                  top: config.top,
                  left: config.left,
                  '--background-gradient-speed': `${1 / speed}s`,
                  ...config.transforms,
                } as React.CSSProperties
              }
              width={size}
              height={size}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill={color} />
            </svg>
          )
        })}
      </div>
    </div>
  )
}

export default AnimatedGradient
