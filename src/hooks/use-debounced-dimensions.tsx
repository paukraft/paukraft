import { RefObject, useEffect, useState } from 'react'

interface Dimensions {
  width: number
  height: number
}

export function useDimensions(
  ref: RefObject<HTMLElement | SVGElement>
): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (!ref.current) return

    const updateDimensions = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()

        // Handle different measurement methods for HTML vs SVG elements
        let width = rect.width
        let height = rect.height

        if (ref.current instanceof HTMLElement) {
          width = Math.max(
            width,
            ref.current.offsetWidth,
            ref.current.scrollWidth
          )
          height = Math.max(
            height,
            ref.current.offsetHeight,
            ref.current.scrollHeight
          )
        }

        // Only update if dimensions actually changed
        setDimensions((prev) => {
          if (prev.width === width && prev.height === height) return prev
          return { width, height }
        })
      }
    }

    // Create a ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions()
    })

    // Create a MutationObserver to watch for DOM changes
    const mutationObserver = new MutationObserver(() => {
      updateDimensions()
    })

    // Observe both size and content changes
    resizeObserver.observe(ref.current)
    mutationObserver.observe(ref.current, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    })

    // Initial measurement
    updateDimensions()

    // Also watch for window resize as a fallback
    window.addEventListener('resize', updateDimensions)

    // Cleanup
    return () => {
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('resize', updateDimensions)
    }
  }, [ref])

  return dimensions
}
