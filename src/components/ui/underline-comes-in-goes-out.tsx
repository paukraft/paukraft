import cn from 'clsx'
import { motion, Transition, useAnimationControls } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

interface ComesInGoesOutUnderlineProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  className?: string
  onClick?: () => void
  underlineHeightRatio?: number
  underlinePaddingRatio?: number
  transition?: Transition
  listenerRef?: React.RefObject<HTMLElement>
}

const ComesInGoesOutUnderline = React.forwardRef<
  HTMLSpanElement,
  ComesInGoesOutUnderlineProps
>(
  (
    {
      children,
      direction = 'left',
      className,
      onClick,
      underlineHeightRatio = 0.1,
      underlinePaddingRatio = 0.01,
      transition = {
        duration: 0.4,
        ease: 'easeInOut',
      },
      listenerRef,
      ...props
    },
    forwardedRef
  ) => {
    const controls = useAnimationControls()
    const [blocked, setBlocked] = useState(false)
    const internalRef = useRef<HTMLSpanElement>(null)
    const textRef =
      (forwardedRef as React.RefObject<HTMLSpanElement>) || internalRef

    useEffect(() => {
      const updateUnderlineStyles = () => {
        if (textRef.current) {
          const fontSize = parseFloat(
            getComputedStyle(textRef.current).fontSize
          )
          const underlineHeight = fontSize * underlineHeightRatio
          const underlinePadding = fontSize * underlinePaddingRatio
          textRef.current.style.setProperty(
            '--underline-height',
            `${underlineHeight}px`
          )
          textRef.current.style.setProperty(
            '--underline-padding',
            `${underlinePadding}px`
          )
        }
      }

      updateUnderlineStyles()
      window.addEventListener('resize', updateUnderlineStyles)

      return () => window.removeEventListener('resize', updateUnderlineStyles)
    }, [underlineHeightRatio, underlinePaddingRatio, textRef])

    const animate = async () => {
      if (blocked) return

      setBlocked(true)

      await controls.start({
        width: '100%',
        transition,
        transitionEnd: {
          left: direction === 'left' ? 'auto' : 0,
          right: direction === 'left' ? 0 : 'auto',
        },
      })

      await controls.start({
        width: 0,
        transition,
        transitionEnd: {
          left: direction === 'left' ? 0 : '',
          right: direction === 'left' ? '' : 0,
        },
      })

      setBlocked(false)
    }

    useEffect(() => {
      const element = listenerRef?.current || textRef.current
      if (!element) return

      const handleMouseEnter = () => {
        animate()
      }

      element.addEventListener('mouseenter', handleMouseEnter)
      return () => element.removeEventListener('mouseenter', handleMouseEnter)
    }, [listenerRef, textRef])

    return (
      <motion.span
        className={cn('relative inline-block cursor-pointer', className)}
        onClick={onClick}
        ref={textRef}
        {...props}
      >
        <span>{children}</span>
        <motion.span
          className={cn('absolute bg-current w-0', {
            'left-0': direction === 'left',
            'right-0': direction === 'right',
          })}
          style={{
            height: 'var(--underline-height)',
            bottom: 'calc(1 * var(--underline-padding))',
          }}
          animate={controls}
        />
      </motion.span>
    )
  }
)

ComesInGoesOutUnderline.displayName = 'ComesInGoesOutUnderline'

export default ComesInGoesOutUnderline
