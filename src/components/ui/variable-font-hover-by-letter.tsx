'use client'

import { cn } from '@/lib/utils'
import { debounce } from 'lodash'
import {
  DynamicAnimationOptions,
  motion,
  stagger,
  useAnimate,
} from 'motion/react'
import { useEffect, useState } from 'react'

interface TextProps {
  label: string
  fromFontVariationSettings: string
  toFontVariationSettings: string
  transition?: DynamicAnimationOptions
  staggerDuration?: number
  staggerFrom?: 'first' | 'last' | 'center' | number
  className?: string
  onClick?: () => void
  isHovered?: boolean
  showBackground?: boolean
}

const VariableFontHoverByLetter = ({
  label,
  fromFontVariationSettings = "'wght' 400, 'slnt' 0",
  toFontVariationSettings = "'wght' 900, 'slnt' -10",
  transition = {
    type: 'spring',
    duration: 0.7,
  },
  staggerDuration = 0.03,
  staggerFrom = 'first',
  className,
  onClick,
  isHovered: externalIsHovered,
  showBackground = true,
  ...props
}: TextProps) => {
  const [scope, animate] = useAnimate()
  const [internalIsHovered, setInternalIsHovered] = useState(false)
  const isHovered = externalIsHovered ?? internalIsHovered

  const mergeTransition = (baseTransition: DynamicAnimationOptions) => ({
    ...baseTransition,
    delay: stagger(staggerDuration, {
      from: staggerFrom,
    }),
  })

  useEffect(() => {
    if (externalIsHovered === undefined) return

    animate(
      '.letter',
      {
        fontVariationSettings: externalIsHovered
          ? toFontVariationSettings
          : fromFontVariationSettings,
      },
      mergeTransition(transition)
    )
  }, [externalIsHovered])

  const hoverStart = debounce(
    () => {
      if (externalIsHovered !== undefined) return
      if (isHovered) return
      setInternalIsHovered(true)

      animate(
        '.letter',
        { fontVariationSettings: toFontVariationSettings },
        mergeTransition(transition)
      )
    },
    100,
    { leading: true, trailing: true }
  )

  const hoverEnd = debounce(
    () => {
      if (externalIsHovered !== undefined) return
      setInternalIsHovered(false)

      animate(
        '.letter',
        { fontVariationSettings: fromFontVariationSettings },
        mergeTransition(transition)
      )
    },
    100,
    { leading: true, trailing: true }
  )

  return (
    <>
      {showBackground && (
        <motion.div
          className={cn(
            'fixed inset-0',
            'bg-dots-pattern dark:bg-dots-pattern-dark',
            '[background-size:4px_4px]',
            '[backdrop-filter:brightness(1.2)_blur(3px)]',
            'opacity-0 transition-opacity duration-300 pointer-events-none',
            isHovered && 'opacity-80'
          )}
        />
      )}
      <motion.span
        className={cn(
          className,
          'transition-[z-index] duration-300',
          isHovered ? 'relative z-[51]' : 'z-[49]'
        )}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        onClick={onClick}
        ref={scope}
        {...props}
      >
        <span className="sr-only">{label}</span>

        {label.split('').map((letter: string, i: number) => {
          return (
            <motion.span
              key={i}
              className="inline-block whitespace-pre letter"
              aria-hidden="true"
            >
              {letter}
            </motion.span>
          )
        })}
      </motion.span>
    </>
  )
}

export default VariableFontHoverByLetter
